import { HotelQueryRequest } from './../request/HotelQueryRequest';
import { ClientPageResponse } from './../response/basic/ClientPageResponse';
import { HotelBO } from './../../bean/bo/hotel/HotelBO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelQueryServiceClient {
  getHotelsByCondition(
    HotelQueryRequest0: HotelQueryRequest,
  ): TDubboCallResult<ClientPageResponse<HotelBO>>;
}

export const HotelQueryServiceClientWrapper = {
  getHotelsByCondition: argumentMap,
};

export function HotelQueryServiceClient(
  dubbo: Dubbo,
): IHotelQueryServiceClient {
  return dubbo.proxyService<IHotelQueryServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.HotelQueryServiceClient',
    methods: HotelQueryServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
