import { BaseResponse } from './../../common/response/BaseResponse';
import { PerformanceLinkedBonusVo } from './../bean/vo/PerformanceLinkedBonusVo';
import { PlbOrderRequest } from './../bean/request/PlbOrderRequest';
import { argumentMap, JavaLong, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPerformanceLinkedBonusApi {
  cancel(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<boolean>>;
  hasOrder(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<PerformanceLinkedBonusVo>>;
  order(
    PlbOrderRequest0: PlbOrderRequest,
  ): TDubboCallResult<BaseResponse<boolean>>;
}

export const PerformanceLinkedBonusApiWrapper = {
  cancel: argumentMap,
  hasOrder: argumentMap,
  order: argumentMap,
};

export function PerformanceLinkedBonusApi(
  dubbo: Dubbo,
): IPerformanceLinkedBonusApi {
  return dubbo.proxyService<IPerformanceLinkedBonusApi>({
    dubboInterface: 'com.oyo.owner.service.PerformanceLinkedBonusApi',
    methods: PerformanceLinkedBonusApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
