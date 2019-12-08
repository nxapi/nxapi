import { OtaBookingQueryRequest } from './request/OtaBookingQueryRequest';
import { OtaVo } from './response/OtaVo';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOtaBookingService {
  getOtaVo(
    otaBookingQueryRequest: OtaBookingQueryRequest,
  ): TDubboCallResult<Array<OtaVo>>;
}

export const IOtaBookingServiceWrapper = {getOtaVo: argumentMap};

export function IOtaBookingService(dubbo: Dubbo): IIOtaBookingService {
  return dubbo.proxyService<IIOtaBookingService>({
    dubboInterface: 'cn.oyo.rt.service.crs.IOtaBookingService',
    methods: IOtaBookingServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
