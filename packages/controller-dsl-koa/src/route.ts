import path from 'path';
import { IController } from '../../../packages/compiler-controller-dsl/src';
import { httpMethods } from '../../utils';
export default interface IRoute {
  path?: string;
  httpMethod?: string;
  className?: string;
  classMethodName?: string;
}

export const extractRoutes = (controllerDsls: IController[]) => {
  const routes: IRoute[] = [];
  controllerDsls.forEach(ctrl => {
    ctrl.classMethods.forEach(method => {
      httpMethods.forEach(hm => {
        if (!method[hm]) return;
        const route: IRoute = {};
        route.path = path.join('/', ctrl.path, method[hm]);
        route.httpMethod = hm;
        route.className = ctrl.className;
        route.classMethodName = method.classMethodName;
        routes.push(route);
      });
    });
  });
  return routes;
};