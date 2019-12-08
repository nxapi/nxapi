import java from 'js-to-java';

export interface ICleanRoomVO {
  roomNum?: string;
  roomId?: number;
}

export class CleanRoomVO {
  constructor(params: ICleanRoomVO) {
    this.roomNum = params.roomNum;
    this.roomId = params.roomId;
  }

  roomNum?: string;
  roomId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.CleanRoomVO',
      $: {roomNum: java.String(this.roomNum), roomId: java.Long(this.roomId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
