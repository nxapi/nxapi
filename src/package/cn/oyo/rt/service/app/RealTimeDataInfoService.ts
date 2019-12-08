import { RealTimeDataInfoReq } from './request/RealTimeDataInfoReq';
import { ResponseVo } from './../../common/response/ResponseVo';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IRealTimeDataInfoService {
  queryRealTimeDataInfo(
    realTimeDataInfoReq: RealTimeDataInfoReq,
  ): TDubboCallResult<ResponseVo>;
}

export const RealTimeDataInfoServiceWrapper = {
  queryRealTimeDataInfo: argumentMap,
};

export function RealTimeDataInfoService(
  dubbo: Dubbo,
): IRealTimeDataInfoService {
  return dubbo.proxyService<IRealTimeDataInfoService>({
    dubboInterface: 'cn.oyo.rt.service.app.RealTimeDataInfoService',
    methods: RealTimeDataInfoServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
