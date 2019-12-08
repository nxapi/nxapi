import { HotelHooFeeAdjustDTO } from './../dto/HotelHooFeeAdjustDTO';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HotelHooFeeAdjustQueryDTO } from './../dto/HotelHooFeeAdjustQueryDTO';
import { HotelHooFeeAdjustVO } from './../vo/HotelHooFeeAdjustVO';
import { argumentMap, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIHotelHooFeeAdjustService {
  batchInsert(List0: JavaList): TDubboCallResult<BaseResponse<number>>;
  queryHotelHooFeeAdjust(
    HotelHooFeeAdjustQueryDTO0: HotelHooFeeAdjustQueryDTO,
  ): TDubboCallResult<BaseResponse<Array<HotelHooFeeAdjustVO>>>;
}

export const IHotelHooFeeAdjustServiceWrapper = {
  batchInsert: argumentMap,
  queryHotelHooFeeAdjust: argumentMap,
};

export function IHotelHooFeeAdjustService(
  dubbo: Dubbo,
): IIHotelHooFeeAdjustService {
  return dubbo.proxyService<IIHotelHooFeeAdjustService>({
    dubboInterface: 'com.oyo.account.client.service.IHotelHooFeeAdjustService',
    methods: IHotelHooFeeAdjustServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
