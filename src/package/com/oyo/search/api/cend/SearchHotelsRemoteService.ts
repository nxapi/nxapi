import { HotelDistanceRequest } from './request/HotelDistanceRequest';
import { Response } from './../../common/bean/Response';
import { HotelDistanceResponse } from './response/HotelDistanceResponse';
import { SearchHotelsRequestForConsumer } from './request/SearchHotelsRequestForConsumer';
import { AppHotelListResp } from './response/AppHotelListResp';
import { HotelSearchRequest } from './request/HotelSearchRequest';
import { CrsHotelListResp } from './response/CrsHotelListResp';
import { SearchHotelsRequestForBusiness } from './request/SearchHotelsRequestForBusiness';
import { HotelsSearchRequest } from './request/HotelsSearchRequest';
import { HotelListResponse } from './response/HotelListResponse';
import { RetrievePoiOptionRequest } from './request/RetrievePoiOptionRequest';
import { PoiCategory } from './bean/poi/PoiCategory';
import { HotelFilterResp } from './response/HotelFilterResp';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ISearchHotelsRemoteService {
  getHotelLocationDistance(
    HotelDistanceRequest0: HotelDistanceRequest,
  ): TDubboCallResult<Response<HotelDistanceResponse>>;
  getConsumerHotels(
    SearchHotelsRequestForConsumer0: SearchHotelsRequestForConsumer,
  ): TDubboCallResult<Response<AppHotelListResp>>;
  hotelSearch(
    HotelSearchRequest0: HotelSearchRequest,
  ): TDubboCallResult<Response<CrsHotelListResp>>;
  getBusinessHotels(
    SearchHotelsRequestForBusiness0: SearchHotelsRequestForBusiness,
  ): TDubboCallResult<Response<AppHotelListResp>>;
  hotelInfoSearch(
    HotelsSearchRequest0: HotelsSearchRequest,
  ): TDubboCallResult<Response<HotelListResponse>>;
  retrievePoiOptions(
    RetrievePoiOptionRequest0: RetrievePoiOptionRequest,
  ): TDubboCallResult<Response<Array<PoiCategory>>>;
  filterOptions(
    RetrievePoiOptionRequest0: RetrievePoiOptionRequest,
  ): TDubboCallResult<Response<HotelFilterResp>>;
}

export const SearchHotelsRemoteServiceWrapper = {
  getHotelLocationDistance: argumentMap,
  getConsumerHotels: argumentMap,
  hotelSearch: argumentMap,
  getBusinessHotels: argumentMap,
  hotelInfoSearch: argumentMap,
  retrievePoiOptions: argumentMap,
  filterOptions: argumentMap,
};

export function SearchHotelsRemoteService(
  dubbo: Dubbo,
): ISearchHotelsRemoteService {
  return dubbo.proxyService<ISearchHotelsRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.SearchHotelsRemoteService',
    methods: SearchHotelsRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
