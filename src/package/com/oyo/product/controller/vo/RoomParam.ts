import java from 'js-to-java';

export interface IRoomParam {
  roomNo?: string;
  hotelId?: number;
}

export class RoomParam {
  constructor(params: IRoomParam) {
    this.roomNo = params.roomNo;
    this.hotelId = params.hotelId;
  }

  roomNo?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.RoomParam',
      $: {roomNo: java.String(this.roomNo), hotelId: java.Long(this.hotelId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
