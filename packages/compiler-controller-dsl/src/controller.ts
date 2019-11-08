import { Page, IComponent } from 'xapi-search-code';
import j from 'jscodeshift';
import { IController, IClassMethod } from './dsl';
import Decorator from './decorator';
import ReqDto from './req-dto';

export default class Controller {
  private component: IComponent;
  private path: string;
  constructor(path: string) {
    const page = new Page(path, 'ts');
    this.component = page.getComponents()[0];
    this.path = path;
  }

  public convertToDsl() {
    const jcs = this.component.getJCS();
    const classJcs = jcs.find(j.ClassDeclaration);
    if (classJcs.length > 1) {
      console.error(this.path + '中只能定义一个类');
      return;
    }
    //提取controller相关信息
    const classNode = classJcs.nodes()[0];
    const dsl: IController = {};
    dsl.fileFullPath = this.component.getFullPath();
    dsl.className = classNode.id.name;
    dsl.classMethods = [];
    if (classNode['decorators']) {
      const decoratorDsl = Decorator.convertToDsl(classNode['decorators']);
      dsl.path = decoratorDsl.path || '';
    }
    //提取controller-method相关信息
    const classMethodJcs = classJcs.find(j.ClassMethod);
    const classMethodNodes = classMethodJcs.nodes();
    classMethodNodes.forEach(n => {
      const classMethodDsl: IClassMethod = {};
      classMethodDsl.classMethodName = n.key['name'];
      const decoratorDsl = Decorator.convertToDsl(n.decorators);
      //有get|post|put...的才是一个接口
      // if (!decoratorDsl.get && !decoratorDsl.post && !decoratorDsl.put && !decoratorDsl.delete) return;
      // cmDsl.path = decoratorDsl.path;
      // cmDsl.method = cmDsl.path.method.split('.')[1];
      Object.assign(classMethodDsl, decoratorDsl);
      const reqDtoDsl = ReqDto.convertToDsl(n, this.component.getHeapMap());
      classMethodDsl.req = reqDtoDsl.req;
      classMethodDsl.dto = reqDtoDsl.dto;
      dsl.classMethods.push(classMethodDsl);
    });
    return dsl;
  }
}
