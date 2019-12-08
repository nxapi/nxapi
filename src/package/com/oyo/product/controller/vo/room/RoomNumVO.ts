import java from 'js-to-java';

export interface IRoomNumVO {
  stayingRoomNum?: number;
  totalRoomNum?: number;
}

export class RoomNumVO {
  constructor(params: IRoomNumVO) {
    this.stayingRoomNum = params.stayingRoomNum;
    this.totalRoomNum = params.totalRoomNum;
  }

  stayingRoomNum?: number;
  totalRoomNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomNumVO',
      $: {
        stayingRoomNum: java.Integer(this.stayingRoomNum),
        totalRoomNum: java.Integer(this.totalRoomNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
