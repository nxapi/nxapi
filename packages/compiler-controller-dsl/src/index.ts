import Controller from './controller';
import scanner from './scanner';
import { IController } from './dsl';

export declare type IController = IController;
export const compiler = (relativePath: string) => {
  const fullPaths = scanner(relativePath);
  const dsls: IController[] = [];
  fullPaths.forEach(p => {
    const ctl = new Controller(p);
    const dsl = ctl.convertToDsl();
    dsls.push(dsl);
  });
  return dsls;
};
