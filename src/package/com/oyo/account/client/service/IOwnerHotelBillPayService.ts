import { OwnerPayRequestDTO } from './../dto/OwnerPayRequestDTO';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { OwnerPayVO } from './../vo/OwnerPayVO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOwnerHotelBillPayService {
  getSign(
    OwnerPayRequestDTO0: OwnerPayRequestDTO,
  ): TDubboCallResult<BaseResponse<OwnerPayVO>>;
  queryPayStatus(
    OwnerPayRequestDTO0: OwnerPayRequestDTO,
  ): TDubboCallResult<BaseResponse<string>>;
  getSign1(
    OwnerPayRequestDTO0: OwnerPayRequestDTO,
  ): TDubboCallResult<BaseResponse<OwnerPayVO>>;
}

export const IOwnerHotelBillPayServiceWrapper = {
  getSign: argumentMap,
  queryPayStatus: argumentMap,
  getSign1: argumentMap,
};

export function IOwnerHotelBillPayService(
  dubbo: Dubbo,
): IIOwnerHotelBillPayService {
  return dubbo.proxyService<IIOwnerHotelBillPayService>({
    dubboInterface: 'com.oyo.account.client.service.IOwnerHotelBillPayService',
    methods: IOwnerHotelBillPayServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
