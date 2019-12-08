import { HotelByIdListAndNameRequest } from './../../controller/request/hotel/HotelByIdListAndNameRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { RoomNumAndFloorVO } from './../../controller/vo/room/RoomNumAndFloorVO';
import { RoomListByRoomTypeVO } from './../../controller/vo/room/RoomListByRoomTypeVO';
import { RoomSearchRequest } from './../../controller/request/room/RoomSearchRequest';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { RoomVO } from './../../controller/vo/room/RoomVO';
import { RoomCountVO } from './../../controller/vo/room/RoomCountVO';
import { ExchangeRoomsRequest } from './../../controller/request/room/ExchangeRoomsRequest';
import { ResponseCode } from './../../../common/enums/ResponseCode';
import { RoomParam } from './../../controller/vo/RoomParam';
import { RoomResponse } from './../../controller/vo/RoomResponse';
import { BaseRoomVO } from './../../controller/vo/room/BaseRoomVO';
import { RoomVoWithRoomStatus } from './../../controller/vo/room/RoomVoWithRoomStatus';
import { RoomRequest } from './../../controller/request/room/RoomRequest';
import { RoomStatusBatchUpdateRequest } from './../../controller/request/room/RoomStatusBatchUpdateRequest';
import { RoomBO } from './../../bean/bo/room/RoomBO';
import { RoomTypeAndFloorVO } from './../../controller/vo/room/RoomTypeAndFloorVO';
import { SaveRoomRequest } from './../../controller/request/room/SaveRoomRequest';
import { RoomStatusUpdateRequest } from './../../controller/request/room/RoomStatusUpdateRequest';
import { CleanRoomVO } from './../../controller/vo/room/CleanRoomVO';
import { StopSellReasonBO } from './../../bean/bo/room/StopSellReasonBO';
import { RoomNumVO } from './../../controller/vo/room/RoomNumVO';
import { argumentMap, JavaLong, JavaList, JavaString, JavaInteger } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IRoomServiceClient {
  getFloorAndRoomNum(
    HotelByIdListAndNameRequest0: HotelByIdListAndNameRequest,
  ): TDubboCallResult<BaseResponse<Array<RoomNumAndFloorVO>>>;
  getRoomListByHotelAndRoomType(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<RoomListByRoomTypeVO>>;
  searchRoom(
    RoomSearchRequest0: RoomSearchRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<RoomVO>>>;
  getSaleableRoomCount(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<RoomCountVO>>>;
  exchangeRoom(
    ExchangeRoomsRequest0: ExchangeRoomsRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  getRoomNameByHotelIdAndOrderId(
    List0: JavaList,
  ): TDubboCallResult<BaseResponse<Array<RoomResponse>>>;
  getRoomsByHotelId(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<BaseRoomVO>>>;
  getRoomStatusList(
    Long0: JavaLong,
    String1: JavaString,
    Long2: JavaLong,
    Integer3: JavaInteger,
    Integer4: JavaInteger,
  ): TDubboCallResult<BaseResponse<Array<RoomVoWithRoomStatus>>>;
  deleteRoom(RoomRequest0: RoomRequest): TDubboCallResult<BaseResponse>;
  batchUpdateRoomStatus(
    RoomStatusBatchUpdateRequest0: RoomStatusBatchUpdateRequest,
  ): TDubboCallResult<BaseResponse<ResponseCode>>;
  getRoomWithRoomTypeByHotelId(
    Long0: JavaLong,
    List1: JavaList,
  ): TDubboCallResult<BaseResponse<Array<RoomBO>>>;
  searchRoomStatus(
    RoomSearchRequest0: RoomSearchRequest,
  ): TDubboCallResult<BaseResponse<PagedResponse<RoomVoWithRoomStatus>>>;
  getRoomTypeAndFloor(
    RoomSearchRequest0: RoomSearchRequest,
  ): TDubboCallResult<BaseResponse<Array<RoomTypeAndFloorVO>>>;
  getRoom(Long0: JavaLong): TDubboCallResult<BaseResponse<RoomBO>>;
  saveRoomListByHotelAndRoomType(
    SaveRoomRequest0: SaveRoomRequest,
  ): TDubboCallResult<BaseResponse>;
  addRoom(RoomRequest0: RoomRequest): TDubboCallResult<BaseResponse>;
  getFloors(Long0: JavaLong): TDubboCallResult<BaseResponse<Array<string>>>;
  updateStatus(
    RoomStatusUpdateRequest0: RoomStatusUpdateRequest,
  ): TDubboCallResult<BaseResponse<number>>;
  inventoryHandle(List0: JavaList): TDubboCallResult<BaseResponse>;
  getCleanRoom(
    Long0: JavaLong,
    Long1: JavaLong,
  ): TDubboCallResult<BaseResponse<Array<CleanRoomVO>>>;
  stopSellRoom(): TDubboCallResult<BaseResponse<Array<StopSellReasonBO>>>;
  getTotalAndStayingRoomsByHotelId(
    Long0: JavaLong,
  ): TDubboCallResult<BaseResponse<RoomNumVO>>;
}

export const RoomServiceClientWrapper = {
  getFloorAndRoomNum: argumentMap,
  getRoomListByHotelAndRoomType: argumentMap,
  searchRoom: argumentMap,
  getSaleableRoomCount: argumentMap,
  exchangeRoom: argumentMap,
  getRoomNameByHotelIdAndOrderId: argumentMap,
  getRoomsByHotelId: argumentMap,
  getRoomStatusList: argumentMap,
  deleteRoom: argumentMap,
  batchUpdateRoomStatus: argumentMap,
  getRoomWithRoomTypeByHotelId: argumentMap,
  searchRoomStatus: argumentMap,
  getRoomTypeAndFloor: argumentMap,
  getRoom: argumentMap,
  saveRoomListByHotelAndRoomType: argumentMap,
  addRoom: argumentMap,
  getFloors: argumentMap,
  updateStatus: argumentMap,
  inventoryHandle: argumentMap,
  getCleanRoom: argumentMap,
  stopSellRoom: argumentMap,
  getTotalAndStayingRoomsByHotelId: argumentMap,
};

export function RoomServiceClient(dubbo: Dubbo): IRoomServiceClient {
  return dubbo.proxyService<IRoomServiceClient>({
    dubboInterface: 'com.oyo.product.service.client.RoomServiceClient',
    methods: RoomServiceClientWrapper,
  });
}

//generate by interpret-cli dubbo2.js
