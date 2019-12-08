import { SimpleDslSearchRequest } from './request/SimpleDslSearchRequest';
import { Response } from './../../common/bean/Response';
import { Pagination } from './../bean/Pagination';
import { CityBaseInfoBo } from './../../common/bo/CityBaseInfoBo';
import { HotelBaseInfoBo } from './../../common/bo/HotelBaseInfoBo';
import { PoiBaseInfoBo } from './../../common/bo/PoiBaseInfoBo';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ISimpleDslSearchService {
  dslQueryCity(
    SimpleDslSearchRequest0: SimpleDslSearchRequest,
  ): TDubboCallResult<Response<Pagination<CityBaseInfoBo>>>;
  dslQueryHotel(
    SimpleDslSearchRequest0: SimpleDslSearchRequest,
  ): TDubboCallResult<Response<Pagination<HotelBaseInfoBo>>>;
  dslQueryPoi(
    SimpleDslSearchRequest0: SimpleDslSearchRequest,
  ): TDubboCallResult<Response<Pagination<PoiBaseInfoBo>>>;
}

export const SimpleDslSearchServiceWrapper = {
  dslQueryCity: argumentMap,
  dslQueryHotel: argumentMap,
  dslQueryPoi: argumentMap,
};

export function SimpleDslSearchService(dubbo: Dubbo): ISimpleDslSearchService {
  return dubbo.proxyService<ISimpleDslSearchService>({
    dubboInterface: 'com.oyo.search.api.generic.SimpleDslSearchService',
    methods: SimpleDslSearchServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
