import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { AgreementBasicDto } from './../dto/reponse/AgreementBasicDto';
import { AgreementAuditListRequestDto } from './../dto/request/AgreementAuditListRequestDto';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { AgreementAuditDTO } from './../dto/reponse/AgreementAuditDTO';
import { HotelAgreementQueryDto } from './../dto/request/HotelAgreementQueryDto';
import { HotelAgreementDto } from './../dto/reponse/HotelAgreementDto';
import { HotelContactInfo } from './../dto/reponse/HotelContactInfo';
import { ClienLastingQueryRequest } from './../request/ClienLastingQueryRequest';
import { ClientBaseQueryRequest } from './../request/ClientBaseQueryRequest';
import { AgreementInfoDto } from './../dto/reponse/AgreementInfoDto';
import { ClientDimensionQueryRequest } from './../request/ClientDimensionQueryRequest';
import { SourceTypeInfoDto } from './../dto/reponse/SourceTypeInfoDto';
import { argumentMap, JavaString, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAgreementQueryService {
  queryOperationInfoByLeadsId(
    String0: JavaString,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse<{[name: string]: AgreementBasicDto}>>;
  queryAgreementAuditList(
    AgreementAuditListRequestDto0: AgreementAuditListRequestDto,
  ): TDubboCallResult<ClientPageResponse<Array<AgreementAuditDTO>>>;
  queryLatestAgreementInfo(
    HotelAgreementQueryDto0: HotelAgreementQueryDto,
  ): TDubboCallResult<ClientBaseResponse<HotelAgreementDto>>;
  queryByAgreementId(
    Long0: JavaLong,
  ): TDubboCallResult<ClientBaseResponse<string>>;
  queryContactViaLeadsId(
    String0: JavaString,
  ): TDubboCallResult<ClientBaseResponse<HotelContactInfo>>;
  queryLastingAgreement(
    ClienLastingQueryRequest0: ClienLastingQueryRequest,
  ): TDubboCallResult<ClientBaseResponse<Object>>;
  queryAgreementInfo(
    ClientBaseQueryRequest0: ClientBaseQueryRequest,
  ): TDubboCallResult<ClientBaseResponse<AgreementInfoDto>>;
  queryByInstanceId(
    String0: JavaString,
  ): TDubboCallResult<ClientBaseResponse<number>>;
  cancelAuditing(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  queryByDimension(
    ClientDimensionQueryRequest0: ClientDimensionQueryRequest,
  ): TDubboCallResult<ClientPageResponse<Object>>;
  pageQuery(
    ClientBaseQueryRequest0: ClientBaseQueryRequest,
  ): TDubboCallResult<ClientPageResponse<Object>>;
  queryInvalidAgreementByTime(
    String0: JavaString,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse<Array<AgreementInfoDto>>>;
  querySourceTypeInfo(
    String0: JavaString,
  ): TDubboCallResult<ClientBaseResponse<SourceTypeInfoDto>>;
  queryOperationInfoByLeadsIdForApp(
    String0: JavaString,
    String1: JavaString,
  ): TDubboCallResult<ClientBaseResponse<{[name: string]: AgreementBasicDto}>>;
  queryById(Long0: JavaLong): TDubboCallResult<ClientBaseResponse<Object>>;
}

export const IAgreementQueryServiceWrapper = {
  queryOperationInfoByLeadsId: argumentMap,
  queryAgreementAuditList: argumentMap,
  queryLatestAgreementInfo: argumentMap,
  queryByAgreementId: argumentMap,
  queryContactViaLeadsId: argumentMap,
  queryLastingAgreement: argumentMap,
  queryAgreementInfo: argumentMap,
  queryByInstanceId: argumentMap,
  cancelAuditing: argumentMap,
  queryByDimension: argumentMap,
  pageQuery: argumentMap,
  queryInvalidAgreementByTime: argumentMap,
  querySourceTypeInfo: argumentMap,
  queryOperationInfoByLeadsIdForApp: argumentMap,
  queryById: argumentMap,
};

export function IAgreementQueryService(dubbo: Dubbo): IIAgreementQueryService {
  return dubbo.proxyService<IIAgreementQueryService>({
    dubboInterface:
      'top.rdfa.biz.agreement.client.service.IAgreementQueryService',
    methods: IAgreementQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
