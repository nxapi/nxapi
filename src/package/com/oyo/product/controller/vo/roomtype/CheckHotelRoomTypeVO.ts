import java from 'js-to-java';

export interface ICheckHotelRoomTypeVO {
  isSupport?: string;
  hotelId?: number;
  roomTypeId?: number;
}

export class CheckHotelRoomTypeVO {
  constructor(params: ICheckHotelRoomTypeVO) {
    this.isSupport = params.isSupport;
    this.hotelId = params.hotelId;
    this.roomTypeId = params.roomTypeId;
  }

  isSupport?: string;
  hotelId?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.CheckHotelRoomTypeVO',
      $: {
        isSupport: java.String(this.isSupport),
        hotelId: java.Long(this.hotelId),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
