import java from 'js-to-java';

export interface IRoomSearchRequest {
  roomIds?: string;
  pageSize?: number;
  rateDate?: any;
  hotelId?: number;
  crspCode?: string;
  floor?: string;
  pageNum?: number;
  roomTypeId?: number;
  channelId?: number;
}

export class RoomSearchRequest {
  constructor(params: IRoomSearchRequest) {
    this.roomIds = params.roomIds;
    this.pageSize = params.pageSize;
    this.rateDate = params.rateDate;
    this.hotelId = params.hotelId;
    this.crspCode = params.crspCode;
    this.floor = params.floor;
    this.pageNum = params.pageNum;
    this.roomTypeId = params.roomTypeId;
    this.channelId = params.channelId;
  }

  roomIds?: string;
  pageSize?: number;
  rateDate?: any;
  hotelId?: number;
  crspCode?: string;
  floor?: string;
  pageNum?: number;
  roomTypeId?: number;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.room.RoomSearchRequest',
      $: {
        roomIds: java.String(this.roomIds),
        pageSize: java.Integer(this.pageSize),
        rateDate: this.rateDate,
        hotelId: java.Long(this.hotelId),
        crspCode: java.String(this.crspCode),
        floor: java.String(this.floor),
        pageNum: java.Integer(this.pageNum),
        roomTypeId: java.Long(this.roomTypeId),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
