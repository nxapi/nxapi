import java from 'js-to-java';

export interface IRoomTypeNewOldMappingVO {
  oldRoomTypeName?: string;
  newRoomTypeId?: number;
  newRoomTypeName?: string;
  oldRoomTypeId?: number;
}

export class RoomTypeNewOldMappingVO {
  constructor(params: IRoomTypeNewOldMappingVO) {
    this.oldRoomTypeName = params.oldRoomTypeName;
    this.newRoomTypeId = params.newRoomTypeId;
    this.newRoomTypeName = params.newRoomTypeName;
    this.oldRoomTypeId = params.oldRoomTypeId;
  }

  oldRoomTypeName?: string;
  newRoomTypeId?: number;
  newRoomTypeName?: string;
  oldRoomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.RoomTypeNewOldMappingVO',
      $: {
        oldRoomTypeName: java.String(this.oldRoomTypeName),
        newRoomTypeId: java.Long(this.newRoomTypeId),
        newRoomTypeName: java.String(this.newRoomTypeName),
        oldRoomTypeId: java.Long(this.oldRoomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
