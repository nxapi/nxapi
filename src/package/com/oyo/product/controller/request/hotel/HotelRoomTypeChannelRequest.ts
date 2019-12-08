import java from 'js-to-java';

export interface IHotelRoomTypeChannelRequest {
  roomTypeIdList?: Array<number>;
  hotelId?: number;
  channelId?: number;
}

export class HotelRoomTypeChannelRequest {
  constructor(params: IHotelRoomTypeChannelRequest) {
    this.roomTypeIdList = params.roomTypeIdList;
    this.hotelId = params.hotelId;
    this.channelId = params.channelId;
  }

  roomTypeIdList?: Array<number>;
  hotelId?: number;
  channelId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.HotelRoomTypeChannelRequest',
      $: {
        roomTypeIdList: this.roomTypeIdList
          ? java.List(
              (this.roomTypeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
