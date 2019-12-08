import { HotelUpgradeSubbmitRequest } from './../bean/request/HotelUpgradeSubbmitRequest';
import { BaseResponse } from './../../common/response/BaseResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHotelUpgradeApi {
  subbmit(
    HotelUpgradeSubbmitRequest0: HotelUpgradeSubbmitRequest,
  ): TDubboCallResult<BaseResponse<boolean>>;
}

export const HotelUpgradeApiWrapper = {subbmit: argumentMap};

export function HotelUpgradeApi(dubbo: Dubbo): IHotelUpgradeApi {
  return dubbo.proxyService<IHotelUpgradeApi>({
    dubboInterface: 'com.oyo.owner.service.HotelUpgradeApi',
    methods: HotelUpgradeApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
