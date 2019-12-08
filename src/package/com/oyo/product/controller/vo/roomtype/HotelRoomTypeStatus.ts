import java from 'js-to-java';

export interface IHotelRoomTypeStatus {
  roomTypeName?: string;
  greenTotal?: number;
  hotelId?: number;
  roomTypeId?: number;
}

export class HotelRoomTypeStatus {
  constructor(params: IHotelRoomTypeStatus) {
    this.roomTypeName = params.roomTypeName;
    this.greenTotal = params.greenTotal;
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
  }

  roomTypeName?: string;
  greenTotal?: number;
  hotelId?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.HotelRoomTypeStatus',
      $: {
        roomTypeName: java.String(this.roomTypeName),
        greenTotal: java.Integer(this.greenTotal),
        hotelId: java.Long(this.hotelId),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
