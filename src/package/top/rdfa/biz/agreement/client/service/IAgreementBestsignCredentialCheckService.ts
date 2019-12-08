import { PersonalCredential2CheckRequest } from './../dto/request/PersonalCredential2CheckRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { PersonalCredential2CheckResponse } from './../dto/reponse/PersonalCredential2CheckResponse';
import { PersonalCredential3CheckRequest } from './../dto/request/PersonalCredential3CheckRequest';
import { PersonalCredential3CheckResponse } from './../dto/reponse/PersonalCredential3CheckResponse';
import { EnterpriseCredential4CheckRequest } from './../dto/request/EnterpriseCredential4CheckRequest';
import { EnterpriseCredential4CheckResponse } from './../dto/reponse/EnterpriseCredential4CheckResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAgreementBestsignCredentialCheckService {
  checkPersonalCredential2(
    PersonalCredential2CheckRequest0: PersonalCredential2CheckRequest,
  ): TDubboCallResult<ClientBaseResponse<PersonalCredential2CheckResponse>>;
  checkPersonalCredential3(
    PersonalCredential3CheckRequest0: PersonalCredential3CheckRequest,
  ): TDubboCallResult<ClientBaseResponse<PersonalCredential3CheckResponse>>;
  checkEnterpirseCredential4(
    EnterpriseCredential4CheckRequest0: EnterpriseCredential4CheckRequest,
  ): TDubboCallResult<ClientBaseResponse<EnterpriseCredential4CheckResponse>>;
}

export const IAgreementBestsignCredentialCheckServiceWrapper = {
  checkPersonalCredential2: argumentMap,
  checkPersonalCredential3: argumentMap,
  checkEnterpirseCredential4: argumentMap,
};

export function IAgreementBestsignCredentialCheckService(
  dubbo: Dubbo,
): IIAgreementBestsignCredentialCheckService {
  return dubbo.proxyService<IIAgreementBestsignCredentialCheckService>({
    dubboInterface:
      'top.rdfa.biz.agreement.client.service.IAgreementBestsignCredentialCheckService',
    methods: IAgreementBestsignCredentialCheckServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
