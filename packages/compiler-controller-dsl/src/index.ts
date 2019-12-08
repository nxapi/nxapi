import { astClearCache } from '@nxapi/nxapi-search-code';
import Services from './services';
import { IService as AIController, IReqDto as AIReqDto, IField as AIField } from './dsl';
import { SystemType } from './system-type';

export declare type IController = AIController;
export declare type IReqDto = AIReqDto;
export declare type IField = AIField;
export const compiler = (relativePath: string) => {
  SystemType.init();
  astClearCache();
  const ctl = new Services(relativePath);
  const dsl = ctl.convertToDsl();

  return dsl;
};
