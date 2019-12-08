import { BaseResponse } from './../../../common/response/BaseResponse';
import { AmenityBO } from './../../bean/bo/amenity/AmenityBO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IAmenityServiceClient {
  hotelAll(): TDubboCallResult<BaseResponse<Array<AmenityBO>>>;
}

export const AmenityServiceClientWrapper = {hotelAll: argumentMap};

export function AmenityServiceClient(dubbo: Dubbo): IAmenityServiceClient {
  return dubbo.proxyService<IAmenityServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.AmenityServiceClient',
    methods: AmenityServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
