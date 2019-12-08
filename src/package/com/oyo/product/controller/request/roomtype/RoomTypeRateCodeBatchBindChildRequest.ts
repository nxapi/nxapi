import java from 'js-to-java';

export interface IRoomTypeRateCodeBatchBindChildRequest {
  rateCodeIds?: Array<number>;
  roomTypeId?: number;
}

export class RoomTypeRateCodeBatchBindChildRequest {
  constructor(params: IRoomTypeRateCodeBatchBindChildRequest) {
    this.rateCodeIds = params.rateCodeIds;
    this.roomTypeId = params.roomTypeId;
  }

  rateCodeIds?: Array<number>;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeRateCodeBatchBindChildRequest',
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
