import java from 'js-to-java';

export interface IBaseRoomVO {
  roomNo?: string;
  id?: number;
  hotelId?: number;
  floor?: string;
  roomTypeId?: number;
  oldRoomTypeId?: number;
}

export class BaseRoomVO {
  constructor(params: IBaseRoomVO) {
    this.roomNo = params.roomNo;
    this.id = params.id;
    this.hotelId = params.hotelId;
    this.floor = params.floor;
    this.roomTypeId = params.roomTypeId;
    this.oldRoomTypeId = params.oldRoomTypeId;
  }

  roomNo?: string;
  id?: number;
  hotelId?: number;
  floor?: string;
  roomTypeId?: number;
  oldRoomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.room.BaseRoomVO',
      $: {
        roomNo: java.String(this.roomNo),
        id: java.Long(this.id),
        hotelId: java.Long(this.hotelId),
        floor: java.String(this.floor),
        roomTypeId: java.Long(this.roomTypeId),
        oldRoomTypeId: java.Long(this.oldRoomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
