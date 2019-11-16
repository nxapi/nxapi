import path from 'path';
import { IReqDto, IController } from '../../../packages/compiler-controller-dsl/src';
import { httpMethods } from '../../utils';

export interface IRoute {
  path?: string;
  httpMethod?: string;
  className?: string;
  classMethodName?: string;
  req?: IReqDto;
  dto?: IReqDto;
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
        route.req = method.req;
        route.dto = method.dto;
        routes.push(route);
      });
    });
  });
  return routes;
};
