import { ContactSaveRequestDto } from './../dto/request/ContactSaveRequestDto';
import { BaseResponse } from './../../../../common/response/BaseResponse';
import { SpaceCreateRequestDto } from './../dto/request/SpaceCreateRequestDto';
import { SpaceQueryResponseDto } from './../dto/response/SpaceQueryResponseDto';
import { ImageUpdateRequestDto } from './../dto/request/ImageUpdateRequestDto';
import { GetPlaceAttributesRequestDto } from './../dto/request/GetPlaceAttributesRequestDto';
import { PlaceAttributeDto } from './../dto/response/PlaceAttributeDto';
import { SpaceSearchRequestDto } from './../dto/request/SpaceSearchRequestDto';
import { PagedResponse } from './../../../../common/response/PagedResponse';
import { GetLegalEntityRequestDto } from './../dto/request/GetLegalEntityRequestDto';
import { PlaceLegalEntityDto } from './../dto/response/PlaceLegalEntityDto';
import { FloorSpaceQueryRequestDto } from './../dto/request/FloorSpaceQueryRequestDto';
import { PlaceFloorDto } from './../dto/response/PlaceFloorDto';
import { PlacePoiGeographyCreateRequestDto } from './../dto/request/PlacePoiGeographyCreateRequestDto';
import { ContactDefaultRequestDto } from './../dto/request/ContactDefaultRequestDto';
import { PlaceCreateRequestDto } from './../dto/request/PlaceCreateRequestDto';
import { PlaceDto } from './../dto/response/PlaceDto';
import { ImageDeleteRequestDto } from './../dto/request/ImageDeleteRequestDto';
import { ContactCreateRequestDto } from './../dto/request/ContactCreateRequestDto';
import { SpaceUpdateRequestDto } from './../dto/request/SpaceUpdateRequestDto';
import { HotelInfoDto } from './../dto/response/HotelInfoDto';
import { PlacePoiQueryDto } from './../dto/request/PlacePoiQueryDto';
import { PlacePoiGeographyDto } from './../dto/response/PlacePoiGeographyDto';
import { ImageCreateRequestDto } from './../dto/request/ImageCreateRequestDto';
import { ImageQueryResponseDto } from './../dto/response/ImageQueryResponseDto';
import { GetSpaceTypeAttributeRequestDto } from './../dto/request/GetSpaceTypeAttributeRequestDto';
import { SpaceTypeAttributeDto } from './../dto/response/SpaceTypeAttributeDto';
import { SetPlacePayTypeDto } from './../dto/request/SetPlacePayTypeDto';
import { PlaceOtaAccountRelaRequestDto } from './../dto/request/PlaceOtaAccountRelaRequestDto';
import { SpaceAttributeDto } from './../dto/response/SpaceAttributeDto';
import { PlaceByCodeQueryDto } from './../dto/request/PlaceByCodeQueryDto';
import { SpaceTypeAttributeCreateRequestDto } from './../dto/request/SpaceTypeAttributeCreateRequestDto';
import { PlaceCreateForResignRequestDto } from './../dto/request/PlaceCreateForResignRequestDto';
import { SpaceTypeQueryRequestDto } from './../dto/request/SpaceTypeQueryRequestDto';
import { SpaceTypeQueryResponseDto } from './../dto/response/SpaceTypeQueryResponseDto';
import { PlaceQueryRequestDto } from './../dto/request/PlaceQueryRequestDto';
import { ImageQueryRequestDto } from './../dto/request/ImageQueryRequestDto';
import { PlaceImage } from './../common/PlaceImage';
import { MigrateRoomRequestDto } from './../dto/request/MigrateRoomRequestDto';
import { BatchGetPlaceByCodesRequestDto } from './../dto/request/BatchGetPlaceByCodesRequestDto';
import { PlaceAttributeStatsRequestDto } from './../dto/request/PlaceAttributeStatsRequestDto';
import { PlaceAttributeStatsResponseDto } from './../dto/response/PlaceAttributeStatsResponseDto';
import { PlaceUpdateRequestDto } from './../dto/request/PlaceUpdateRequestDto';
import { BatchGetPlaceByIdsRequestDto } from './../dto/request/BatchGetPlaceByIdsRequestDto';
import { PlaceLegalEntityCreateRequestDto } from './../dto/request/PlaceLegalEntityCreateRequestDto';
import { PlaceBaseAttributeQueryRequestDto } from './../dto/request/PlaceBaseAttributeQueryRequestDto';
import { PlaceBaseAttributeDto } from './../dto/response/PlaceBaseAttributeDto';
import { PlaceAttributeCreateRequestDto } from './../dto/request/PlaceAttributeCreateRequestDto';
import { PlacePayTypeQueryDto } from './../dto/request/PlacePayTypeQueryDto';
import { DeleteSpaceTypeOrToiletDto } from './../dto/request/DeleteSpaceTypeOrToiletDto';
import { SpaceDeleteRequestDto } from './../dto/request/SpaceDeleteRequestDto';
import { ContactGetRequestDto } from './../dto/request/ContactGetRequestDto';
import { PlaceContactDto } from './../dto/response/PlaceContactDto';
import { GetPlaceOtaAccountRelaDto } from './../dto/request/GetPlaceOtaAccountRelaDto';
import { PlaceOtaAccountRelaDto } from './../dto/response/PlaceOtaAccountRelaDto';
import { SpaceAttributeCreateRequestDto } from './../dto/request/SpaceAttributeCreateRequestDto';
import { PlaceStatusRequestDto } from './../dto/request/PlaceStatusRequestDto';
import { PlaceHotelQueryDto } from './../dto/response/PlaceHotelQueryDto';
import { PlaceHotelInfoResponseDto } from './../dto/response/PlaceHotelInfoResponseDto';
import { PlaceByIdQueryDto } from './../dto/request/PlaceByIdQueryDto';
import { argumentMap, JavaList, JavaLong, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPlaceService {
  saveContact(
    ContactSaveRequestDto0: ContactSaveRequestDto,
  ): TDubboCallResult<BaseResponse>;
  createSpace(
    SpaceCreateRequestDto0: SpaceCreateRequestDto,
  ): TDubboCallResult<BaseResponse<SpaceQueryResponseDto>>;
  updateImage(
    ImageUpdateRequestDto0: ImageUpdateRequestDto,
  ): TDubboCallResult<BaseResponse>;
  getPlaceAttributes(
    GetPlaceAttributesRequestDto0: GetPlaceAttributesRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceAttributeDto>>;
  searchSpace(
    SpaceSearchRequestDto0: SpaceSearchRequestDto,
  ): TDubboCallResult<BaseResponse<PagedResponse<SpaceQueryResponseDto>>>;
  getLegalEntity(
    GetLegalEntityRequestDto0: GetLegalEntityRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceLegalEntityDto>>;
  getAllFloorSpace(
    FloorSpaceQueryRequestDto0: FloorSpaceQueryRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceFloorDto>>;
  savePlacePoi(
    PlacePoiGeographyCreateRequestDto0: PlacePoiGeographyCreateRequestDto,
  ): TDubboCallResult<BaseResponse<void>>;
  setDefaultContact(
    ContactDefaultRequestDto0: ContactDefaultRequestDto,
  ): TDubboCallResult<BaseResponse>;
  create(
    PlaceCreateRequestDto0: PlaceCreateRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceDto>>;
  deleteImage(
    ImageDeleteRequestDto0: ImageDeleteRequestDto,
  ): TDubboCallResult<BaseResponse>;
  createContact(
    ContactCreateRequestDto0: ContactCreateRequestDto,
  ): TDubboCallResult<BaseResponse>;
  updateSpace(
    SpaceUpdateRequestDto0: SpaceUpdateRequestDto,
  ): TDubboCallResult<BaseResponse<number>>;
  getRoomInfoByHotelIds(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelInfoDto>>>;
  getPlacePoi(
    PlacePoiQueryDto0: PlacePoiQueryDto,
  ): TDubboCallResult<BaseResponse<Array<PlacePoiGeographyDto>>>;
  saveImage(
    ImageCreateRequestDto0: ImageCreateRequestDto,
  ): TDubboCallResult<BaseResponse<ImageQueryResponseDto>>;
  getSpaceTypeAttribute(
    GetSpaceTypeAttributeRequestDto0: GetSpaceTypeAttributeRequestDto,
  ): TDubboCallResult<BaseResponse<Array<SpaceTypeAttributeDto>>>;
  setPlacePayType(
    SetPlacePayTypeDto0: SetPlacePayTypeDto,
  ): TDubboCallResult<BaseResponse<void>>;
  addImage(
    ImageCreateRequestDto0: ImageCreateRequestDto,
  ): TDubboCallResult<BaseResponse<void>>;
  deletePlaceOtaAccountRela(
    PlaceOtaAccountRelaRequestDto0: PlaceOtaAccountRelaRequestDto,
  ): TDubboCallResult<BaseResponse>;
  getSpaceAttribute(
    Long0: JavaLong,
    Integer1: JavaInteger,
  ): TDubboCallResult<BaseResponse<SpaceAttributeDto>>;
  getPlaceByCode(
    PlaceByCodeQueryDto0: PlaceByCodeQueryDto,
  ): TDubboCallResult<BaseResponse<PlaceDto>>;
  saveSpaceTypeAttribute(
    SpaceTypeAttributeCreateRequestDto0: SpaceTypeAttributeCreateRequestDto,
  ): TDubboCallResult<BaseResponse>;
  createForResign(
    PlaceCreateForResignRequestDto0: PlaceCreateForResignRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceDto>>;
  getSpaceType(
    SpaceTypeQueryRequestDto0: SpaceTypeQueryRequestDto,
  ): TDubboCallResult<BaseResponse<SpaceTypeQueryResponseDto>>;
  searchPlace(
    PlaceQueryRequestDto0: PlaceQueryRequestDto,
  ): TDubboCallResult<PagedResponse<PlaceDto>>;
  savePlaceOtaAccountRela(
    PlaceOtaAccountRelaRequestDto0: PlaceOtaAccountRelaRequestDto,
  ): TDubboCallResult<BaseResponse>;
  getImage(
    ImageQueryRequestDto0: ImageQueryRequestDto,
  ): TDubboCallResult<PagedResponse<PlaceImage>>;
  migrate(
    MigrateRoomRequestDto0: MigrateRoomRequestDto,
  ): TDubboCallResult<BaseResponse>;
  batchGetPlaceByCodes(
    BatchGetPlaceByCodesRequestDto0: BatchGetPlaceByCodesRequestDto,
  ): TDubboCallResult<BaseResponse<Array<PlaceDto>>>;
  getAllPlaceAttributeStats(
    PlaceAttributeStatsRequestDto0: PlaceAttributeStatsRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceAttributeStatsResponseDto>>;
  updatePlace(
    PlaceUpdateRequestDto0: PlaceUpdateRequestDto,
  ): TDubboCallResult<BaseResponse<number>>;
  getPlaceAttributeStats(
    PlaceAttributeStatsRequestDto0: PlaceAttributeStatsRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceAttributeStatsResponseDto>>;
  batchGetPlaceByIds(
    BatchGetPlaceByIdsRequestDto0: BatchGetPlaceByIdsRequestDto,
  ): TDubboCallResult<BaseResponse<Array<PlaceDto>>>;
  saveLegalEntity(
    PlaceLegalEntityCreateRequestDto0: PlaceLegalEntityCreateRequestDto,
  ): TDubboCallResult<BaseResponse>;
  getBaseAttribute(
    PlaceBaseAttributeQueryRequestDto0: PlaceBaseAttributeQueryRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceBaseAttributeDto>>;
  savePlaceAttributes(
    PlaceAttributeCreateRequestDto0: PlaceAttributeCreateRequestDto,
  ): TDubboCallResult<BaseResponse>;
  getPlacePayType(
    PlacePayTypeQueryDto0: PlacePayTypeQueryDto,
  ): TDubboCallResult<BaseResponse<Array<number>>>;
  deleteSpaceRela(
    DeleteSpaceTypeOrToiletDto0: DeleteSpaceTypeOrToiletDto,
  ): TDubboCallResult<BaseResponse>;
  createImage(
    ImageCreateRequestDto0: ImageCreateRequestDto,
  ): TDubboCallResult<BaseResponse<ImageQueryResponseDto>>;
  batchGetSpace(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<SpaceQueryResponseDto>>>;
  deleteSpace(
    SpaceDeleteRequestDto0: SpaceDeleteRequestDto,
  ): TDubboCallResult<BaseResponse<number>>;
  getContact(
    ContactGetRequestDto0: ContactGetRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceContactDto>>;
  getPlaceOtaAccountRela(
    GetPlaceOtaAccountRelaDto0: GetPlaceOtaAccountRelaDto,
  ): TDubboCallResult<BaseResponse<PlaceOtaAccountRelaDto>>;
  saveSpaceAttribute(
    SpaceAttributeCreateRequestDto0: SpaceAttributeCreateRequestDto,
  ): TDubboCallResult<BaseResponse>;
  updatePlaceStatus(
    PlaceStatusRequestDto0: PlaceStatusRequestDto,
  ): TDubboCallResult<BaseResponse<number>>;
  getSpace(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<SpaceQueryResponseDto>>;
  getFloorSpace(
    FloorSpaceQueryRequestDto0: FloorSpaceQueryRequestDto,
  ): TDubboCallResult<BaseResponse<PlaceFloorDto>>;
  getOyoId(
    PlaceHotelQueryDto0: PlaceHotelQueryDto,
  ): TDubboCallResult<BaseResponse<PlaceHotelInfoResponseDto>>;
  getPlaceById(
    PlaceByIdQueryDto0: PlaceByIdQueryDto,
  ): TDubboCallResult<BaseResponse<PlaceDto>>;
}

export const PlaceServiceWrapper = {
  saveContact: argumentMap,
  createSpace: argumentMap,
  updateImage: argumentMap,
  getPlaceAttributes: argumentMap,
  searchSpace: argumentMap,
  getLegalEntity: argumentMap,
  getAllFloorSpace: argumentMap,
  savePlacePoi: argumentMap,
  setDefaultContact: argumentMap,
  create: argumentMap,
  deleteImage: argumentMap,
  createContact: argumentMap,
  updateSpace: argumentMap,
  getRoomInfoByHotelIds: argumentMap,
  getPlacePoi: argumentMap,
  saveImage: argumentMap,
  getSpaceTypeAttribute: argumentMap,
  setPlacePayType: argumentMap,
  addImage: argumentMap,
  deletePlaceOtaAccountRela: argumentMap,
  getSpaceAttribute: argumentMap,
  getPlaceByCode: argumentMap,
  saveSpaceTypeAttribute: argumentMap,
  createForResign: argumentMap,
  getSpaceType: argumentMap,
  searchPlace: argumentMap,
  savePlaceOtaAccountRela: argumentMap,
  getImage: argumentMap,
  migrate: argumentMap,
  batchGetPlaceByCodes: argumentMap,
  getAllPlaceAttributeStats: argumentMap,
  updatePlace: argumentMap,
  getPlaceAttributeStats: argumentMap,
  batchGetPlaceByIds: argumentMap,
  saveLegalEntity: argumentMap,
  getBaseAttribute: argumentMap,
  savePlaceAttributes: argumentMap,
  getPlacePayType: argumentMap,
  deleteSpaceRela: argumentMap,
  createImage: argumentMap,
  batchGetSpace: argumentMap,
  deleteSpace: argumentMap,
  getContact: argumentMap,
  getPlaceOtaAccountRela: argumentMap,
  saveSpaceAttribute: argumentMap,
  updatePlaceStatus: argumentMap,
  getSpace: argumentMap,
  getFloorSpace: argumentMap,
  getOyoId: argumentMap,
  getPlaceById: argumentMap,
};

export function PlaceService(dubbo: Dubbo): IPlaceService {
  return dubbo.proxyService<IPlaceService>({
    dubboInterface: 'com.oyo.upc.place.client.api.PlaceService',
    methods: PlaceServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
