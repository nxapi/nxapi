import { BaseResponse } from './../../../common/response/BaseResponse';
import { LocationVO } from './../../controller/vo/location/LocationVO';
import { GetClusterByCityIdVO } from './../../controller/vo/location/GetClusterByCityIdVO';
import { StreetInfo } from './../../controller/vo/location/StreetInfo';
import { argumentMap, JavaString, JavaLong, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ILocationServiceClient {
  getParentLocation(
    String0: JavaString,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<LocationVO>>;
  getClusterByCityId(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<GetClusterByCityIdVO>>;
  getStreetInfo(
    Integer0: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<StreetInfo>>>;
}

export const LocationServiceClientWrapper = {
  getParentLocation: argumentMap,
  getClusterByCityId: argumentMap,
  getStreetInfo: argumentMap,
};

export function LocationServiceClient(dubbo: Dubbo): ILocationServiceClient {
  return dubbo.proxyService<ILocationServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.LocationServiceClient',
    methods: LocationServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
