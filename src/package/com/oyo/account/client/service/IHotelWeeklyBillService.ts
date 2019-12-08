import { HotelWeeklyBillDto } from './../dto/HotelWeeklyBillDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { argumentMap, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIHotelWeeklyBillService {
  insertList(List0: JavaList): TDubboCallResult<BaseResponse<number>>;
}

export const IHotelWeeklyBillServiceWrapper = {insertList: argumentMap};

export function IHotelWeeklyBillService(
  dubbo: Dubbo,
): IIHotelWeeklyBillService {
  return dubbo.proxyService<IIHotelWeeklyBillService>({
    dubboInterface: 'com.oyo.account.client.service.IHotelWeeklyBillService',
    methods: IHotelWeeklyBillServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
