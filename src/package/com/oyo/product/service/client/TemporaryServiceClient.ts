import { SupportChunleiActivityReq } from './../../controller/request/temporary/SupportChunleiActivityReq';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { argumentMap, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ITemporaryServiceClient {
  batchRoomTypeBindRateCodes(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<string>>;
  rollbackChunleiActivity(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<string>>;
}

export const TemporaryServiceClientWrapper = {
  batchRoomTypeBindRateCodes: argumentMap,
  rollbackChunleiActivity: argumentMap,
};

export function TemporaryServiceClient(dubbo: Dubbo): ITemporaryServiceClient {
  return dubbo.proxyService<ITemporaryServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.TemporaryServiceClient',
    methods: TemporaryServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
