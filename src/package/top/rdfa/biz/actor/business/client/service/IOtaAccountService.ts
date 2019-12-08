import { OtaAccountQueryRequest } from './../request/ota/OtaAccountQueryRequest';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { OtaAccountDto } from './../dto/OtaAccountDto';
import { OtaAccountBatchRequest } from './../request/ota/OtaAccountBatchRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { OtaAccountBatchQueryRequest } from './../request/ota/OtaAccountBatchQueryRequest';
import { OtaAccountRequest } from './../request/ota/OtaAccountRequest';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOtaAccountService {
  get(
    OtaAccountQueryRequest0: OtaAccountQueryRequest,
  ): TDubboCallResult<ClientPageResponse<OtaAccountDto>>;
  batchUpdate(
    OtaAccountBatchRequest0: OtaAccountBatchRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<OtaAccountDto>>>;
  batchGet(
    OtaAccountBatchQueryRequest0: OtaAccountBatchQueryRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<OtaAccountDto>>>;
  update(
    OtaAccountRequest0: OtaAccountRequest,
  ): TDubboCallResult<ClientBaseResponse<OtaAccountDto>>;
  create(
    OtaAccountRequest0: OtaAccountRequest,
  ): TDubboCallResult<ClientBaseResponse<OtaAccountDto>>;
  batchCreate(
    OtaAccountBatchRequest0: OtaAccountBatchRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<OtaAccountDto>>>;
}

export const IOtaAccountServiceWrapper = {
  get: argumentMap,
  batchUpdate: argumentMap,
  batchGet: argumentMap,
  update: argumentMap,
  create: argumentMap,
  batchCreate: argumentMap,
};

export function IOtaAccountService(dubbo: Dubbo): IIOtaAccountService {
  return dubbo.proxyService<IIOtaAccountService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IOtaAccountService',
    methods: IOtaAccountServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
