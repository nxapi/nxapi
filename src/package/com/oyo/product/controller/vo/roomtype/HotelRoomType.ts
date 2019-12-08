import java from 'js-to-java';

export interface IHotelRoomType {
  hotelId?: number;
  roomTypeId?: number;
}

export class HotelRoomType {
  constructor(params: IHotelRoomType) {
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
  }

  hotelId?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.HotelRoomType',
      $: {
        hotelId: java.Long(this.hotelId),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
