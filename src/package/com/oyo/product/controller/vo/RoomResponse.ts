import java from 'js-to-java';

export interface IRoomResponse {
  roomNo?: string;
  roomName?: string;
}

export class RoomResponse {
  constructor(params: IRoomResponse) {
    this.roomNo = params.roomNo;
    this.roomName = params.roomName;
  }

  roomNo?: string;
  roomName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.RoomResponse',
      $: {
        roomNo: java.String(this.roomNo),
        roomName: java.String(this.roomName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
