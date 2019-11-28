import j, { ClassMethod, TSTypeAnnotation, TypeAnnotation, TSTypePredicate, ClassProperty } from 'jscodeshift';
import { IReqDto, IField } from './dsl';
import { IComponent } from '@nxapi/nxapi-search-code';
import Decorator from './decorator';

export default class ReqDto {
  public static convertToDsl(cm: ClassMethod, heapMap: Map<string, any>) {
    const reqDsl: IReqDto = { fields: [] };
    const dtoDsl: IReqDto = {};
    this.dealReq(cm.params, reqDsl, heapMap);
    this.dealDto(cm.returnType, dtoDsl, heapMap);
    return { req: reqDsl, dto: dtoDsl };
  }
  private static dealReq(params: any[], reqDsl: IReqDto, heapMap: Map<string, any>) {
    if (params.length === 1) {
      const param = params[0];
      const paramType = this.getNodeType(param);
      if (this.isArrayType(paramType) || this.isBaseType(paramType)) {
        reqDsl.type = 'params';
        this.dealField(param, reqDsl, heapMap);
      } else {
        this.dealObject(param, reqDsl, heapMap);
      }
    } else if (params.length > 1) {
      reqDsl.type = 'params';
      params.forEach(param => {
        this.dealField(param, reqDsl, heapMap);
      });
    }

    // const paramType = this.getNodeType(param);
    // //req为自定义对象
    // if (!this.isBaseType(paramType)) {
    //   this.dealObject(param, reqDsl, heapMap);
    // }
  }
  private static dealDto(
    returnType: TypeAnnotation | TSTypeAnnotation | TSTypePredicate,
    dtoDsl: IReqDto,
    heapMap: Map<string, any>
  ) {
    if (!returnType) return;
    let n: any = { typeAnnotation: returnType };
    let nodeType = this.getNodeType(n);
    dtoDsl.isArray = this.isArrayType(nodeType);
    if (dtoDsl.isArray) {
      n = { typeAnnotation: { typeAnnotation: returnType.typeAnnotation['elementType'] } };
      nodeType = this.getNodeType(n);
    }
    //dto为自定义对象
    if (!this.isBaseType(nodeType)) {
      this.dealObject(n, dtoDsl, heapMap);
    } else {
      dtoDsl.type = nodeType;
    }
  }

  private static dealObject(
    node: any,
    dsl: IReqDto,
    heapMap: Map<string, any>,
    templateMap: Map<string, any> = new Map()
  ) {
    dsl.fields = [];
    const nodeTypeName = node.typeAnnotation.typeAnnotation.typeName.name;
    const typeParameters = node.typeAnnotation.typeAnnotation.typeParameters;
    const mapVal = heapMap.get(nodeTypeName) || templateMap.get(nodeTypeName);
    const ownerComponent: IComponent = mapVal.ownerComponent;
    dsl.fileFullPath = ownerComponent.getFullPath();
    dsl.type = nodeTypeName;
    const classJcs = ownerComponent.getJCS().find(j.ClassDeclaration);
    if (classJcs.length > 1) {
      console.error(dsl.fileFullPath + '文件中不能包含多个类');
      return;
    }
    const templateNodes = classJcs.find(j.TSTypeParameterDeclaration).nodes();
    templateMap = this.getTemplateMap(typeParameters, (templateNodes as any)[0], heapMap, templateMap);
    //对象属性处理
    const classPropertyNodes = classJcs.find(j.ClassProperty).nodes();
    classPropertyNodes.forEach(n => {
      this.dealField(n, dsl, ownerComponent.getHeapMap(), templateMap);
    });
  }

  private static dealField(
    node: any,
    dsl: IReqDto,
    heapMap: Map<string, any>,
    templateMap: Map<string, any> = new Map()
  ) {
    const field: IField = {};
    field.name = node.key ? node.key['name'] : node.name;
    field.type = this.getNodeType(node);
    if (templateMap.get(field.type)) {
      node = templateMap.get(field.type);
      field.type = this.getNodeType(node);
    }
    field.isArray = this.isArrayType(field.type);
    if (field.isArray) {
      field.type = this.getNodeType(this.constructorTypeAnnotation(node.typeAnnotation.typeAnnotation['elementType']));
      if (!this.isBaseType(field.type)) {
        //自定义对象
        field.typeDeclare = {};
        this.dealObject(
          this.constructorTypeAnnotation(node.typeAnnotation.typeAnnotation['elementType']),
          field.typeDeclare,
          heapMap,
          templateMap
        );
      }
    } else if (!this.isBaseType(field.type)) {
      //自定义对象
      field.typeDeclare = {};
      this.dealObject(node, field.typeDeclare, heapMap, templateMap);
    }
    const decoratorDsl = Decorator.convertToDsl(node['decorators']);
    if (decoratorDsl) Object.assign(field, decoratorDsl);
    dsl.fields.push(field);
  }

  private static getTemplateMap(
    refTempate: any,
    declareTemplate: any,
    heapMap: Map<string, any>,
    parentTemplateMap: Map<string, any>
  ) {
    const retTemplateMap = new Map();
    if (!refTempate || !declareTemplate) return retTemplateMap;
    if (refTempate.params.length !== declareTemplate.params.length) return retTemplateMap;
    for (let i = 0; i < declareTemplate.params.length; ++i) {
      const refTmp = refTempate.params[i];
      const declareTmp = declareTemplate.params[i];
      const typeAnnotation = this.constructorTypeAnnotation(refTmp);
      retTemplateMap.set(declareTmp.name, typeAnnotation);
      const tmpTypeNames = this.getLoopTypeNames(refTmp);
      tmpTypeNames.forEach(name => {
        retTemplateMap.set(name, heapMap.get(name) || parentTemplateMap.get(name));
      });
    }
    return retTemplateMap;
  }

  private static getLoopTypeNames(node: any) {
    const nodeType = this.getNodeType(this.constructorTypeAnnotation(node));
    if (this.isArrayType(nodeType)) node = node.elementType;
    const names = [];
    names.push(node.typeName.name);
    if (!node.typeParameters) return names;
    node.typeParameters.params.forEach((item: any) => {
      names.push(...this.getLoopTypeNames(item));
    });
    return names;
  }

  private static isTemplate(node: any, templateMap: Map<string, any>) {
    return templateMap.get(this.getNodeType(node)) ? true : false;
  }

  private static constructorTypeAnnotation(typeAnnotation: any) {
    return {
      typeAnnotation: { typeAnnotation },
    };
  }

  private static getNodeType(n: any) {
    let nodeType: string = n.typeAnnotation.typeAnnotation.type;
    if (nodeType === 'TSArrayType') {
      return 'array';
    } else if (nodeType !== 'TSTypeReference') {
      //基础类型
      nodeType = nodeType
        .replace('TS', '')
        .replace('Keyword', '')
        .toLowerCase();
    } else {
      nodeType = n.typeAnnotation.typeAnnotation.typeName.name;
    }
    return nodeType;
  }

  private static isBaseType(typeName: string) {
    const types = ['number', 'string', 'boolean', 'object', 'Object', 'any'];
    return types.includes(typeName);
  }
  private static isArrayType(typeName: string) {
    return typeName === 'array';
  }
}
