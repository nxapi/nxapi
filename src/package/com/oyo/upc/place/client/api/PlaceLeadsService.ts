import { PlaceLeadsRepeatQueryRequest } from './../dto/request/PlaceLeadsRepeatQueryRequest';
import { BaseResponse } from './../../../../common/response/BaseResponse';
import { PlaceDto } from './../dto/response/PlaceDto';
import { PlaceLeadsRequest } from './../dto/request/PlaceLeadsRequest';
import { PlaceLeadsQueryRequest } from './../dto/request/PlaceLeadsQueryRequest';
import { PlaceOtaAccountRequestDto } from './../dto/request/PlaceOtaAccountRequestDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPlaceLeadsService {
  getRepeatPlace(
    PlaceLeadsRepeatQueryRequest0: PlaceLeadsRepeatQueryRequest,
  ): TDubboCallResult<BaseResponse<Array<PlaceDto>>>;
  savePlace(
    PlaceLeadsRequest0: PlaceLeadsRequest,
  ): TDubboCallResult<BaseResponse<PlaceDto>>;
  getPlace(
    PlaceLeadsQueryRequest0: PlaceLeadsQueryRequest,
  ): TDubboCallResult<BaseResponse<Array<PlaceDto>>>;
  savePlaceOtaAccountRela(
    PlaceOtaAccountRequestDto0: PlaceOtaAccountRequestDto,
  ): TDubboCallResult<BaseResponse>;
}

export const PlaceLeadsServiceWrapper = {
  getRepeatPlace: argumentMap,
  savePlace: argumentMap,
  getPlace: argumentMap,
  savePlaceOtaAccountRela: argumentMap,
};

export function PlaceLeadsService(dubbo: Dubbo): IPlaceLeadsService {
  return dubbo.proxyService<IPlaceLeadsService>({
    dubboInterface: 'com.oyo.upc.place.client.api.PlaceLeadsService',
    methods: PlaceLeadsServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
