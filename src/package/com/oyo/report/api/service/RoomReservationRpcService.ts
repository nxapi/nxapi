import { QueryHotelHeroRoomReservationRequest } from './../request/QueryHotelHeroRoomReservationRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { BasePageResponse } from './../response/BasePageResponse';
import { RoomReservationDTO } from './../response/RoomReservationDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IRoomReservationRpcService {
  getRoomReservationListWithGuestPhone(
    QueryHotelHeroRoomReservationRequest0: QueryHotelHeroRoomReservationRequest,
  ): TDubboCallResult<BaseResponse<BasePageResponse<RoomReservationDTO>>>;
}

export const RoomReservationRpcServiceWrapper = {
  getRoomReservationListWithGuestPhone: argumentMap,
};

export function RoomReservationRpcService(
  dubbo: Dubbo,
): IRoomReservationRpcService {
  return dubbo.proxyService<IRoomReservationRpcService>({
    dubboInterface: 'com.oyo.report.api.service.RoomReservationRpcService',
    methods: RoomReservationRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
