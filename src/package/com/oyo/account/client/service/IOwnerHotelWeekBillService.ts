import { OwnerAccountBillDto } from './../dto/OwnerAccountBillDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HotelBillListMonthAndWeekDto } from './../dto/HotelBillListMonthAndWeekDto';
import { HotelMonthlyBillDto } from './../dto/HotelMonthlyBillDto';
import { HotelBillDateResponseDto } from './../dto/HotelBillDateResponseDto';
import { ServiceProjectsDetailsDto } from './../dto/ServiceProjectsDetailsDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOwnerHotelWeekBillService {
  queryBillDetailPath(
    OwnerAccountBillDto0: OwnerAccountBillDto,
  ): TDubboCallResult<BaseResponse<string>>;
  queryHotelBillList(
    OwnerAccountBillDto0: OwnerAccountBillDto,
  ): TDubboCallResult<BaseResponse<Array<HotelBillListMonthAndWeekDto>>>;
  queryHotelBillProject(
    OwnerAccountBillDto0: OwnerAccountBillDto,
  ): TDubboCallResult<BaseResponse<Array<HotelMonthlyBillDto>>>;
  queryWeekHotelBillDateList(
    OwnerAccountBillDto0: OwnerAccountBillDto,
  ): TDubboCallResult<BaseResponse<HotelBillDateResponseDto>>;
  queryProjectDetailList(
    OwnerAccountBillDto0: OwnerAccountBillDto,
  ): TDubboCallResult<BaseResponse<ServiceProjectsDetailsDto>>;
  queryBtachNo(
    OwnerAccountBillDto0: OwnerAccountBillDto,
  ): TDubboCallResult<BaseResponse<Array<string>>>;
}

export const IOwnerHotelWeekBillServiceWrapper = {
  queryBillDetailPath: argumentMap,
  queryHotelBillList: argumentMap,
  queryHotelBillProject: argumentMap,
  queryWeekHotelBillDateList: argumentMap,
  queryProjectDetailList: argumentMap,
  queryBtachNo: argumentMap,
};

export function IOwnerHotelWeekBillService(
  dubbo: Dubbo,
): IIOwnerHotelWeekBillService {
  return dubbo.proxyService<IIOwnerHotelWeekBillService>({
    dubboInterface: 'com.oyo.account.client.service.IOwnerHotelWeekBillService',
    methods: IOwnerHotelWeekBillServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
