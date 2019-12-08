import { LegalPersonSaveOrUpdateRequest } from './../request/LegalPersonSaveOrUpdateRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IILegalPersonLifeCycleService {
  saveOrUpdateLegalPersons(
    LegalPersonSaveOrUpdateRequest0: LegalPersonSaveOrUpdateRequest,
  ): TDubboCallResult<ClientBaseResponse<number>>;
}

export const ILegalPersonLifeCycleServiceWrapper = {
  saveOrUpdateLegalPersons: argumentMap,
};

export function ILegalPersonLifeCycleService(
  dubbo: Dubbo,
): IILegalPersonLifeCycleService {
  return dubbo.proxyService<IILegalPersonLifeCycleService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.ILegalPersonLifeCycleService',
    methods: ILegalPersonLifeCycleServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
