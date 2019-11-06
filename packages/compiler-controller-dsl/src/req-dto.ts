import j, { ClassMethod, TSTypeAnnotation, TypeAnnotation, TSTypePredicate } from 'jscodeshift';
import { IReqDto, IField } from './dsl';
import { IComponent } from 'xapi-search-code';
import Decorator from './decorator';

export default class ReqDto {
  public static convertToDsl(cm: ClassMethod, heapMap: Map<string, any>) {
    const reqDsl: IReqDto = {};
    const dtoDsl: IReqDto = {};
    cm.params.length > 0 && this.dealReq(cm.params[0], reqDsl, heapMap);
    this.dealDto(cm.returnType, dtoDsl, heapMap);
    return { req: reqDsl, dto: dtoDsl };
  }
  private static dealReq(param: any, reqDsl: IReqDto, heapMap: Map<string, any>) {
    const paramType = this.getNodeType(param);
    //req为自定义对象
    if (!this.isBaseType(paramType)) {
      this.dealObject(param, reqDsl, heapMap);
    }
  }
  private static dealDto(
    returnType: TypeAnnotation | TSTypeAnnotation | TSTypePredicate,
    dtoDsl: IReqDto,
    heapMap: Map<string, any>
  ) {
    const n = { typeAnnotation: returnType };
    const nodeType = this.getNodeType(n);
    //req为自定义对象
    if (!this.isBaseType(nodeType)) {
      this.dealObject(n, dtoDsl, heapMap);
    }
  }

  private static dealObject(param: any, dsl: IReqDto, heapMap: Map<string, any>) {
    dsl.fields = [];
    const paramTypeName = param.typeAnnotation.typeAnnotation.typeName.name;
    const reqComponent: IComponent = heapMap.get(paramTypeName).ownerComponent;
    dsl.fileFullPath = reqComponent.getFullPath();
    dsl.className = paramTypeName;
    const classJcs = reqComponent.getJCS().find(j.ClassDeclaration);
    if (classJcs.length > 1) {
      console.error(dsl.fileFullPath + '文件中不能包含多个类');
      return;
    }
    //对象属性处理
    const classPropertyNodes = classJcs.find(j.ClassProperty).nodes();
    classPropertyNodes.forEach(n => {
      const field: IField = {};
      field.name = n.key['name'];
      field.type = this.getNodeType(n);
      if (!this.isBaseType(field.type)) {
        field.typeDeclare = {};
        this.dealObject(n, field.typeDeclare, reqComponent.getHeapMap());
      }
      const decoratorDsl = Decorator.convertToDsl(n['decorators']);
      if (decoratorDsl) Object.assign(field, decoratorDsl);
      dsl.fields.push(field);
    });
  }

  private static getNodeType(n: any) {
    let nodeType: string = n.typeAnnotation.typeAnnotation.type;
    if (nodeType !== 'TSTypeReference') {
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
    const types = ['number', 'string', 'boolean', 'object', 'array', 'any'];
    return types.includes(typeName);
  }
}
