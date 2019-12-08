import { HotelWifiRequest } from './request/HotelWifiRequest';
import { Response } from './../../common/bean/Response';
import { HotelWifiResp } from './response/HotelWifiResp';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelWifiRemoteService {
  hotelWifiSearch(
    HotelWifiRequest0: HotelWifiRequest,
  ): TDubboCallResult<Response<HotelWifiResp>>;
}

export const HotelWifiRemoteServiceWrapper = {hotelWifiSearch: argumentMap};

export function HotelWifiRemoteService(dubbo: Dubbo): IHotelWifiRemoteService {
  return dubbo.proxyService<IHotelWifiRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.HotelWifiRemoteService',
    methods: HotelWifiRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
