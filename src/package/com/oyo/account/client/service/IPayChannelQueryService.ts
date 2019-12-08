import { BaseResponse } from './../../../common/response/BaseResponse';
import { ChannelDTO } from './../dto/ChannelDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIPayChannelQueryService {
  payChannelList(): TDubboCallResult<BaseResponse<Array<ChannelDTO>>>;
}

export const IPayChannelQueryServiceWrapper = {payChannelList: argumentMap};

export function IPayChannelQueryService(
  dubbo: Dubbo,
): IIPayChannelQueryService {
  return dubbo.proxyService<IIPayChannelQueryService>({
    dubboInterface: 'com.oyo.account.client.service.IPayChannelQueryService',
    methods: IPayChannelQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
