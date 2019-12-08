import java from 'js-to-java';

export interface ISaleRoomTypeBO {
  saleRoomTypeId?: number;
  saleRoomTypeName?: string;
  roomTypeId?: number;
}

export class SaleRoomTypeBO {
  constructor(params: ISaleRoomTypeBO) {
    this.saleRoomTypeId = params.saleRoomTypeId;
    this.saleRoomTypeName = params.saleRoomTypeName;
    this.roomTypeId = params.roomTypeId;
  }

  saleRoomTypeId?: number;
  saleRoomTypeName?: string;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.roomtype.SaleRoomTypeBO',
      $: {
        saleRoomTypeId: java.Long(this.saleRoomTypeId),
        saleRoomTypeName: java.String(this.saleRoomTypeName),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
