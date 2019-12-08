import java from 'js-to-java';

export interface IRoomTypeInventoryDTO {
  blockCount?: number;
  availabeCount?: number;
  totalCount?: number;
  roomTypeId?: number;
}

export class RoomTypeInventoryDTO {
  constructor(params: IRoomTypeInventoryDTO) {
    this.blockCount = params.blockCount;
    this.availabeCount = params.availabeCount;
    this.totalCount = params.totalCount;
    this.roomTypeId = params.roomTypeId;
  }

  blockCount?: number;
  availabeCount?: number;
  totalCount?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.RoomTypeInventoryDTO',
      $: {
        blockCount: java.Integer(this.blockCount),
        availabeCount: java.Integer(this.availabeCount),
        totalCount: java.Integer(this.totalCount),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
