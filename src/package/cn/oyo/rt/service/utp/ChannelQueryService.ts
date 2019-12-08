import { ChannelQueryRequest } from './request/ChannelQueryRequest';
import { PaginResponseVo } from './../../common/response/PaginResponseVo';
import { ChannelQueryResult } from './response/ChannelQueryResult';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IChannelQueryService {
  pageQueryChannel(
    channelQueryRequest: ChannelQueryRequest,
  ): TDubboCallResult<PaginResponseVo<ChannelQueryResult>>;
}

export const ChannelQueryServiceWrapper = {pageQueryChannel: argumentMap};

export function ChannelQueryService(dubbo: Dubbo): IChannelQueryService {
  return dubbo.proxyService<IChannelQueryService>({
    dubboInterface: 'cn.oyo.rt.service.utp.ChannelQueryService',
    methods: ChannelQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
