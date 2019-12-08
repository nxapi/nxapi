import { PriceQueryRequest } from './request/PriceQueryRequest';
import { PaginResponseVo } from './../../common/response/PaginResponseVo';
import { PriceQueryResult } from './response/PriceQueryResult';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPriceQueryService {
  pageQueryPrice(
    priceQueryDto: PriceQueryRequest,
  ): TDubboCallResult<PaginResponseVo<PriceQueryResult>>;
}

export const PriceQueryServiceWrapper = {pageQueryPrice: argumentMap};

export function PriceQueryService(dubbo: Dubbo): IPriceQueryService {
  return dubbo.proxyService<IPriceQueryService>({
    dubboInterface: 'cn.oyo.rt.service.utp.PriceQueryService',
    methods: PriceQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
