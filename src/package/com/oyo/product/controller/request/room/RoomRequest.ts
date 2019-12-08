import java from 'js-to-java';

export interface IRoomRequest {
  apolloRoomStatus?: number;
  batchNo?: string;
  roomNo?: string;
  size?: string;
  crsId?: string;
  hotelId?: number;
  floor?: string;
  operatorId?: number;
  roomTypeId?: number;
  operator?: string;
}

export class RoomRequest {
  constructor(params: IRoomRequest) {
    this.apolloRoomStatus = params.apolloRoomStatus;
    this.batchNo = params.batchNo;
    this.roomNo = params.roomNo;
    this.size = params.size;
    this.crsId = params.crsId;
    this.hotelId = params.hotelId;
    this.floor = params.floor;
    this.operatorId = params.operatorId;
    this.roomTypeId = params.roomTypeId;
    this.operator = params.operator;
  }

  apolloRoomStatus?: number;
  batchNo?: string;
  roomNo?: string;
  size?: string;
  crsId?: string;
  hotelId?: number;
  floor?: string;
  operatorId?: number;
  roomTypeId?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.room.RoomRequest',
      $: {
        apolloRoomStatus: java.Integer(this.apolloRoomStatus),
        batchNo: java.String(this.batchNo),
        roomNo: java.String(this.roomNo),
        size: java.String(this.size),
        crsId: java.String(this.crsId),
        hotelId: java.Long(this.hotelId),
        floor: java.String(this.floor),
        operatorId: java.Long(this.operatorId),
        roomTypeId: java.Long(this.roomTypeId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
