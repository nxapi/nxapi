import { AgreementSyncQueryDto } from './../dto/request/AgreementSyncQueryDto';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { AgreementDetailDto } from './../dto/reponse/AgreementDetailDto';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAgreement2SacService {
  getAgreementDetailList(
    AgreementSyncQueryDto0: AgreementSyncQueryDto,
  ): TDubboCallResult<ClientPageResponse<Array<AgreementDetailDto>>>;
  queryAgreementPrepaid(
    AgreementSyncQueryDto0: AgreementSyncQueryDto,
  ): TDubboCallResult<ClientBaseResponse<Array<AgreementDetailDto>>>;
}

export const IAgreement2SacServiceWrapper = {
  getAgreementDetailList: argumentMap,
  queryAgreementPrepaid: argumentMap,
};

export function IAgreement2SacService(dubbo: Dubbo): IIAgreement2SacService {
  return dubbo.proxyService<IIAgreement2SacService>({
    dubboInterface:
      'top.rdfa.biz.agreement.client.service.IAgreement2SacService',
    methods: IAgreement2SacServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
