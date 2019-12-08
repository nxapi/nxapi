import { BatchSubmitAccountInfoRequest } from './../request/BatchSubmitAccountInfoRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { BatchAccountInfoRequest } from './../request/BatchAccountInfoRequest';
import { AccountInfoRequest } from './../request/AccountInfoRequest';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { AccountInfoDTO } from './../dto/AccountInfoDTO';
import { BatchUpdateAccountRequest } from './../request/BatchUpdateAccountRequest';
import { BatchDeleteAccountRequest } from './../request/BatchDeleteAccountRequest';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAccountInfoService {
  saveSubmittedInfo(
    BatchSubmitAccountInfoRequest0: BatchSubmitAccountInfoRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<number>>>;
  editAccount(
    BatchAccountInfoRequest0: BatchAccountInfoRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  query(
    AccountInfoRequest0: AccountInfoRequest,
  ): TDubboCallResult<ClientPageResponse<AccountInfoDTO>>;
  batchUpdateAuditStatus(
    BatchUpdateAccountRequest0: BatchUpdateAccountRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  createAccount(
    BatchAccountInfoRequest0: BatchAccountInfoRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<number>>>;
  delete(
    BatchDeleteAccountRequest0: BatchDeleteAccountRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
}

export const IAccountInfoServiceWrapper = {
  saveSubmittedInfo: argumentMap,
  editAccount: argumentMap,
  query: argumentMap,
  batchUpdateAuditStatus: argumentMap,
  createAccount: argumentMap,
  delete: argumentMap,
};

export function IAccountInfoService(dubbo: Dubbo): IIAccountInfoService {
  return dubbo.proxyService<IIAccountInfoService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IAccountInfoService',
    methods: IAccountInfoServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
