import { HotelMinPriceRequest } from './request/HotelMinPriceRequest';
import { Response } from './../../common/bean/Response';
import { HotelMinPriceBo } from './response/HotelMinPriceBo';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelMinPriceRemoteService {
  bulkObtainHotelMinPrice(
    HotelMinPriceRequest0: HotelMinPriceRequest,
  ): TDubboCallResult<Response<HotelMinPriceBo>>;
}

export const HotelMinPriceRemoteServiceWrapper = {
  bulkObtainHotelMinPrice: argumentMap,
};

export function HotelMinPriceRemoteService(
  dubbo: Dubbo,
): IHotelMinPriceRemoteService {
  return dubbo.proxyService<IHotelMinPriceRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.HotelMinPriceRemoteService',
    methods: HotelMinPriceRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
