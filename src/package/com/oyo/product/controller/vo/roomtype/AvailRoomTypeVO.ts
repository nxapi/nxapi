import java from 'js-to-java';

export interface IAvailRoomTypeVO {
  saleRoomTypeId?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  roomTypeId?: number;
}

export class AvailRoomTypeVO {
  constructor(params: IAvailRoomTypeVO) {
    this.saleRoomTypeId = params.saleRoomTypeId;
    this.saleRoomTypeName = params.saleRoomTypeName;
    this.roomTypeName = params.roomTypeName;
    this.roomTypeId = params.roomTypeId;
  }

  saleRoomTypeId?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.AvailRoomTypeVO',
      $: {
        saleRoomTypeId: java.Long(this.saleRoomTypeId),
        saleRoomTypeName: java.String(this.saleRoomTypeName),
        roomTypeName: java.String(this.roomTypeName),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
