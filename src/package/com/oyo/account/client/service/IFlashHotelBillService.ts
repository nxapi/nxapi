import { FlashHotelBillDto } from './../dto/FlashHotelBillDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HotelMonthlyBillDto } from './../dto/HotelMonthlyBillDto';
import { HotelBillFlashResponseDto } from './../dto/HotelBillFlashResponseDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIFlashHotelBillService {
  queryWeekHotelBillList(
    FlashHotelBillDto0: FlashHotelBillDto,
  ): TDubboCallResult<BaseResponse<HotelMonthlyBillDto>>;
  queryMonthHotelBillList(
    FlashHotelBillDto0: FlashHotelBillDto,
  ): TDubboCallResult<BaseResponse<Array<HotelBillFlashResponseDto>>>;
}

export const IFlashHotelBillServiceWrapper = {
  queryWeekHotelBillList: argumentMap,
  queryMonthHotelBillList: argumentMap,
};

export function IFlashHotelBillService(dubbo: Dubbo): IIFlashHotelBillService {
  return dubbo.proxyService<IIFlashHotelBillService>({
    dubboInterface: 'com.oyo.account.client.service.IFlashHotelBillService',
    methods: IFlashHotelBillServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
