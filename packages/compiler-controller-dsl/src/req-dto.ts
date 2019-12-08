import j, { ClassMethod, TSTypeAnnotation, TypeAnnotation, TSTypePredicate, ClassProperty } from 'jscodeshift';
import { IReqDto, IField } from './dsl';
import { IComponent } from '@nxapi/nxapi-search-code';
import Decorator from './decorator';
import Ast from './ast';
import { SystemType } from './system-type';

export default class ReqDto {
  public static convertToDsl(cm: any, heapMap: Map<string, any>) {
    const reqDsl: IReqDto = { fields: [] };
    const dtoDsl: IReqDto = {};
    this.dealReq(cm.parameters, reqDsl, heapMap);
    this.dealDto(cm.typeAnnotation, dtoDsl, heapMap);
    return { req: reqDsl, dto: dtoDsl };
  }
  private static dealReq(params: any[], reqDsl: IReqDto, heapMap: Map<string, any>) {
    if (params.length === 1) {
      const param = params[0];
      this.genericsArrayToBaseArray(param);
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
    this.genericsArrayToBaseArray(n);
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
  private static objDslMap = new Map<string, IReqDto>();
  private static dealObject(
    node: any,
    dsl: IReqDto,
    heapMap: Map<string, any>,
    classMap: Map<string, any> = new Map(),
    templateMap: Map<string, any> = new Map()
  ) {
    if (!node.typeAnnotation.typeAnnotation.typeName) {
      console.log('dfdf');
      return;
    }
    dsl.fields = [];
    const typeName = node.typeAnnotation.typeAnnotation.typeName.name;
    const typeNodeInfo =
      heapMap.get(typeName) || templateMap.get(typeName) || classMap.get(typeName) || SystemType.getMap().get(typeName);
    if (!typeNodeInfo) {
      console.error('找不到类型定义：' + typeName);
      return;
    }
    const ownerComponent: IComponent = typeNodeInfo.ownerComponent;
    dsl.fileFullPath = ownerComponent.getFullPath();
    dsl.type = typeName;
    if (!typeNodeInfo.exportNode) {
      console.error('类型暂时不支持：' + dsl.type);
      return;
    }
    if (this.objDslMap.get(dsl.fileFullPath)) {
      dsl.fields = this.objDslMap.get(dsl.fileFullPath).fields;
      return;
    } else this.objDslMap.set(dsl.fileFullPath, dsl);
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
    this.genericsArrayToBaseArray(node);
    field.name = node.key ? node.key['name'] : node.name;
    field.type = this.getNodeType(node);
    const tmpMapVal = templateMap.get(field.type);
    if (tmpMapVal && tmpMapVal.isTemplate) {
      node = templateMap.get(field.type);
      this.genericsArrayToBaseArray(node);
      field.type = this.getNodeType(node);
    }
    field.isArray = this.isArrayType(field.type);
    if (field.isArray) {
      field.type = this.getNodeType(this.constructorTypeAnnotation(node.typeAnnotation.typeAnnotation['elementType']));
      if (!this.isBaseType(field.type)) {
        //:todo 之后优化
        const tmpMapVal = templateMap.get(field.type);
        if (tmpMapVal && tmpMapVal.isTemplate) {
          node.typeAnnotation.typeAnnotation['elementType'] = templateMap.get(field.type).typeAnnotation.typeAnnotation;
          this.genericsArrayToBaseArray(node);
          field.type = this.getNodeType(
            this.constructorTypeAnnotation(node.typeAnnotation.typeAnnotation['elementType'])
          );
        }
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

  private static genericsArrayToBaseArray(n: any) {
    const nodeType = this.getNodeType(n);
    if (nodeType !== 'Array') return;
    const elementType = n.typeAnnotation.typeAnnotation.typeParameters.params[0];
    n.typeAnnotation.typeAnnotation.elementType = elementType;
    n.typeAnnotation.typeAnnotation.type = 'TSArrayType';
    delete n.typeAnnotation.typeAnnotation.typeName;
    delete n.typeAnnotation.typeAnnotation.typeParameters;
  }

  private static getNodeType(n: any) {
    const node = n.typeAnnotation.typeAnnotation;
    let nodeType: string = node.type;
    if (nodeType === 'TSArrayType') {
      return 'array';
    } else if (nodeType === 'TSTypeLiteral' && node.members && node.members.length > 0) {
      if (!node.members[0].key) {
        //:todo
        return 'object';
        // console.log('ddd');
      }
      // bigDecimal
      if (node.members[0].key.name === 'value') return 'number';
      else {
        console.error('位置类型');
        return 'object';
      }
    } else if (nodeType !== 'TSTypeReference') {
      //基础类型
      nodeType = nodeType
        .replace('TS', '')
        .replace('Keyword', '')
        .toLowerCase();
    } else {
      nodeType = node.typeName.name;
    }
    return nodeType;
  }

  private static isBaseType(typeName: string) {
    if (typeName.startsWith('Java')) return true;
    const types = ['number', 'string', 'boolean', 'object', 'Object', 'any', 'Date'];
    return types.includes(typeName);
  }
  private static isArrayType(typeName: string) {
    return typeName === 'array';
  }
  private static isBaseTypeOfNode(node: any) {
    return this.isBaseType(this.getNodeType(this.constructorTypeAnnotation(node)));
  }
  // private static isJavaType(typeName: string) {
  //   const types = [
  //     'JavaString',
  //     'JavaBoolean',
  //     'JavaInteger',
  //     'JavaShort',
  //     'JavaByte',
  //     'JavaLong',
  //     'JavaDouble',
  //     'JavaFloat',
  //     'JavaList',
  //     'JavaSet',
  //     'JavaHashMap',
  //     'JavaMap',
  //   ];
  //   return types.includes(typeName);
  // }
}
