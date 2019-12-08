import java from 'js-to-java';

export interface IRoomTypeBindSellTypeRequest {
  roomTypeIdOld?: number;
  customSellTypeName?: string;
  sellRoomTypeId?: number;
  roomTypeId?: number;
  oldRoomTypeId?: number;
}

export class RoomTypeBindSellTypeRequest {
  constructor(params: IRoomTypeBindSellTypeRequest) {
    this.roomTypeIdOld = params.roomTypeIdOld;
    this.customSellTypeName = params.customSellTypeName;
    this.sellRoomTypeId = params.sellRoomTypeId;
    this.roomTypeId = params.roomTypeId;
    this.oldRoomTypeId = params.oldRoomTypeId;
  }

  roomTypeIdOld?: number;
  customSellTypeName?: string;
  sellRoomTypeId?: number;
  roomTypeId?: number;
  oldRoomTypeId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeBindSellTypeRequest',
      $: {
        roomTypeIdOld: java.Long(this.roomTypeIdOld),
        customSellTypeName: java.String(this.customSellTypeName),
        sellRoomTypeId: java.Long(this.sellRoomTypeId),
        roomTypeId: java.Long(this.roomTypeId),
        oldRoomTypeId: java.Long(this.oldRoomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
