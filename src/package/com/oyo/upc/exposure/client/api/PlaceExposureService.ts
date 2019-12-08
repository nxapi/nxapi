import { PlaceQueryRequestDto } from './../request/PlaceQueryRequestDto';
import { PagedResponse } from './../../../../common/response/PagedResponse';
import { PlaceDto } from './../response/PlaceDto';
import { SearchHotelRequest } from './../request/SearchHotelRequest';
import { HotelResponse } from './../response/HotelResponse';
import { BatchSearchRequest } from './../request/BatchSearchRequest';
import { HotelSimpleResponse } from './../response/HotelSimpleResponse';
import { OtaPlaceQueryDto } from './../request/OtaPlaceQueryDto';
import { BaseResponse } from './../../../../common/response/BaseResponse';
import { PageResponseDto } from './../response/common/PageResponseDto';
import { OtaPlaceDto } from './../response/OtaPlaceDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPlaceExposureService {
  searchCyclePlace(
    PlaceQueryRequestDto0: PlaceQueryRequestDto,
  ): TDubboCallResult<PagedResponse<PlaceDto>>;
  searchHotel(
    SearchHotelRequest0: SearchHotelRequest,
  ): TDubboCallResult<PagedResponse<HotelResponse>>;
  searchPlace(
    PlaceQueryRequestDto0: PlaceQueryRequestDto,
  ): TDubboCallResult<PagedResponse<PlaceDto>>;
  batchSearchHotel(
    BatchSearchRequest0: BatchSearchRequest,
  ): TDubboCallResult<PagedResponse<HotelSimpleResponse>>;
  searchOtaPlace(
    OtaPlaceQueryDto0: OtaPlaceQueryDto,
  ): TDubboCallResult<BaseResponse<PageResponseDto<OtaPlaceDto>>>;
}

export const PlaceExposureServiceWrapper = {
  searchCyclePlace: argumentMap,
  searchHotel: argumentMap,
  searchPlace: argumentMap,
  batchSearchHotel: argumentMap,
  searchOtaPlace: argumentMap,
};

export function PlaceExposureService(dubbo: Dubbo): IPlaceExposureService {
  return dubbo.proxyService<IPlaceExposureService>({
    dubboInterface: 'com.oyo.upc.exposure.client.api.PlaceExposureService',
    methods: PlaceExposureServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
