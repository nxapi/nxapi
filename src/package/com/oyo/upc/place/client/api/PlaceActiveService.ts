import { BaseResponse } from './../../../../common/response/BaseResponse';
import { ContractSignedResponseDto } from './../dto/response/ContractSignedResponseDto';
import { PlaceContractDto } from './../dto/request/PlaceContractDto';
import { SaleBlackRoomChangeRoomTypeRequestDto } from './../dto/request/SaleBlackRoomChangeRoomTypeRequestDto';
import { ApolloRoomFixRequestDto } from './../dto/request/ApolloRoomFixRequestDto';
import { SetRateListDto } from './../dto/request/SetRateListDto';
import { argumentMap, JavaString, JavaLong, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IPlaceActiveService {
  contractSigned(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<ContractSignedResponseDto>>;
  bindLandmark(Long0: JavaLong): TDubboCallResult<BaseResponse<void>>;
  appoloHotelAmenityActive(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<void>>;
  updateHotelStatus(
    Long0: JavaLong,
    Integer1: JavaInteger,
    Integer2: JavaInteger,
  ): TDubboCallResult<BaseResponse>;
  savePlaceTag(
    PlaceContractDto0: PlaceContractDto,
  ): TDubboCallResult<BaseResponse<void>>;
  updatePTIStatus(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  saleBlackRoomChangeRoomType(
    SaleBlackRoomChangeRoomTypeRequestDto0: SaleBlackRoomChangeRoomTypeRequestDto,
  ): TDubboCallResult<BaseResponse>;
  bindChannel(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  apolloHotelImages(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  appoloHotelActive(Long0: JavaLong): TDubboCallResult<BaseResponse<number>>;
  appoloRoomActive(Long0: JavaLong): TDubboCallResult<BaseResponse<void>>;
  apolloHotelPriceActive(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse>;
  hotelImages(Long0: JavaLong): TDubboCallResult<BaseResponse>;
  apolloRoomFix(
    ApolloRoomFixRequestDto0: ApolloRoomFixRequestDto,
  ): TDubboCallResult<BaseResponse>;
  setRateList(SetRateListDto0: SetRateListDto): TDubboCallResult<BaseResponse>;
  bindContact(Long0: JavaLong): TDubboCallResult<BaseResponse<void>>;
  recoup(
    Long0: JavaLong,
    Long1: JavaLong,
    Integer2: JavaInteger,
    Integer3: JavaInteger,
  ): TDubboCallResult<BaseResponse<void>>;
}

export const PlaceActiveServiceWrapper = {
  contractSigned: argumentMap,
  bindLandmark: argumentMap,
  appoloHotelAmenityActive: argumentMap,
  updateHotelStatus: argumentMap,
  savePlaceTag: argumentMap,
  updatePTIStatus: argumentMap,
  saleBlackRoomChangeRoomType: argumentMap,
  bindChannel: argumentMap,
  apolloHotelImages: argumentMap,
  appoloHotelActive: argumentMap,
  appoloRoomActive: argumentMap,
  apolloHotelPriceActive: argumentMap,
  hotelImages: argumentMap,
  apolloRoomFix: argumentMap,
  setRateList: argumentMap,
  bindContact: argumentMap,
  recoup: argumentMap,
};

export function PlaceActiveService(dubbo: Dubbo): IPlaceActiveService {
  return dubbo.proxyService<IPlaceActiveService>({
    dubboInterface: 'com.oyo.upc.place.client.api.PlaceActiveService',
    methods: PlaceActiveServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
