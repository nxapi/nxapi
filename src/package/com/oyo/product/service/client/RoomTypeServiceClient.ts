import { BaseResponse } from './../../../common/response/BaseResponse';
import { SaleRoomTypeBO } from './../../bean/bo/roomtype/SaleRoomTypeBO';
import { RoomTypeBindSellTypeListRequest } from './../../controller/request/roomtype/RoomTypeBindSellTypeListRequest';
import { ResponseCode } from './../../../common/enums/ResponseCode';
import { HotelRoomTypeInfoBO } from './../../bean/bo/roomtype/HotelRoomTypeInfoBO';
import { RoomTypeInfoSaveRequest } from './../../controller/request/roomtype/RoomTypeInfoSaveRequest';
import { CheckHotelRoomTypeRequest } from './../../controller/request/roomtype/CheckHotelRoomTypeRequest';
import { CheckHotelRoomTypeVO } from './../../controller/vo/roomtype/CheckHotelRoomTypeVO';
import { RoomTypeSimpleVO } from './../../controller/vo/roomtype/RoomTypeSimpleVO';
import { RemoteSimpleRateCodeNameVO } from './../../remote/rate/vo/RemoteSimpleRateCodeNameVO';
import { RoomTypeVO } from './../../controller/vo/roomtype/RoomTypeVO';
import { RoomTypeDeleteRequest } from './../../controller/request/roomtype/RoomTypeDeleteRequest';
import { RoomTypeAndRelationVO } from './../../controller/vo/roomtype/RoomTypeAndRelationVO';
import { HotelRoomTypeStatus } from './../../controller/vo/roomtype/HotelRoomTypeStatus';
import { AvailRoomTypeVO } from './../../controller/vo/roomtype/AvailRoomTypeVO';
import { HotelRoomType } from './../../controller/vo/roomtype/HotelRoomType';
import { HotelBindRoomTypeVO } from './../../controller/vo/roomtype/HotelBindRoomTypeVO';
import { RoomTypeRateCodeBindRequest } from './../../controller/request/roomtype/RoomTypeRateCodeBindRequest';
import { RoomTypeRateCodeBatchBindRequest } from './../../controller/request/roomtype/RoomTypeRateCodeBatchBindRequest';
import { RoomTypeBO } from './../../bean/bo/roomtype/RoomTypeBO';
import { RoomTypeNewOldMappingRequest } from './../../controller/request/roomtype/RoomTypeNewOldMappingRequest';
import { RoomTypeNewOldMappingVO } from './../../controller/vo/roomtype/RoomTypeNewOldMappingVO';
import { RoomTypeBindInfoBO } from './../../bean/bo/roomtype/RoomTypeBindInfoBO';
import { HotelRoomQueryRequest } from './../../controller/request/room/HotelRoomQueryRequest';
import { OyoRoomTypeVO } from './../../controller/vo/roomtype/OyoRoomTypeVO';
import { RoomTypeBedInfoDeleteRequest } from './../../controller/request/roomtype/RoomTypeBedInfoDeleteRequest';
import { argumentMap, JavaLong, JavaList, JavaInteger, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IRoomTypeServiceClient {
  getSellRoomTypeList(): TDubboCallResult<BaseResponse<Array<SaleRoomTypeBO>>>;
  saveRoomTypeBindList(
    RoomTypeBindSellTypeListRequest0: RoomTypeBindSellTypeListRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  getRoomTypeInfoByHotelId(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<HotelRoomTypeInfoBO>>>;
  saveRoomTypeInfo(
    RoomTypeInfoSaveRequest0: RoomTypeInfoSaveRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  checkHotelRoomType(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<CheckHotelRoomTypeVO>>>;
  getRoomTypeByIds(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<RoomTypeSimpleVO>>>;
  saveHotelBindRoomTypeList(
    RoomTypeBindSellTypeListRequest0: RoomTypeBindSellTypeListRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  rateCodeList(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<RemoteSimpleRateCodeNameVO>>>;
  getRoomTypeList(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<RoomTypeVO>>>;
  deleteHotelBindRoomType(
    RoomTypeDeleteRequest0: RoomTypeDeleteRequest,
  ): TDubboCallResult<BaseResponse<boolean>>;
  batchRoomTypeBindRateByHotel(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse>;
  getAllRoomTypeAndRelation(): TDubboCallResult<
    BaseResponse<RoomTypeAndRelationVO>
  >;
  batchRoomTypeBindRateByHotelId(
    Long0: JavaLong,
    Long1: JavaLong,
    Long2: JavaLong,
  ): TDubboCallResult<BaseResponse>;
  getRoomTypeWithSaleInfo(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<RoomTypeVO>>;
  getRoomStatusByHotelIds(
    List0: JavaList,
  ): TDubboCallResult<
    BaseResponse<{[name: number]: Array<HotelRoomTypeStatus>}>
  >;
  getAvailRoomType(
    Long0: JavaLong,
    Integer1: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<AvailRoomTypeVO>>>;
  getHotelRoomStatus(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<HotelRoomTypeStatus>>>;
  getRoomTypeBindInfoList(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<HotelBindRoomTypeVO>>;
  roomTypeBindRateCodes(
    RoomTypeRateCodeBindRequest0: RoomTypeRateCodeBindRequest,
  ): TDubboCallResult<BaseResponse>;
  getRoomTypeById(Long0: JavaLong): TDubboCallResult<BaseResponse<RoomTypeVO>>;
  batchRoomTypeBindRateCodes(
    RoomTypeRateCodeBatchBindRequest0: RoomTypeRateCodeBatchBindRequest,
  ): TDubboCallResult<BaseResponse>;
  getRoomTypeByCode(
    String0: JavaString,
  ): TDubboCallResult<BaseResponse<RoomTypeBO>>;
  channelNewOldMapping(
    RoomTypeNewOldMappingRequest0: RoomTypeNewOldMappingRequest,
  ): TDubboCallResult<BaseResponse<RoomTypeNewOldMappingVO>>;
  getRoomTypeBindList(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<RoomTypeBindInfoBO>>>;
  getHotelRooms(
    HotelRoomQueryRequest0: HotelRoomQueryRequest,
  ): TDubboCallResult<BaseResponse>;
  getAllOyoRoomType(): TDubboCallResult<BaseResponse<Array<OyoRoomTypeVO>>>;
  deleteRoomTypeBedInfo(
    RoomTypeBedInfoDeleteRequest0: RoomTypeBedInfoDeleteRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
}

export const RoomTypeServiceClientWrapper = {
  getSellRoomTypeList: argumentMap,
  saveRoomTypeBindList: argumentMap,
  getRoomTypeInfoByHotelId: argumentMap,
  saveRoomTypeInfo: argumentMap,
  checkHotelRoomType: argumentMap,
  getRoomTypeByIds: argumentMap,
  saveHotelBindRoomTypeList: argumentMap,
  rateCodeList: argumentMap,
  getRoomTypeList: argumentMap,
  deleteHotelBindRoomType: argumentMap,
  batchRoomTypeBindRateByHotel: argumentMap,
  getAllRoomTypeAndRelation: argumentMap,
  batchRoomTypeBindRateByHotelId: argumentMap,
  getRoomTypeWithSaleInfo: argumentMap,
  getRoomStatusByHotelIds: argumentMap,
  getAvailRoomType: argumentMap,
  getHotelRoomStatus: argumentMap,
  getRoomTypeBindInfoList: argumentMap,
  roomTypeBindRateCodes: argumentMap,
  getRoomTypeById: argumentMap,
  batchRoomTypeBindRateCodes: argumentMap,
  getRoomTypeByCode: argumentMap,
  channelNewOldMapping: argumentMap,
  getRoomTypeBindList: argumentMap,
  getHotelRooms: argumentMap,
  getAllOyoRoomType: argumentMap,
  deleteRoomTypeBedInfo: argumentMap,
};

export function RoomTypeServiceClient(dubbo: Dubbo): IRoomTypeServiceClient {
  return dubbo.proxyService<IRoomTypeServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.RoomTypeServiceClient',
    methods: RoomTypeServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
