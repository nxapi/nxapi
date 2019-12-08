import java from 'js-to-java';

export interface IRoomTypeRateCodeRefDTO {
  rateCodeIds?: Array<number>;
  roomTypeId?: number;
}

export class RoomTypeRateCodeRefDTO {
  constructor(params: IRoomTypeRateCodeRefDTO) {
    this.rateCodeIds = params.rateCodeIds;
    this.roomTypeId = params.roomTypeId;
  }

  rateCodeIds?: Array<number>;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.RoomTypeRateCodeRefDTO',
      $: {
        rateCodeIds: this.rateCodeIds
          ? java.List(
              (this.rateCodeIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
