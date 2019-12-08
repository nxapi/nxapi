import { BaseResponse } from './../../common/response/BaseResponse';
import { ReadBillRequest } from './../bean/request/ReadBillRequest';
import { argumentMap, JavaLong, JavaList, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IBillPushApi {
  billsIfNoRead(
    Long0: JavaLong,
    Long1: JavaLong,
    List2: JavaList,
    String3: JavaString,
  ): TDubboCallResult<BaseResponse<Array<string>>>;
  readBill(
    ReadBillRequest0: ReadBillRequest,
  ): TDubboCallResult<BaseResponse<boolean>>;
  hasNoReadBillType(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<string>>>;
}

export const BillPushApiWrapper = {
  billsIfNoRead: argumentMap,
  readBill: argumentMap,
  hasNoReadBillType: argumentMap,
};

export function BillPushApi(dubbo: Dubbo): IBillPushApi {
  return dubbo.proxyService<IBillPushApi>({
    dubboInterface: 'com.oyo.owner.service.BillPushApi',
    methods: BillPushApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
