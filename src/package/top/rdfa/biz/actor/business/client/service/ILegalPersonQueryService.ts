import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IILegalPersonQueryService {}

export const ILegalPersonQueryServiceWrapper = {};

export function ILegalPersonQueryService(
  dubbo: Dubbo,
): IILegalPersonQueryService {
  return dubbo.proxyService<IILegalPersonQueryService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.ILegalPersonQueryService',
    methods: ILegalPersonQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
