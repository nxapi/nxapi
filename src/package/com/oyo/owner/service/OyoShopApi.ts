import { BaseResponse } from './../../common/response/BaseResponse';
import { OyoShopVO } from './../bean/vo/OyoShopVO';
import { argumentMap, JavaLong } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IOyoShopApi {
  getByHotelId(Long0: JavaLong): TDubboCallResult<BaseResponse<OyoShopVO>>;
}

export const OyoShopApiWrapper = {getByHotelId: argumentMap};

export function OyoShopApi(dubbo: Dubbo): IOyoShopApi {
  return dubbo.proxyService<IOyoShopApi>({
    dubboInterface: 'com.oyo.owner.service.OyoShopApi',
    methods: OyoShopApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
