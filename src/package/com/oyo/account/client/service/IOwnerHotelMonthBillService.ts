import { HotelBillNewDto } from './../dto/HotelBillNewDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HotelBillDateResponseDto } from './../dto/HotelBillDateResponseDto';
import { HotelCommissionBillDto } from './../dto/HotelCommissionBillDto';
import { HotelBillPageDto } from './../dto/HotelBillPageDto';
import { HotelBillOwnerDto } from './../dto/HotelBillOwnerDto';
import { HotelCostBillDto } from './../dto/HotelCostBillDto';
import { ServiceProjectsDetailsDto } from './../dto/ServiceProjectsDetailsDto';
import { HotelsBillCountDto } from './../dto/HotelsBillCountDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOwnerHotelMonthBillService {
  queryHotelBillDateList(
    HotelBillNewDto0: HotelBillNewDto,
  ): TDubboCallResult<BaseResponse<HotelBillDateResponseDto>>;
  queryHotelBillPage(
    HotelCommissionBillDto0: HotelCommissionBillDto,
  ): TDubboCallResult<BaseResponse<Array<HotelBillPageDto>>>;
  queryNewHotelBill(
    HotelBillNewDto0: HotelBillNewDto,
  ): TDubboCallResult<BaseResponse<HotelBillOwnerDto>>;
  queryNewHotelsBillList(
    HotelBillNewDto0: HotelBillNewDto,
  ): TDubboCallResult<BaseResponse<HotelCostBillDto>>;
  queryHotelsBillist(
    HotelCommissionBillDto0: HotelCommissionBillDto,
  ): TDubboCallResult<BaseResponse<Array<HotelBillPageDto>>>;
  queryDetailPageList(
    HotelBillNewDto0: HotelBillNewDto,
  ): TDubboCallResult<BaseResponse<ServiceProjectsDetailsDto>>;
  queryNewHotelsBillCount(
    HotelBillNewDto0: HotelBillNewDto,
  ): TDubboCallResult<BaseResponse<HotelsBillCountDto>>;
  queryNoPayHotelsBillCount(
    HotelCommissionBillDto0: HotelCommissionBillDto,
  ): TDubboCallResult<BaseResponse<number>>;
}

export const IOwnerHotelMonthBillServiceWrapper = {
  queryHotelBillDateList: argumentMap,
  queryHotelBillPage: argumentMap,
  queryNewHotelBill: argumentMap,
  queryNewHotelsBillList: argumentMap,
  queryHotelsBillist: argumentMap,
  queryDetailPageList: argumentMap,
  queryNewHotelsBillCount: argumentMap,
  queryNoPayHotelsBillCount: argumentMap,
};

export function IOwnerHotelMonthBillService(
  dubbo: Dubbo,
): IIOwnerHotelMonthBillService {
  return dubbo.proxyService<IIOwnerHotelMonthBillService>({
    dubboInterface:
      'com.oyo.account.client.service.IOwnerHotelMonthBillService',
    methods: IOwnerHotelMonthBillServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
