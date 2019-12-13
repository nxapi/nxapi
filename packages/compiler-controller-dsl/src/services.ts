import { Page, IComponent } from '@nxapi/nxapi-search-code';
import j from 'jscodeshift';
import { IService, IClassMethod } from './dsl';
import ReqDto from './req-dto';
import { Collection } from 'jscodeshift/src/Collection';

export default class Services {
  private component: IComponent;
  private path: string;
  constructor(path: string) {
    const page = new Page(path, 'ts');
    this.component = page.getComponents()[0];
    this.path = path;
  }

  private getDubboInterface(jcs: Collection<any>) {
    const dubboInterface = jcs
      .find(j.ReturnStatement)
      .find(j.ObjectProperty)
      .filter(p => p.node.key['name'] === 'dubboInterface')
      .nodes()[0].value['value'];
    return dubboInterface;
  }

  private removeTDubboCallResult(n: any) {
    const returnType = n.typeAnnotation.typeAnnotation;
    const upType = returnType.typeParameters.params[0];
    //将未知的类型当成any处理
    if (!upType.typeName) {
      returnType.type = 'any';
    } else {
      returnType.type = upType.type;
      returnType.typeName = upType.typeName;
      returnType.typeParameters = upType.typeParameters;
    }
  }

  private convertMethods(jcs: Collection<any>, component: IComponent) {
    const methodNodes = jcs
      .find(j.TSInterfaceBody)
      .find(j.TSMethodSignature)
      .nodes();
    const clsasMethods: IClassMethod[] = [];
    methodNodes.forEach(n => {
      this.removeTDubboCallResult(n);
      const classMethodDsl: IClassMethod = {};
      classMethodDsl.classMethodName = n.key['name'];
      const reqDtoDsl = ReqDto.convertToDsl(n, component.getHeapMap());
      classMethodDsl.req = reqDtoDsl.req;
      classMethodDsl.dto = reqDtoDsl.dto;
      clsasMethods.push(classMethodDsl);
    });
    return clsasMethods;
  }

  public convertToDsl() {
    const heapMap = this.component.getHeapMap();
    const dsls: IService[] = [];
    for (const [key, value] of heapMap) {
      const dsl: IService = {};
      const component: IComponent = value.ownerComponent;
      const jcs = component.getJCS();
      dsl.path = component.getSrcPath();
      dsl.fileFullPath = component.getFullPath();
      dsl.dubboInterface = this.getDubboInterface(jcs);
      dsl.serviceAliasName = key;
      dsl.classMethods = this.convertMethods(jcs, component);
      dsls.push(dsl);
    }
    return dsls;
  }
}
