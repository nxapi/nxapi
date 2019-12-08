import java from 'js-to-java';

export interface IHotelRoomInfo {
  roomTypeName?: string;
  greenTotal?: number;
  hotelId?: number;
  hotelName?: string;
  roomTypeId?: number;
}

export class HotelRoomInfo {
  constructor(params: IHotelRoomInfo) {
    this.roomTypeName = params.roomTypeName;
    this.greenTotal = params.greenTotal;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.roomTypeId = params.roomTypeId;
  }

  roomTypeName?: string;
  greenTotal?: number;
  hotelId?: number;
  hotelName?: string;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelRoomInfo',
      $: {
        roomTypeName: java.String(this.roomTypeName),
        greenTotal: java.Integer(this.greenTotal),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
