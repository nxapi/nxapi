import { PageQueryOwnerIdeInstallIntentionRequest } from './../request/PageQueryOwnerIdeInstallIntentionRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { PageInfoDTO } from './../dto/PageInfoDTO';
import { OwnerIdeInstallIntentionDto } from './../dto/OwnerIdeInstallIntentionDto';
import { PageQueryIdeInstallStatusRequest } from './../request/PageQueryIdeInstallStatusRequest';
import { IdeInstallStatusDto } from './../dto/IdeInstallStatusDto';
import { PageQueryHotelOtaAccountRequest } from './../request/PageQueryHotelOtaAccountRequest';
import { HotelOtaAccountComplianceDetailDto } from './../dto/HotelOtaAccountComplianceDetailDto';
import { PageQueryHotelIncomeLossRequest } from './../request/PageQueryHotelIncomeLossRequest';
import { HotelIncomeLossComplianceDetailDto } from './../dto/HotelIncomeLossComplianceDetailDto';
import { PageQueryHotelCidRequest } from './../request/PageQueryHotelCidRequest';
import { HotelCidComplianceDetailDto } from './../dto/HotelCidComplianceDetailDto';
import { ComplianceIndexDto } from './../dto/ComplianceIndexDto';
import { PageQueryHotelComplianceRequest } from './../request/PageQueryHotelComplianceRequest';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IComplianceFacade {
  queryOwnerIdeInstallIntention(
    PageQueryOwnerIdeInstallIntentionRequest0: PageQueryOwnerIdeInstallIntentionRequest,
  ): TDubboCallResult<BaseResponse<PageInfoDTO<OwnerIdeInstallIntentionDto>>>;
  queryIdeInstallStatus(
    PageQueryIdeInstallStatusRequest0: PageQueryIdeInstallStatusRequest,
  ): TDubboCallResult<BaseResponse<PageInfoDTO<IdeInstallStatusDto>>>;
  queryHotelOtaAccountCompliance(
    PageQueryHotelOtaAccountRequest0: PageQueryHotelOtaAccountRequest,
  ): TDubboCallResult<
    BaseResponse<PageInfoDTO<HotelOtaAccountComplianceDetailDto>>
  >;
  queryHotelIncomeLossCompliance(
    PageQueryHotelIncomeLossRequest0: PageQueryHotelIncomeLossRequest,
  ): TDubboCallResult<
    BaseResponse<PageInfoDTO<HotelIncomeLossComplianceDetailDto>>
  >;
  queryHotelCidCompliance(
    PageQueryHotelCidRequest0: PageQueryHotelCidRequest,
  ): TDubboCallResult<BaseResponse<PageInfoDTO<HotelCidComplianceDetailDto>>>;
  queryHotelOpData(
    Long0: JavaLong,
    Date1: Date,
  ): TDubboCallResult<BaseResponse<ComplianceIndexDto>>;
  batchQueryHotelOpData(
    PageQueryHotelComplianceRequest0: PageQueryHotelComplianceRequest,
  ): TDubboCallResult<BaseResponse<PageInfoDTO<ComplianceIndexDto>>>;
}

export const ComplianceFacadeWrapper = {
  queryOwnerIdeInstallIntention: argumentMap,
  queryIdeInstallStatus: argumentMap,
  queryHotelOtaAccountCompliance: argumentMap,
  queryHotelIncomeLossCompliance: argumentMap,
  queryHotelCidCompliance: argumentMap,
  queryHotelOpData: argumentMap,
  batchQueryHotelOpData: argumentMap,
};

export function ComplianceFacade(dubbo: Dubbo): IComplianceFacade {
  return dubbo.proxyService<IComplianceFacade>({
    dubboInterface: 'com.oyo.uip.client.facade.ComplianceFacade',
    methods: ComplianceFacadeWrapper,
  });
}

//generate by interpret-cli dubbo2.js
