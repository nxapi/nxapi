import { OwnerHotelBillEGMDto } from './../dto/OwnerHotelBillEGMDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { BillTypeDTO } from './../dto/BillTypeDTO';
import { OwnerHotelBillListDto } from './../dto/OwnerHotelBillListDto';
import { HotelBillDateResponseDto } from './../dto/HotelBillDateResponseDto';
import { HotelBillEGMDetailDto } from './../dto/HotelBillEGMDetailDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOnwerHotelBillService {
  queryHotelBillType(
    OwnerHotelBillEGMDto0: OwnerHotelBillEGMDto,
  ): TDubboCallResult<BaseResponse<BillTypeDTO>>;
  queryHotelBillList(
    OwnerHotelBillListDto0: OwnerHotelBillListDto,
  ): TDubboCallResult<BaseResponse<HotelBillDateResponseDto>>;
  queryHotelBillEGMDetail(
    OwnerHotelBillEGMDto0: OwnerHotelBillEGMDto,
  ): TDubboCallResult<BaseResponse<HotelBillEGMDetailDto>>;
}

export const IOnwerHotelBillServiceWrapper = {
  queryHotelBillType: argumentMap,
  queryHotelBillList: argumentMap,
  queryHotelBillEGMDetail: argumentMap,
};

export function IOnwerHotelBillService(dubbo: Dubbo): IIOnwerHotelBillService {
  return dubbo.proxyService<IIOnwerHotelBillService>({
    dubboInterface: 'com.oyo.account.client.service.IOnwerHotelBillService',
    methods: IOnwerHotelBillServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
