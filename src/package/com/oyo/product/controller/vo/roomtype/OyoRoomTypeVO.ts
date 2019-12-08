import java from 'js-to-java';

export interface IOyoRoomTypeVO {
  roomTypeCode?: string;
  roomTypeName?: string;
  roomTypeId?: number;
}

export class OyoRoomTypeVO {
  constructor(params: IOyoRoomTypeVO) {
    this.roomTypeCode = params.roomTypeCode;
    this.roomTypeName = params.roomTypeName;
    this.roomTypeId = params.roomTypeId;
  }

  roomTypeCode?: string;
  roomTypeName?: string;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.OyoRoomTypeVO',
      $: {
        roomTypeCode: java.String(this.roomTypeCode),
        roomTypeName: java.String(this.roomTypeName),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
