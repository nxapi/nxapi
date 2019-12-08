import { LegalPersonEditInfoRequest } from './../request/LegalPersonEditInfoRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { LegalPersonRequest } from './../request/LegalPersonRequest';
import { LegalPersonDTO } from './../dto/LegalPersonDTO';
import { BatchLegalPersonInfoRequest } from './../request/BatchLegalPersonInfoRequest';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IILegalPersonService {
  editLegalPerson(
    LegalPersonEditInfoRequest0: LegalPersonEditInfoRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  query(
    LegalPersonRequest0: LegalPersonRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<LegalPersonDTO>>>;
  createLegalPersons(
    BatchLegalPersonInfoRequest0: BatchLegalPersonInfoRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<number>>>;
}

export const ILegalPersonServiceWrapper = {
  editLegalPerson: argumentMap,
  query: argumentMap,
  createLegalPersons: argumentMap,
};

export function ILegalPersonService(dubbo: Dubbo): IILegalPersonService {
  return dubbo.proxyService<IILegalPersonService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.ILegalPersonService',
    methods: ILegalPersonServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
