import java from 'js-to-java';

export interface IRoomDateInfo {
  roomNum?: string;
  choosable?: number;
  id?: number;
}

export class RoomDateInfo {
  constructor(params: IRoomDateInfo) {
    this.roomNum = params.roomNum;
    this.choosable = params.choosable;
    this.id = params.id;
  }

  roomNum?: string;
  choosable?: number;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomDateInfo',
      $: {
        roomNum: java.String(this.roomNum),
        choosable: java.Integer(this.choosable),
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
