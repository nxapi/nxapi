import { ThirdAccountBasicQuery } from './../request/ThirdAccountBasicQuery';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { ThirdAccountDto } from './../dto/ThirdAccountDto';
import { ThirdAccountBatchUpdateRequest } from './../request/ThirdAccountBatchUpdateRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { ThirdAccountRequest } from './../request/ThirdAccountRequest';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIThirdAccountService {
  getThirdAccountByBasic(
    ThirdAccountBasicQuery0: ThirdAccountBasicQuery,
  ): TDubboCallResult<ClientPageResponse<ThirdAccountDto>>;
  batchUpdateThirdAccount(
    ThirdAccountBatchUpdateRequest0: ThirdAccountBatchUpdateRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  updateThirdAccountByBasic(
    ThirdAccountRequest0: ThirdAccountRequest,
  ): TDubboCallResult<ClientBaseResponse<ThirdAccountDto>>;
}

export const IThirdAccountServiceWrapper = {
  getThirdAccountByBasic: argumentMap,
  batchUpdateThirdAccount: argumentMap,
  updateThirdAccountByBasic: argumentMap,
};

export function IThirdAccountService(dubbo: Dubbo): IIThirdAccountService {
  return dubbo.proxyService<IIThirdAccountService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IThirdAccountService',
    methods: IThirdAccountServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
