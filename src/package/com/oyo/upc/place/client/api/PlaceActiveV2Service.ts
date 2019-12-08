import { BaseResponse } from './../../../../common/response/BaseResponse';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPlaceActiveV2Service {
  apolloPaf(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  apolloLive(Long0: JavaLong, Long1: JavaLong): TDubboCallResult<BaseResponse>;
  apolloPsa(Long0: JavaLong, Long1: JavaLong): TDubboCallResult<BaseResponse>;
}

export const PlaceActiveV2ServiceWrapper = {
  apolloPaf: argumentMap,
  apolloLive: argumentMap,
  apolloPsa: argumentMap,
};

export function PlaceActiveV2Service(dubbo: Dubbo): IPlaceActiveV2Service {
  return dubbo.proxyService<IPlaceActiveV2Service>({
    dubboInterface: 'com.oyo.upc.place.client.api.PlaceActiveV2Service',
    methods: PlaceActiveV2ServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
