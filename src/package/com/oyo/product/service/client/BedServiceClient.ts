import { BaseResponse } from './../../../common/response/BaseResponse';
import { BedInfoGroupByNameBO } from './../../bean/bo/bed/BedInfoGroupByNameBO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IBedServiceClient {
  queryAllBedInfoList(): TDubboCallResult<
    BaseResponse<Array<BedInfoGroupByNameBO>>
  >;
}

export const BedServiceClientWrapper = {queryAllBedInfoList: argumentMap};

export function BedServiceClient(dubbo: Dubbo): IBedServiceClient {
  return dubbo.proxyService<IBedServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.BedServiceClient',
    methods: BedServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
