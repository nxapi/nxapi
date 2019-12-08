import { BatchNaturalPersonInfoRequest } from './../request/BatchNaturalPersonInfoRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { NaturalPersonRequest } from './../request/NaturalPersonRequest';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { NaturalPersonDTO } from './../dto/NaturalPersonDTO';
import { NaturalPersonEditInfoRequest } from './../request/NaturalPersonEditInfoRequest';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IINaturalPersonService {
  createNaturalPersons(
    BatchNaturalPersonInfoRequest0: BatchNaturalPersonInfoRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<number>>>;
  query(
    NaturalPersonRequest0: NaturalPersonRequest,
  ): TDubboCallResult<ClientPageResponse<NaturalPersonDTO>>;
  editNaturalPerson(
    NaturalPersonEditInfoRequest0: NaturalPersonEditInfoRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
}

export const INaturalPersonServiceWrapper = {
  createNaturalPersons: argumentMap,
  query: argumentMap,
  editNaturalPerson: argumentMap,
};

export function INaturalPersonService(dubbo: Dubbo): IINaturalPersonService {
  return dubbo.proxyService<IINaturalPersonService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.INaturalPersonService',
    methods: INaturalPersonServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
