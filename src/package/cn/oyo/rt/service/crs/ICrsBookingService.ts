import { CrsBookingRequestVo } from './request/CrsBookingRequestVo';
import { PaginResponseVo } from './../../common/response/PaginResponseVo';
import { CrsBookingDto } from './response/CrsBookingDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IICrsBookingService {
  findPaginBooking(
    requestVo: CrsBookingRequestVo,
  ): TDubboCallResult<PaginResponseVo<CrsBookingDto>>;
}

export const ICrsBookingServiceWrapper = {findPaginBooking: argumentMap};

export function ICrsBookingService(dubbo: Dubbo): IICrsBookingService {
  return dubbo.proxyService<IICrsBookingService>({
    dubboInterface: 'cn.oyo.rt.service.crs.ICrsBookingService',
    methods: ICrsBookingServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
