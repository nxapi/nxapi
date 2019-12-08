import java from 'js-to-java';

export interface IRoomVoWithRoomStatus {
  roomNo?: string;
  isDeleted?: boolean;
  createTime?: Date;
  cleanFlag?: number;
  roomTypeName?: string;
  updateTime?: Date;
  hotelId?: number;
  id?: number;
  floor?: string;
  listRate?: number;
  roomTypeId?: number;
  status?: number;
}

export class RoomVoWithRoomStatus {
  constructor(params: IRoomVoWithRoomStatus) {
    this.roomNo = params.roomNo;
    this.isDeleted = params.isDeleted;
    this.createTime = params.createTime;
    this.cleanFlag = params.cleanFlag;
    this.roomTypeName = params.roomTypeName;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.id = params.id;
    this.floor = params.floor;
    this.listRate = params.listRate;
    this.roomTypeId = params.roomTypeId;
    this.status = params.status;
  }

  roomNo?: string;
  isDeleted?: boolean;
  createTime?: Date;
  cleanFlag?: number;
  roomTypeName?: string;
  updateTime?: Date;
  hotelId?: number;
  id?: number;
  floor?: string;
  listRate?: number;
  roomTypeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomVoWithRoomStatus',
      $: {
        roomNo: java.String(this.roomNo),
        isDeleted: java.Boolean(this.isDeleted),
        createTime: this.createTime,
        cleanFlag: java.Integer(this.cleanFlag),
        roomTypeName: java.String(this.roomTypeName),
        updateTime: this.updateTime,
        hotelId: java.Long(this.hotelId),
        id: java.Long(this.id),
        floor: java.String(this.floor),
        listRate: java.Double(this.listRate),
        roomTypeId: java.Long(this.roomTypeId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
