import { BaseResponse } from './../../../common/response/BaseResponse';
import { CrsHotelDto } from './../dto/CrsHotelDto';
import { argumentMap, JavaString, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IICrsHotelsService {
  getHotelOyoRateAndShareByUniqueCode(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<CrsHotelDto>>;
  getHotelInfoByBookingsId(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<CrsHotelDto>>>;
}

export const ICrsHotelsServiceWrapper = {
  getHotelOyoRateAndShareByUniqueCode: argumentMap,
  getHotelInfoByBookingsId: argumentMap,
};

export function ICrsHotelsService(dubbo: Dubbo): IICrsHotelsService {
  return dubbo.proxyService<IICrsHotelsService>({
    dubboInterface: 'com.oyo.account.client.service.ICrsHotelsService',
    methods: ICrsHotelsServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
