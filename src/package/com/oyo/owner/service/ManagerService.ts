import { BaseResponse } from './../../common/response/BaseResponse';
import { PagedResponse } from './../../common/response/PagedResponse';
import { FavoriteVO } from './../bean/vo/FavoriteVO';
import { QuestionVO } from './../bean/vo/QuestionVO';
import { argumentMap, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IManagerService {
  favoriteList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
  ): TDubboCallResult<BaseResponse<PagedResponse<FavoriteVO>>>;
  questionList(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
  ): TDubboCallResult<BaseResponse<PagedResponse<QuestionVO>>>;
}

export const ManagerServiceWrapper = {
  favoriteList: argumentMap,
  questionList: argumentMap,
};

export function ManagerService(dubbo: Dubbo): IManagerService {
  return dubbo.proxyService<IManagerService>({
    dubboInterface: 'com.oyo.owner.service.ManagerService',
    methods: ManagerServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
