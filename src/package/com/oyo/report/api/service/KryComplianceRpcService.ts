import { KryComplianceRpcRequest } from './../request/KryComplianceRpcRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { ComplianceLevelDTO } from './../response/ComplianceLevelDTO';
import { BasePageResponse } from './../response/BasePageResponse';
import { OtaAccountCheckDetailDTO } from './../response/OtaAccountCheckDetailDTO';
import { OtherComplianceDetailDTO } from './../response/OtherComplianceDetailDTO';
import { Customer3CExpDetailDTO } from './../response/Customer3CExpDetailDTO';
import { ComplianceDTO } from './../response/ComplianceDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IKryComplianceRpcService {
  getComplianceLevel(
    KryComplianceRpcRequest0: KryComplianceRpcRequest,
  ): TDubboCallResult<BaseResponse<Array<ComplianceLevelDTO>>>;
  getOtaAccountCheckDetail(
    KryComplianceRpcRequest0: KryComplianceRpcRequest,
  ): TDubboCallResult<BaseResponse<BasePageResponse<OtaAccountCheckDetailDTO>>>;
  getOtherOperateDetail(
    KryComplianceRpcRequest0: KryComplianceRpcRequest,
  ): TDubboCallResult<BaseResponse<BasePageResponse<OtherComplianceDetailDTO>>>;
  getNonComplianceCount(
    KryComplianceRpcRequest0: KryComplianceRpcRequest,
  ): TDubboCallResult<BaseResponse<{[name: number]: number}>>;
  getCustomer3CExpDetail(
    KryComplianceRpcRequest0: KryComplianceRpcRequest,
  ): TDubboCallResult<BaseResponse<BasePageResponse<Customer3CExpDetailDTO>>>;
  getYesterdayAllNoncomplianceRecord(): TDubboCallResult<
    BaseResponse<Array<ComplianceDTO>>
  >;
}

export const KryComplianceRpcServiceWrapper = {
  getComplianceLevel: argumentMap,
  getOtaAccountCheckDetail: argumentMap,
  getOtherOperateDetail: argumentMap,
  getNonComplianceCount: argumentMap,
  getCustomer3CExpDetail: argumentMap,
  getYesterdayAllNoncomplianceRecord: argumentMap,
};

export function KryComplianceRpcService(
  dubbo: Dubbo,
): IKryComplianceRpcService {
  return dubbo.proxyService<IKryComplianceRpcService>({
    dubboInterface: 'com.oyo.report.api.service.KryComplianceRpcService',
    methods: KryComplianceRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
