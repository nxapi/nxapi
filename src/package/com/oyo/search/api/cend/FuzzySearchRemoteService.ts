import { BookingSearchHotelRequest } from './request/BookingSearchHotelRequest';
import { Response } from './../../common/bean/Response';
import { OpenSearchHotelCityInfoResponse } from './response/OpenSearchHotelCityInfoResponse';
import { FuzzySearchConsumerRequest } from './request/FuzzySearchConsumerRequest';
import { FuzzySearchRequest } from './request/FuzzySearchRequest';
import { FuzzyHotelsResponse } from './response/FuzzyHotelsResponse';
import { PoiSearchRequest } from './request/PoiSearchRequest';
import { PoiListResponse } from './response/poi/PoiListResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IFuzzySearchRemoteService {
  getHotelCityInfo(
    BookingSearchHotelRequest0: BookingSearchHotelRequest,
  ): TDubboCallResult<Response<OpenSearchHotelCityInfoResponse>>;
  getFuzzySearchForConsumer(
    FuzzySearchConsumerRequest0: FuzzySearchConsumerRequest,
  ): TDubboCallResult<Response<{[name: string]: Object}>>;
  getFuzzySearch(
    FuzzySearchRequest0: FuzzySearchRequest,
  ): TDubboCallResult<Response<Array<FuzzyHotelsResponse>>>;
  searchPoi(
    PoiSearchRequest0: PoiSearchRequest,
  ): TDubboCallResult<Response<PoiListResponse>>;
}

export const FuzzySearchRemoteServiceWrapper = {
  getHotelCityInfo: argumentMap,
  getFuzzySearchForConsumer: argumentMap,
  getFuzzySearch: argumentMap,
  searchPoi: argumentMap,
};

export function FuzzySearchRemoteService(
  dubbo: Dubbo,
): IFuzzySearchRemoteService {
  return dubbo.proxyService<IFuzzySearchRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.FuzzySearchRemoteService',
    methods: FuzzySearchRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
