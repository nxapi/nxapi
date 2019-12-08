import { RoomApolloStatusUpdateRequest } from './../../controller/request/room/RoomApolloStatusUpdateRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { ApolloDirectHotelReq } from './../../controller/vo/apollo/ApolloDirectHotelReq';
import { ApolloAmenityPostRequest } from './../../controller/request/amenity/ApolloAmenityPostRequest';
import { HotelApolloCustomVO } from './../../controller/vo/hotel/HotelApolloCustomVO';
import { ApolloHotelImagesVO } from './../../controller/vo/apollo/ApolloHotelImagesVO';
import { ApolloAutoActiveReq } from './../../controller/vo/apollo/ApolloAutoActiveReq';
import { argumentMap, JavaString, JavaLong, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IApolloServiceClient {
  roomStatus(
    RoomApolloStatusUpdateRequest0: RoomApolloStatusUpdateRequest,
  ): TDubboCallResult<BaseResponse>;
  apolloDataRepair(
    String0: JavaString,
    String1: JavaString,
    String2: JavaString,
    String3: JavaString,
  ): TDubboCallResult<BaseResponse>;
  apolloDirectHotelAutoActive(
    ApolloDirectHotelReq0: ApolloDirectHotelReq,
  ): TDubboCallResult<BaseResponse>;
  amenity(
    ApolloAmenityPostRequest0: ApolloAmenityPostRequest,
  ): TDubboCallResult<BaseResponse<number>>;
  searchHotelInfo(
    Long0: JavaLong,
    String1: JavaString,
    String2: JavaString,
  ): TDubboCallResult<BaseResponse<Array<HotelApolloCustomVO>>>;
  hotelImages(
    ApolloHotelImagesVO0: ApolloHotelImagesVO,
  ): TDubboCallResult<BaseResponse>;
  newOyoId(
    Integer0: JavaInteger,
    Integer1: JavaInteger,
    String2: JavaString,
  ): TDubboCallResult<BaseResponse<string>>;
  apolloHotelAutoActive(
    ApolloAutoActiveReq0: ApolloAutoActiveReq,
  ): TDubboCallResult<BaseResponse<string>>;
}

export const ApolloServiceClientWrapper = {
  roomStatus: argumentMap,
  apolloDataRepair: argumentMap,
  apolloDirectHotelAutoActive: argumentMap,
  amenity: argumentMap,
  searchHotelInfo: argumentMap,
  hotelImages: argumentMap,
  newOyoId: argumentMap,
  apolloHotelAutoActive: argumentMap,
};

export function ApolloServiceClient(dubbo: Dubbo): IApolloServiceClient {
  return dubbo.proxyService<IApolloServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.ApolloServiceClient',
    methods: ApolloServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
