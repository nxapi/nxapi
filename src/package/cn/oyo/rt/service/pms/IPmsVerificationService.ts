import { PmsVerificationRequest } from './request/PmsVerificationRequest';
import { ResponseVo } from './../../common/response/ResponseVo';
import { VerificationAmountCountVo } from './response/VerificationAmountCountVo';
import { PaginResponseVo } from './../../common/response/PaginResponseVo';
import { PmsVerificationResponse } from './response/PmsVerificationResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIPmsVerificationService {
  amountCount(
    requestVo: PmsVerificationRequest,
  ): TDubboCallResult<ResponseVo<VerificationAmountCountVo>>;
  findPagingHangingn(
    requestVo: PmsVerificationRequest,
  ): TDubboCallResult<ResponseVo<PaginResponseVo<PmsVerificationResponse>>>;
  export(
    requestVo: PmsVerificationRequest,
  ): TDubboCallResult<ResponseVo<Array<PmsVerificationResponse>>>;
}

export const IPmsVerificationServiceWrapper = {
  amountCount: argumentMap,
  findPagingHangingn: argumentMap,
  export: argumentMap,
};

export function IPmsVerificationService(
  dubbo: Dubbo,
): IIPmsVerificationService {
  return dubbo.proxyService<IIPmsVerificationService>({
    dubboInterface: 'cn.oyo.rt.service.pms.IPmsVerificationService',
    methods: IPmsVerificationServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
