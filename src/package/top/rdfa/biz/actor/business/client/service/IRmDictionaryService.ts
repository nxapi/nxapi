import { DictionaryRequest } from './../request/DictionaryRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { RmDictionaryDTO } from './../dto/RmDictionaryDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIRmDictionaryService {
  select(
    DictionaryRequest0: DictionaryRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<RmDictionaryDTO>>>;
}

export const IRmDictionaryServiceWrapper = {select: argumentMap};

export function IRmDictionaryService(dubbo: Dubbo): IIRmDictionaryService {
  return dubbo.proxyService<IIRmDictionaryService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IRmDictionaryService',
    methods: IRmDictionaryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
