import { AccountHotelBasicQuery } from './../request/AccountHotelBasicQuery';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { AccountDataPermissionDto } from './../dto/AccountDataPermissionDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIDelayQueryService {
  getAccountHotelByCondition(
    AccountHotelBasicQuery0: AccountHotelBasicQuery,
  ): TDubboCallResult<ClientPageResponse<AccountDataPermissionDto>>;
}

export const IDelayQueryServiceWrapper = {
  getAccountHotelByCondition: argumentMap,
};

export function IDelayQueryService(dubbo: Dubbo): IIDelayQueryService {
  return dubbo.proxyService<IIDelayQueryService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IDelayQueryService',
    methods: IDelayQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
