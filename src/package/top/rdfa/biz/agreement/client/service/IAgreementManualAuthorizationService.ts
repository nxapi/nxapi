import { ManualAuthrizationRequest } from './../dto/request/ManualAuthrizationRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { ManualAuthorizationResponse } from './../dto/reponse/ManualAuthorizationResponse';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAgreementManualAuthorizationService {
  updateManualAuthrization(
    ManualAuthrizationRequest0: ManualAuthrizationRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  queryManualAuthorizationDetail(
    Long0: JavaLong,
  ): TDubboCallResult<ClientBaseResponse<ManualAuthorizationResponse>>;
}

export const IAgreementManualAuthorizationServiceWrapper = {
  updateManualAuthrization: argumentMap,
  queryManualAuthorizationDetail: argumentMap,
};

export function IAgreementManualAuthorizationService(
  dubbo: Dubbo,
): IIAgreementManualAuthorizationService {
  return dubbo.proxyService<IIAgreementManualAuthorizationService>({
    dubboInterface:
      'top.rdfa.biz.agreement.client.service.IAgreementManualAuthorizationService',
    methods: IAgreementManualAuthorizationServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
