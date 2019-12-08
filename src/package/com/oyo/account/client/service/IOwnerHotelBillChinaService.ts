import { OwnerChinaHotelBillDto } from './../dto/OwnerChinaHotelBillDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HotelBillChinaTwoDto } from './../dto/HotelBillChinaTwoDto';
import { HotelBillDateResponseDto } from './../dto/HotelBillDateResponseDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOwnerHotelBillChinaService {
  queryBillDetailPath(
    OwnerChinaHotelBillDto0: OwnerChinaHotelBillDto,
  ): TDubboCallResult<BaseResponse<string>>;
  queryChinaHotelBillDetail(
    OwnerChinaHotelBillDto0: OwnerChinaHotelBillDto,
  ): TDubboCallResult<BaseResponse<HotelBillChinaTwoDto>>;
  queryChinaHotelBillDetailList(
    OwnerChinaHotelBillDto0: OwnerChinaHotelBillDto,
  ): TDubboCallResult<BaseResponse<Array<HotelBillChinaTwoDto>>>;
  queryChinaHotelBillList(
    OwnerChinaHotelBillDto0: OwnerChinaHotelBillDto,
  ): TDubboCallResult<BaseResponse<HotelBillDateResponseDto>>;
}

export const IOwnerHotelBillChinaServiceWrapper = {
  queryBillDetailPath: argumentMap,
  queryChinaHotelBillDetail: argumentMap,
  queryChinaHotelBillDetailList: argumentMap,
  queryChinaHotelBillList: argumentMap,
};

export function IOwnerHotelBillChinaService(
  dubbo: Dubbo,
): IIOwnerHotelBillChinaService {
  return dubbo.proxyService<IIOwnerHotelBillChinaService>({
    dubboInterface:
      'com.oyo.account.client.service.IOwnerHotelBillChinaService',
    methods: IOwnerHotelBillChinaServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
