import { SearchHotelsRequestForConsumer } from './request/SearchHotelsRequestForConsumer';
import { Response } from './../../common/bean/Response';
import { AppHotelListResp } from './response/AppHotelListResp';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelListRemoteService {
  getConsumerHourlyRooms(
    SearchHotelsRequestForConsumer0: SearchHotelsRequestForConsumer,
  ): TDubboCallResult<Response<AppHotelListResp>>;
}

export const HotelListRemoteServiceWrapper = {
  getConsumerHourlyRooms: argumentMap,
};

export function HotelListRemoteService(dubbo: Dubbo): IHotelListRemoteService {
  return dubbo.proxyService<IHotelListRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.HotelListRemoteService',
    methods: HotelListRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
