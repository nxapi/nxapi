import j, { ClassMethod, TSTypeAnnotation, TypeAnnotation, TSTypePredicate, ClassProperty } from 'jscodeshift';
import { IReqDto, IField } from './dsl';
import { IComponent } from '@nxapi/nxapi-search-code';
import Decorator from './decorator';
import Ast from './ast';
import { SystemGenerics } from './system-generics';

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
    classMap: Map<string, any> = new Map(),
    templateMap: Map<string, any> = new Map()
  ) {
    dsl.fields = [];
    const typeName = node.typeAnnotation.typeAnnotation.typeName.name;
    const typeNodeInfo =
      heapMap.get(typeName) ||
      templateMap.get(typeName) ||
      classMap.get(typeName) ||
      SystemGenerics.getMap().get(typeName);
    const ownerComponent: IComponent = typeNodeInfo.ownerComponent;
    dsl.fileFullPath = ownerComponent.getFullPath();
    dsl.type = typeName;
    const declareJcs = Ast.astNodeToJcs(typeNodeInfo.exportNode);
    const classDeclareJcs = declareJcs.find(j.ClassDeclaration);
    const declareTemplate = classDeclareJcs.find(j.TSTypeParameterDeclaration).nodes();
    const refTempate = node.typeAnnotation.typeAnnotation.typeParameters;
    //模板类型向下传递
    templateMap = this.getTemplateMap(refTempate, declareTemplate[0], heapMap, classMap, templateMap);
    //对象属性处理
    const classPropertyNodes = classDeclareJcs.find(j.ClassProperty).nodes();
    classPropertyNodes.forEach(n => {
      this.dealField(n, dsl, ownerComponent.getHeapMap(), ownerComponent.getClassMap(), templateMap);
    });
  }

  private static dealField(
    node: any,
    dsl: IReqDto,
    heapMap: Map<string, any>,
    classMap: Map<string, any> = new Map(),
    templateMap: Map<string, any> = new Map()
  ) {
    const field: IField = {};
    field.name = node.key ? node.key['name'] : node.name;
    field.type = this.getNodeType(node);
    const tmpMapVal = templateMap.get(field.type);
    if (tmpMapVal && tmpMapVal.isTemplate) {
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
          classMap,
          templateMap
        );
      }
    } else if (!this.isBaseType(field.type)) {
      //自定义对象
      field.typeDeclare = {};
      this.dealObject(node, field.typeDeclare, heapMap, classMap, templateMap);
    }
    const decoratorDsl = Decorator.convertToDsl(node['decorators']);
    if (decoratorDsl) Object.assign(field, decoratorDsl);
    dsl.fields.push(field);
  }
  //将T替换成具体的类型
  private static replaceTemplateByRealType(refTmp: any, parentTemplateMap: Map<string, any>) {
    if (this.isArrayType(this.getNodeType(this.constructorTypeAnnotation(refTmp)))) {
      if (this.isBaseTypeOfNode(refTmp.elementType)) return;
      const refTempVal = parentTemplateMap.get(refTmp.elementType.typeName.name);
      if (refTempVal && refTempVal.isTemplate) {
        Object.assign(refTmp, { elementType: refTempVal.typeAnnotation.typeAnnotation });
      }
      this.replaceTypeParamsTemplateByRealType(refTmp.elementType, parentTemplateMap);
    } else {
      if (this.isBaseTypeOfNode(refTmp)) return;
      const refTempVal = parentTemplateMap.get(refTmp.typeName.name);
      if (refTempVal && refTempVal.isTemplate) {
        Object.assign(refTmp, refTempVal.typeAnnotation.typeAnnotation);
      }
      this.replaceTypeParamsTemplateByRealType(refTmp, parentTemplateMap);
    }
  }
  //将T替换成具体的类型--模板参数处理
  private static replaceTypeParamsTemplateByRealType(refTmp: any, parentTemplateMap: Map<string, any>) {
    if (!refTmp.typeParameters) return;
    const typeParameters = Object.assign({}, refTmp.typeParameters);
    typeParameters.params = [];
    refTmp.typeParameters.params.forEach((n: any) => {
      const item = Object.assign({}, n);
      typeParameters.params.push(item);
      if (this.isArrayType(this.getNodeType(this.constructorTypeAnnotation(n)))) {
        const nVal = parentTemplateMap.get(n.elementType.typeName.name);
        if (nVal && nVal.isTemplate) {
          Object.assign(item, { elementType: nVal.typeAnnotation.typeAnnotation });
        }
        this.replaceTypeParamsTemplateByRealType(item.elementType, parentTemplateMap);
      } else {
        const nVal = parentTemplateMap.get(n.typeName.name);
        if (nVal && nVal.isTemplate) {
          Object.assign(item, nVal.typeAnnotation.typeAnnotation);
        }
        this.replaceTypeParamsTemplateByRealType(item, parentTemplateMap);
      }
    });
    refTmp.typeParameters = typeParameters;
  }

  private static getTemplateMap(
    refTempate: any,
    declareTemplate: any,
    heapMap: Map<string, any>,
    classMap: Map<string, any>,
    parentTemplateMap: Map<string, any>
  ) {
    const retTemplateMap = new Map();
    if (!refTempate || !declareTemplate) return retTemplateMap;
    if (refTempate.params.length !== declareTemplate.params.length) return retTemplateMap;
    for (let i = 0; i < declareTemplate.params.length; ++i) {
      const refTmp = Object.assign({}, refTempate.params[i]);
      const declareTmp = declareTemplate.params[i];
      this.replaceTemplateByRealType(refTmp, parentTemplateMap);
      const typeAnnotation = this.constructorTypeAnnotation(refTmp, true);
      retTemplateMap.set(declareTmp.name, typeAnnotation);
      const tmpTypeNames = this.getRelativeTypeNames(refTmp);
      tmpTypeNames.forEach(name => {
        const relativeTypeAnnotation = heapMap.get(name) || parentTemplateMap.get(name) || classMap.get(name);
        retTemplateMap.set(name, relativeTypeAnnotation);
      });
    }
    return retTemplateMap;
  }

  private static getRelativeTypeNames(node: any) {
    const nodeType = this.getNodeType(this.constructorTypeAnnotation(node));
    if (this.isBaseType(nodeType)) return [];
    if (this.isArrayType(nodeType)) {
      node = node.elementType;
      if (this.isBaseTypeOfNode(node)) return [];
    }

    const names = [];
    names.push(node.typeName.name);
    if (!node.typeParameters) return names;
    node.typeParameters.params.forEach((item: any) => {
      names.push(...this.getRelativeTypeNames(item));
    });
    return names;
  }

  private static constructorTypeAnnotation(typeAnnotation: any, isTemplate: boolean = false) {
    return {
      typeAnnotation: { typeAnnotation },
      isTemplate,
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
  private static isBaseTypeOfNode(node: any) {
    return this.isBaseType(this.getNodeType(this.constructorTypeAnnotation(node)));
  }
}
