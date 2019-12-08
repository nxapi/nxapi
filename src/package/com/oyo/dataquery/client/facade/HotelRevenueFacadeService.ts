import { QueryTrendDataByHotelIdReqDto } from './../request/QueryTrendDataByHotelIdReqDto';
import { RdfaResult } from './../../../../../top/rdfa/framework/biz/ro/RdfaResult';
import { QueryWithHotelIdListReqDto } from './../request/QueryWithHotelIdListReqDto';
import { QueryOperationResponseDto } from './../dto/QueryOperationResponseDto';
import { QueryStatisticsReqDto } from './../request/QueryStatisticsReqDto';
import { HotelStatisticsDto } from './../dto/HotelStatisticsDto';
import { QueryOperationData4OwnerReqDto } from './../request/QueryOperationData4OwnerReqDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelRevenueFacadeService {
  queryTrendDataByHotelId(
    QueryTrendDataByHotelIdReqDto0: QueryTrendDataByHotelIdReqDto,
  ): TDubboCallResult<RdfaResult<any>>;
  queryOperationData(
    QueryWithHotelIdListReqDto0: QueryWithHotelIdListReqDto,
  ): TDubboCallResult<RdfaResult<QueryOperationResponseDto>>;
  queryStatisticsById(
    QueryStatisticsReqDto0: QueryStatisticsReqDto,
  ): TDubboCallResult<RdfaResult<HotelStatisticsDto>>;
  queryOperationData4OwnerV2(
    QueryWithHotelIdListReqDto0: QueryWithHotelIdListReqDto,
  ): TDubboCallResult<RdfaResult<any>>;
  queryOperationData4Owner(
    QueryOperationData4OwnerReqDto0: QueryOperationData4OwnerReqDto,
  ): TDubboCallResult<RdfaResult<any>>;
}

export const HotelRevenueFacadeServiceWrapper = {
  queryTrendDataByHotelId: argumentMap,
  queryOperationData: argumentMap,
  queryStatisticsById: argumentMap,
  queryOperationData4OwnerV2: argumentMap,
  queryOperationData4Owner: argumentMap,
};

export function HotelRevenueFacadeService(
  dubbo: Dubbo,
): IHotelRevenueFacadeService {
  return dubbo.proxyService<IHotelRevenueFacadeService>({
    dubboInterface: 'com.oyo.dataquery.client.facade.HotelRevenueFacadeService',
    methods: HotelRevenueFacadeServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
