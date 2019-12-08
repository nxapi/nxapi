import { SearchHotelCityRequest } from './request/SearchHotelCityRequest';
import { Response } from './../../common/bean/Response';
import { HotelCityDto } from './bean/HotelCityDto';
import { HotCitysRequest } from './request/HotCitysRequest';
import { HotCitiesResp } from './response/city/HotCitiesResp';
import { HotDestinationsRequest } from './request/HotDestinationsRequest';
import { HotPoi } from './bean/HotPoi';
import { CityResponse } from './response/city/CityResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ICityRemoteService {
  getHotelCityList(
    SearchHotelCityRequest0: SearchHotelCityRequest,
  ): TDubboCallResult<Response<Array<HotelCityDto>>>;
  getHotCities(
    HotCitysRequest0: HotCitysRequest,
  ): TDubboCallResult<Response<HotCitiesResp>>;
  getHotDestinations(
    HotDestinationsRequest0: HotDestinationsRequest,
  ): TDubboCallResult<Response<Array<HotPoi>>>;
  getCities(
    SearchHotelCityRequest0: SearchHotelCityRequest,
  ): TDubboCallResult<Response<Array<CityResponse>>>;
}

export const CityRemoteServiceWrapper = {
  getHotelCityList: argumentMap,
  getHotCities: argumentMap,
  getHotDestinations: argumentMap,
  getCities: argumentMap,
};

export function CityRemoteService(dubbo: Dubbo): ICityRemoteService {
  return dubbo.proxyService<ICityRemoteService>({
    dubboInterface: 'com.oyo.search.api.cend.CityRemoteService',
    methods: CityRemoteServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
