import java from 'js-to-java';

export interface IRoomCountVO {
  count?: number;
  hotelId?: number;
}

export class RoomCountVO {
  constructor(params: IRoomCountVO) {
    this.count = params.count;
    this.hotelId = params.hotelId;
  }

  count?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomCountVO',
      $: {count: java.Integer(this.count), hotelId: java.Long(this.hotelId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
