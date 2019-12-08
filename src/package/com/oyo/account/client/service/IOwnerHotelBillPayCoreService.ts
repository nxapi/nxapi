import { OwnerPayRequestDTO } from './../dto/OwnerPayRequestDTO';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { OwnerPayVO } from './../vo/OwnerPayVO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOwnerHotelBillPayCoreService {
  getPaySign(
    OwnerPayRequestDTO0: OwnerPayRequestDTO,
  ): TDubboCallResult<BaseResponse<OwnerPayVO>>;
  queryPayStatus(
    OwnerPayRequestDTO0: OwnerPayRequestDTO,
  ): TDubboCallResult<BaseResponse<string>>;
}

export const IOwnerHotelBillPayCoreServiceWrapper = {
  getPaySign: argumentMap,
  queryPayStatus: argumentMap,
};

export function IOwnerHotelBillPayCoreService(
  dubbo: Dubbo,
): IIOwnerHotelBillPayCoreService {
  return dubbo.proxyService<IIOwnerHotelBillPayCoreService>({
    dubboInterface:
      'com.oyo.account.client.service.IOwnerHotelBillPayCoreService',
    methods: IOwnerHotelBillPayCoreServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
