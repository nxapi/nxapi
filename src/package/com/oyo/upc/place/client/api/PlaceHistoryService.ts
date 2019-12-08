import { PlaceHistoryQueryDto } from './../dto/request/PlaceHistoryQueryDto';
import { BaseResponse } from './../../../../common/response/BaseResponse';
import { PlaceDto } from './../dto/response/PlaceDto';
import { SpaceTypeQueryHistoryRequestDto } from './../dto/request/SpaceTypeQueryHistoryRequestDto';
import { SpaceTypeQueryResponseDto } from './../dto/response/SpaceTypeQueryResponseDto';
import { ContactGetHistoryRequestDto } from './../dto/request/ContactGetHistoryRequestDto';
import { PlaceContactDto } from './../dto/response/PlaceContactDto';
import { FloorSpaceQueryHistoryRequestDto } from './../dto/request/FloorSpaceQueryHistoryRequestDto';
import { PlaceFloorDto } from './../dto/response/PlaceFloorDto';
import { PlacePayTypeQueryHistoryDto } from './../dto/request/PlacePayTypeQueryHistoryDto';
import { PlacePoiQueryHistoryDto } from './../dto/request/PlacePoiQueryHistoryDto';
import { PlacePoiGeographyDto } from './../dto/response/PlacePoiGeographyDto';
import { GetPlaceOtaAccountRelaHistoryDto } from './../dto/request/GetPlaceOtaAccountRelaHistoryDto';
import { PlaceOtaAccountRelaDto } from './../dto/response/PlaceOtaAccountRelaDto';
import { GetPlaceAttributesHistoryRequestDto } from './../dto/request/GetPlaceAttributesHistoryRequestDto';
import { PlaceAttributeDto } from './../dto/response/PlaceAttributeDto';
import { GetLegalEntityHistoryRequestDto } from './../dto/request/GetLegalEntityHistoryRequestDto';
import { PlaceLegalEntityDto } from './../dto/response/PlaceLegalEntityDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPlaceHistoryService {
  getPlaceHistory(
    PlaceHistoryQueryDto0: PlaceHistoryQueryDto,
  ): TDubboCallResult<BaseResponse<PlaceDto>>;
  getSpaceTypeHistory(
    SpaceTypeQueryHistoryRequestDto0: SpaceTypeQueryHistoryRequestDto,
  ): TDubboCallResult<BaseResponse<SpaceTypeQueryResponseDto>>;
  getContactHistory(
    ContactGetHistoryRequestDto0: ContactGetHistoryRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceContactDto>>;
  getFloorSpaceHistory(
    FloorSpaceQueryHistoryRequestDto0: FloorSpaceQueryHistoryRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceFloorDto>>;
  getPlacePayTypeHistory(
    PlacePayTypeQueryHistoryDto0: PlacePayTypeQueryHistoryDto,
  ): TDubboCallResult<BaseResponse<Array<number>>>;
  getPlacePoiHistory(
    PlacePoiQueryHistoryDto0: PlacePoiQueryHistoryDto,
  ): TDubboCallResult<BaseResponse<Array<PlacePoiGeographyDto>>>;
  getPlaceOtaAccountRelaHistory(
    GetPlaceOtaAccountRelaHistoryDto0: GetPlaceOtaAccountRelaHistoryDto,
  ): TDubboCallResult<BaseResponse<PlaceOtaAccountRelaDto>>;
  getPlaceAttributesHistory(
    GetPlaceAttributesHistoryRequestDto0: GetPlaceAttributesHistoryRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceAttributeDto>>;
  getLegalEntityHistory(
    GetLegalEntityHistoryRequestDto0: GetLegalEntityHistoryRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceLegalEntityDto>>;
}

export const PlaceHistoryServiceWrapper = {
  getPlaceHistory: argumentMap,
  getSpaceTypeHistory: argumentMap,
  getContactHistory: argumentMap,
  getFloorSpaceHistory: argumentMap,
  getPlacePayTypeHistory: argumentMap,
  getPlacePoiHistory: argumentMap,
  getPlaceOtaAccountRelaHistory: argumentMap,
  getPlaceAttributesHistory: argumentMap,
  getLegalEntityHistory: argumentMap,
};

export function PlaceHistoryService(dubbo: Dubbo): IPlaceHistoryService {
  return dubbo.proxyService<IPlaceHistoryService>({
    dubboInterface: 'com.oyo.upc.place.client.api.PlaceHistoryService',
    methods: PlaceHistoryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
