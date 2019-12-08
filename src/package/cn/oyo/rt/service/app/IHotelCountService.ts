import { ResponseVo } from './../../common/response/ResponseVo';
import { HotelBookingCountResponse } from './response/HotelBookingCountResponse';
import { argumentMap, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIHotelCountService {
  queryBookingCount(
    list: JavaList,
  ): TDubboCallResult<ResponseVo<Array<HotelBookingCountResponse>>>;
}

export const IHotelCountServiceWrapper = {queryBookingCount: argumentMap};

export function IHotelCountService(dubbo: Dubbo): IIHotelCountService {
  return dubbo.proxyService<IIHotelCountService>({
    dubboInterface: 'cn.oyo.rt.service.app.IHotelCountService',
    methods: IHotelCountServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
