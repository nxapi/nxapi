import { ReconSummaryDto } from './../dto/ReconSummaryDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOtaBalanceAccountService {
  insertWechatOrAlipayOtaReconResult(
    ReconSummaryDto0: ReconSummaryDto,
  ): TDubboCallResult<BaseResponse<string>>;
  deleteOtaRecon(
    ReconSummaryDto0: ReconSummaryDto,
  ): TDubboCallResult<BaseResponse<string>>;
}

export const IOtaBalanceAccountServiceWrapper = {
  insertWechatOrAlipayOtaReconResult: argumentMap,
  deleteOtaRecon: argumentMap,
};

export function IOtaBalanceAccountService(
  dubbo: Dubbo,
): IIOtaBalanceAccountService {
  return dubbo.proxyService<IIOtaBalanceAccountService>({
    dubboInterface: 'com.oyo.account.client.service.IOtaBalanceAccountService',
    methods: IOtaBalanceAccountServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
