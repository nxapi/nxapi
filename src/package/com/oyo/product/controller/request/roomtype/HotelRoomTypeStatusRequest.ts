import { ChannelRoomTypeStatusRequest } from './ChannelRoomTypeStatusRequest';
import java from 'js-to-java';

export interface IHotelRoomTypeStatusRequest {
  hotelId?: number;
  operatorId?: number;
  operatorName?: string;
  roomTypeStatusRequestList?: Array<ChannelRoomTypeStatusRequest>;
}

export class HotelRoomTypeStatusRequest {
  constructor(params: IHotelRoomTypeStatusRequest) {
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
    this.operatorName = params.operatorName;
    this.roomTypeStatusRequestList = params.roomTypeStatusRequestList;
  }

  hotelId?: number;
  operatorId?: number;
  operatorName?: string;
  roomTypeStatusRequestList?: Array<ChannelRoomTypeStatusRequest>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.HotelRoomTypeStatusRequest',
      $: {
        hotelId: java.Long(this.hotelId),
        operatorId: java.Long(this.operatorId),
        operatorName: java.String(this.operatorName),
        roomTypeStatusRequestList: this.roomTypeStatusRequestList
          ? java.List(
              (this.roomTypeStatusRequestList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
