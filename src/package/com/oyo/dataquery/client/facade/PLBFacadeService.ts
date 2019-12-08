import { QueryPLBInfoReqDto } from './../request/QueryPLBInfoReqDto';
import { RdfaResult } from './../../../../../top/rdfa/framework/biz/ro/RdfaResult';
import { HotelPlbImpressionDto } from './../dto/HotelPlbImpressionDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPLBFacadeService {
  queryPLBInfo(
    QueryPLBInfoReqDto0: QueryPLBInfoReqDto,
  ): TDubboCallResult<RdfaResult<HotelPlbImpressionDto>>;
}

export const PLBFacadeServiceWrapper = {queryPLBInfo: argumentMap};

export function PLBFacadeService(dubbo: Dubbo): IPLBFacadeService {
  return dubbo.proxyService<IPLBFacadeService>({
    dubboInterface: 'com.oyo.dataquery.client.facade.PLBFacadeService',
    methods: PLBFacadeServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
