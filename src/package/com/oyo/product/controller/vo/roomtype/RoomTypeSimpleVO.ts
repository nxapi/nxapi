import java from 'js-to-java';

export interface IRoomTypeSimpleVO {
  roomTypeName?: string;
  roomTypeId?: number;
}

export class RoomTypeSimpleVO {
  constructor(params: IRoomTypeSimpleVO) {
    this.roomTypeName = params.roomTypeName;
    this.roomTypeId = params.roomTypeId;
  }

  roomTypeName?: string;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.RoomTypeSimpleVO',
      $: {
        roomTypeName: java.String(this.roomTypeName),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
