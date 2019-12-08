import java from 'js-to-java';

export interface IRoomTypeAndFloorVO {
  roomNo?: string;
  roomTypeName?: string;
  floor?: string;
  roomId?: number;
  roomTypeId?: number;
}

export class RoomTypeAndFloorVO {
  constructor(params: IRoomTypeAndFloorVO) {
    this.roomNo = params.roomNo;
    this.roomTypeName = params.roomTypeName;
    this.floor = params.floor;
    this.roomId = params.roomId;
    this.roomTypeId = params.roomTypeId;
  }

  roomNo?: string;
  roomTypeName?: string;
  floor?: string;
  roomId?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomTypeAndFloorVO',
      $: {
        roomNo: java.String(this.roomNo),
        roomTypeName: java.String(this.roomTypeName),
        floor: java.String(this.floor),
        roomId: java.Long(this.roomId),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
