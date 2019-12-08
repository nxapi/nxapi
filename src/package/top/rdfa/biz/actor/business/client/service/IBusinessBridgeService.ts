import { RelationMapConvertRequest } from './../request/RelationMapConvertRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { RelationMapConvertDto } from './../dto/RelationMapConvertDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIBusinessBridgeService {
  relationMapConvert(
    RelationMapConvertRequest0: RelationMapConvertRequest,
  ): TDubboCallResult<ClientBaseResponse<RelationMapConvertDto>>;
}

export const IBusinessBridgeServiceWrapper = {relationMapConvert: argumentMap};

export function IBusinessBridgeService(dubbo: Dubbo): IIBusinessBridgeService {
  return dubbo.proxyService<IIBusinessBridgeService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IBusinessBridgeService',
    methods: IBusinessBridgeServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
