import { AccountBasicQuery } from './../request/AccountBasicQuery';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { AccountDto } from './../dto/AccountDto';
import { AccountBatchQuery } from './../request/AccountBatchQuery';
import { AccountConditionQuery } from './../request/AccountConditionQuery';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAccountQueryService {
  getLeaderByAccountId(
    AccountBasicQuery0: AccountBasicQuery,
  ): TDubboCallResult<ClientPageResponse<AccountDto>>;
  getLowerByAccountId(
    AccountBasicQuery0: AccountBasicQuery,
  ): TDubboCallResult<ClientPageResponse<AccountDto>>;
  getAccountsByBatch(
    AccountBatchQuery0: AccountBatchQuery,
  ): TDubboCallResult<ClientPageResponse<AccountDto>>;
  getAccountsByCondition(
    AccountConditionQuery0: AccountConditionQuery,
  ): TDubboCallResult<ClientPageResponse<AccountDto>>;
  getAccountsByUserCodesBatch(
    AccountBatchQuery0: AccountBatchQuery,
  ): TDubboCallResult<ClientBaseResponse<{[name: number]: Array<AccountDto>}>>;
  getAccountByBasic(
    AccountBasicQuery0: AccountBasicQuery,
  ): TDubboCallResult<ClientPageResponse<AccountDto>>;
}

export const IAccountQueryServiceWrapper = {
  getLeaderByAccountId: argumentMap,
  getLowerByAccountId: argumentMap,
  getAccountsByBatch: argumentMap,
  getAccountsByCondition: argumentMap,
  getAccountsByUserCodesBatch: argumentMap,
  getAccountByBasic: argumentMap,
};

export function IAccountQueryService(dubbo: Dubbo): IIAccountQueryService {
  return dubbo.proxyService<IIAccountQueryService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IAccountQueryService',
    methods: IAccountQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
