import j, { ClassMethod, TSTypeAnnotation, TypeAnnotation, TSTypePredicate, ClassProperty } from 'jscodeshift';
import { IReqDto, IField } from './dsl';
import { IComponent } from '@nxapi/nxapi-search-code';
import Decorator from './decorator';
import Ast from './ast';

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
    const mapVal = heapMap.get(nodeTypeName) || templateMap.get(nodeTypeName);
    const ownerComponent: IComponent = mapVal.ownerComponent;
    dsl.fileFullPath = ownerComponent.getFullPath();
    dsl.type = nodeTypeName;
    // const classJcs2 = ownerComponent.getJCS().find(j.ClassDeclaration);
    // if (classJcs.length > 1) {
    //   console.error(dsl.fileFullPath + '文件中不能包含多个类');
    //   return;
    // }
    const declareJcs = Ast.astNodeToJcs(mapVal.exportNode);
    const classDeclareJcs = declareJcs.find(j.ClassDeclaration);
    const declareTemplate = classDeclareJcs.find(j.TSTypeParameterDeclaration).nodes();
    const refTempate = node.typeAnnotation.typeAnnotation.typeParameters;
    templateMap = this.getTemplateMap(refTempate, declareTemplate[0], heapMap, templateMap);
    //对象属性处理
    const classPropertyNodes = classDeclareJcs.find(j.ClassProperty).nodes();
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
    const refTmpArr = [];
    if (!refTempate || !declareTemplate) return retTemplateMap;
    if (refTempate.params.length !== declareTemplate.params.length) return retTemplateMap;
    for (let i = 0; i < declareTemplate.params.length; ++i) {
      let refTmp = refTempate.params[i];
      const declareTmp = declareTemplate.params[i];
      //refTmp是模板类型 {a: Test<T>} ,refTmp为T
      //class Test<T>{}

      if (this.isArrayType(this.getNodeType(this.constructorTypeAnnotation(refTmp)))) {
        const refTempVal = parentTemplateMap.get(refTmp.elementType.typeName.name);
        if (refTempVal && refTempVal.isTemplate) {
          refTmp = Object.assign({}, refTmp, { elementType: refTempVal.typeAnnotation.typeAnnotation });
        }
      } else {
        const refTempVal = parentTemplateMap.get(refTmp.typeName.name);
        if (refTempVal && refTempVal.isTemplate) {
          refTmp = refTempVal.typeAnnotation.typeAnnotation;
        }
      }
      const typeAnnotation = this.constructorTypeAnnotation(refTmp, true);
      retTemplateMap.set(declareTmp.name, typeAnnotation);
      refTmpArr.push(refTmp);
      this.makeUpRelativeType(refTmp, retTemplateMap, heapMap, parentTemplateMap);
      // const tmpTypeNames = this.getRelativeTypeNames(refTmp);
      // tmpTypeNames.forEach(name => {
      //   const relativeTypeAnnotation = heapMap.get(name) || parentTemplateMap.get(name);
      //   retTemplateMap.set(name, relativeTypeAnnotation);
      //   // tmpArr.push(relativeTypeAnnotation);
      // });
    }
    // for (let i = 0; i < tmpArr.length; ++i) {
    //   if (!tmpArr[i].isTemplate) continue;

    // }
    // retTemplateMap.forEach((v, k) => {

    // });
    // for (let i = 0; i < refTmpArr.length; ++i) {
    //   this.makeUpRelativeType(refTmpArr[i], retTemplateMap, heapMap, parentTemplateMap);
    // }

    return retTemplateMap;
  }

  private static makeUpRelativeType(refTmp: any, retTemplateMap: Map<string, any>, heapMap: Map<string, any>,
    parentTemplateMap: Map<string, any>) {
    const tmpTypeNames = this.getRelativeTypeNames(refTmp);
    tmpTypeNames.forEach(name => {
      const relativeTypeAnnotation = heapMap.get(name) || parentTemplateMap.get(name);
      if (!relativeTypeAnnotation) return;
      retTemplateMap.set(name, relativeTypeAnnotation);
      if (relativeTypeAnnotation.isTemplate) {
        this.makeUpRelativeType(relativeTypeAnnotation.typeAnnotation.typeAnnotation, retTemplateMap, heapMap, parentTemplateMap);

      } else {
        retTemplateMap.set(name, relativeTypeAnnotation);
      }

    });
  }

  private static getRelativeTypeNames(node: any) {
    const nodeType = this.getNodeType(this.constructorTypeAnnotation(node));
    if (this.isArrayType(nodeType)) node = node.elementType;
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
      isTemplate
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
