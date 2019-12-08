import { MerchantRequest } from './../request/MerchantRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { MerchantDto } from './../dto/MerchantDto';
import { CorporationConditionRequest } from './../request/CorporationConditionRequest';
import { CorporationDto } from './../dto/CorporationDto';
import { OrganizationConditionQuery } from './../request/OrganizationConditionQuery';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { OrganizationDto } from './../dto/OrganizationDto';
import { ProfileConditionQuery } from './../request/infrastructure/ProfileConditionQuery';
import { ProfileDto } from './../dto/infrastructure/ProfileDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIInfrastructureService {
  queryMerchantsByBasic(
    MerchantRequest0: MerchantRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<MerchantDto>>>;
  queryCorporationsByCondition(
    CorporationConditionRequest0: CorporationConditionRequest,
  ): TDubboCallResult<ClientBaseResponse<Array<CorporationDto>>>;
  getOrganizationByCondition(
    OrganizationConditionQuery0: OrganizationConditionQuery,
  ): TDubboCallResult<ClientPageResponse<OrganizationDto>>;
  getProfileByCondition(
    ProfileConditionQuery0: ProfileConditionQuery,
  ): TDubboCallResult<ClientPageResponse<ProfileDto>>;
}

export const IInfrastructureServiceWrapper = {
  queryMerchantsByBasic: argumentMap,
  queryCorporationsByCondition: argumentMap,
  getOrganizationByCondition: argumentMap,
  getProfileByCondition: argumentMap,
};

export function IInfrastructureService(dubbo: Dubbo): IIInfrastructureService {
  return dubbo.proxyService<IIInfrastructureService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IInfrastructureService',
    methods: IInfrastructureServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
