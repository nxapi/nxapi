import { SimpleHotelSearchRequest } from './request/SimpleHotelSearchRequest';
import { Response } from './../../common/bean/Response';
import { Pagination } from './../bean/Pagination';
import { HotelBaseInfoBo } from './../../common/bo/HotelBaseInfoBo';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ISimpleHotelSearchService {
  dslQuery(
    SimpleHotelSearchRequest0: SimpleHotelSearchRequest,
  ): TDubboCallResult<Response<Pagination<HotelBaseInfoBo>>>;
}

export const SimpleHotelSearchServiceWrapper = {dslQuery: argumentMap};

export function SimpleHotelSearchService(
  dubbo: Dubbo,
): ISimpleHotelSearchService {
  return dubbo.proxyService<ISimpleHotelSearchService>({
    dubboInterface: 'com.oyo.search.api.generic.SimpleHotelSearchService',
    methods: SimpleHotelSearchServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
