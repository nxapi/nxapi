import java from 'js-to-java';

export interface IHotelRoomQueryRequest {
  hotelId?: number;
  apolloStatus?: number;
  floor?: number;
}

export class HotelRoomQueryRequest {
  constructor(params: IHotelRoomQueryRequest) {
    this.hotelId = params.hotelId;
    this.apolloStatus = params.apolloStatus;
    this.floor = params.floor;
  }

  hotelId?: number;
  apolloStatus?: number;
  floor?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.room.HotelRoomQueryRequest',
      $: {
        hotelId: java.Long(this.hotelId),
        apolloStatus: java.Integer(this.apolloStatus),
        floor: java.Integer(this.floor),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
