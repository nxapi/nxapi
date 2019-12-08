import java from 'js-to-java';

export interface IRoomVO {
  roomNo?: string;
  roomTypeName?: string;
  id?: number;
  hotelId?: number;
  floor?: string;
  listRate?: number;
  roomTypeId?: number;
}

export class RoomVO {
  constructor(params: IRoomVO) {
    this.roomNo = params.roomNo;
    this.roomTypeName = params.roomTypeName;
    this.id = params.id;
    this.hotelId = params.hotelId;
    this.floor = params.floor;
    this.listRate = params.listRate;
    this.roomTypeId = params.roomTypeId;
  }

  roomNo?: string;
  roomTypeName?: string;
  id?: number;
  hotelId?: number;
  floor?: string;
  listRate?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.RoomVO',
      $: {
        roomNo: java.String(this.roomNo),
        roomTypeName: java.String(this.roomTypeName),
        id: java.Long(this.id),
        hotelId: java.Long(this.hotelId),
        floor: java.String(this.floor),
        listRate: java.Double(this.listRate),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
