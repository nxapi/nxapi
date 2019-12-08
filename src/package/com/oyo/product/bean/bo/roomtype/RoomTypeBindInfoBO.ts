import java from 'js-to-java';

export interface IRoomTypeBindInfoBO {
  roomCount?: number;
  oldRoomTypeName?: string;
  roomTypeCode?: string;
  saleRoomTypeId?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  deletable?: number;
  totalCount?: number;
  roomTypeId?: number;
  oldRoomTypeId?: number;
}

export class RoomTypeBindInfoBO {
  constructor(params: IRoomTypeBindInfoBO) {
    this.roomCount = params.roomCount;
    this.oldRoomTypeName = params.oldRoomTypeName;
    this.roomTypeCode = params.roomTypeCode;
    this.saleRoomTypeId = params.saleRoomTypeId;
    this.saleRoomTypeName = params.saleRoomTypeName;
    this.roomTypeName = params.roomTypeName;
    this.deletable = params.deletable;
    this.totalCount = params.totalCount;
    this.roomTypeId = params.roomTypeId;
    this.oldRoomTypeId = params.oldRoomTypeId;
  }

  roomCount?: number;
  oldRoomTypeName?: string;
  roomTypeCode?: string;
  saleRoomTypeId?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  deletable?: number;
  totalCount?: number;
  roomTypeId?: number;
  oldRoomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.roomtype.RoomTypeBindInfoBO',
      $: {
        roomCount: java.Integer(this.roomCount),
        oldRoomTypeName: java.String(this.oldRoomTypeName),
        roomTypeCode: java.String(this.roomTypeCode),
        saleRoomTypeId: java.Long(this.saleRoomTypeId),
        saleRoomTypeName: java.String(this.saleRoomTypeName),
        roomTypeName: java.String(this.roomTypeName),
        deletable: java.Integer(this.deletable),
        totalCount: java.Integer(this.totalCount),
        roomTypeId: java.Long(this.roomTypeId),
        oldRoomTypeId: java.Long(this.oldRoomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
