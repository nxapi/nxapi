import { BaseResponse } from './../../../common/response/BaseResponse';
import { Customer3CExpDTO } from './../response/Customer3CExpDTO';
import { OtherOperateDTO } from './../response/OtherOperateDTO';
import { OtaAccountCheckDTO } from './../response/OtaAccountCheckDTO';
import { HotelOperateStatusDTO } from './../response/HotelOperateStatusDTO';
import { argumentMap, JavaLong, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IWarningRpcService {
  ccc(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<Customer3CExpDTO>>;
  other(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<OtherOperateDTO>>;
  otaAccountCheck(
    Long0: JavaLong,
    String1: JavaString,
  ): TDubboCallResult<BaseResponse<OtaAccountCheckDTO>>;
  compositeOperateLevel(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelOperateStatusDTO>>;
}

export const WarningRpcServiceWrapper = {
  ccc: argumentMap,
  other: argumentMap,
  otaAccountCheck: argumentMap,
  compositeOperateLevel: argumentMap,
};

export function WarningRpcService(dubbo: Dubbo): IWarningRpcService {
  return dubbo.proxyService<IWarningRpcService>({
    dubboInterface: 'com.oyo.report.api.service.WarningRpcService',
    methods: WarningRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
