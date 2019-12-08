import { BaseResponse } from './../../common/response/BaseResponse';
import { OrderPushTimeVO } from './../bean/vo/OrderPushTimeVO';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IOrderPushTimeApi {
  updateOrderPushTime(
    Long0: JavaLong,
    Date1: Date,
    Date2: Date,
  ): TDubboCallResult<BaseResponse<boolean>>;
  getByAccountId(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<OrderPushTimeVO>>;
}

export const OrderPushTimeApiWrapper = {
  updateOrderPushTime: argumentMap,
  getByAccountId: argumentMap,
};

export function OrderPushTimeApi(dubbo: Dubbo): IOrderPushTimeApi {
  return dubbo.proxyService<IOrderPushTimeApi>({
    dubboInterface: 'com.oyo.owner.service.OrderPushTimeApi',
    methods: OrderPushTimeApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
