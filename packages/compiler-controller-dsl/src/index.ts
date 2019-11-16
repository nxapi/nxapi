import Controller from './controller';
import scanner from './scanner';
import { IController as AIController, IReqDto as AIReqDto, IField as AIField } from './dsl';

export declare type IController = AIController;
export declare type IReqDto = AIReqDto;
export declare type IField = AIField;
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
