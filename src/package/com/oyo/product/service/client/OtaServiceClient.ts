import { DailyTotalChargeRequest } from './../../controller/request/ota/DailyTotalChargeRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { RoomStayVO } from './../../controller/vo/ota/RoomStayVO';
import { OtaProductListRequest } from './../../controller/request/ota/OtaProductListRequest';
import { OtaProductVO } from './../../controller/vo/ota/OtaProductVO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IOtaServiceClient {
  getTotalChargeByDaily(
    DailyTotalChargeRequest0: DailyTotalChargeRequest,
  ): TDubboCallResult<BaseResponse<RoomStayVO>>;
  products(
    OtaProductListRequest0: OtaProductListRequest,
  ): TDubboCallResult<BaseResponse<Array<OtaProductVO>>>;
}

export const OtaServiceClientWrapper = {
  getTotalChargeByDaily: argumentMap,
  products: argumentMap,
};

export function OtaServiceClient(dubbo: Dubbo): IOtaServiceClient {
  return dubbo.proxyService<IOtaServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.OtaServiceClient',
    methods: OtaServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
