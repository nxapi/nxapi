import { OwnerInvoiceBillRequestDto } from './../dto/OwnerInvoiceBillRequestDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { OwnerInvoiceBillResponseDto } from './../dto/OwnerInvoiceBillResponseDto';
import { OwnerInvoiceRequestDTO } from './../dto/OwnerInvoiceRequestDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOwnerHotelBillInvoiceService {
  queryHotelBillInvoice(
    OwnerInvoiceBillRequestDto0: OwnerInvoiceBillRequestDto,
  ): TDubboCallResult<BaseResponse<Array<OwnerInvoiceBillResponseDto>>>;
  hotelBillInvoice(
    OwnerInvoiceRequestDTO0: OwnerInvoiceRequestDTO,
  ): TDubboCallResult<BaseResponse<string>>;
}

export const IOwnerHotelBillInvoiceServiceWrapper = {
  queryHotelBillInvoice: argumentMap,
  hotelBillInvoice: argumentMap,
};

export function IOwnerHotelBillInvoiceService(
  dubbo: Dubbo,
): IIOwnerHotelBillInvoiceService {
  return dubbo.proxyService<IIOwnerHotelBillInvoiceService>({
    dubboInterface:
      'com.oyo.account.client.service.IOwnerHotelBillInvoiceService',
    methods: IOwnerHotelBillInvoiceServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
