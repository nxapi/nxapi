import java from 'js-to-java';

export interface IRoomTypeRateCodeBindRequest {
  hotelId?: number;
  rateCodeIds?: Array<number>;
  operatorId?: number;
  roomTypeId?: number;
}

export class RoomTypeRateCodeBindRequest {
  constructor(params: IRoomTypeRateCodeBindRequest) {
    this.hotelId = params.hotelId;
    this.rateCodeIds = params.rateCodeIds;
    this.operatorId = params.operatorId;
    this.roomTypeId = params.roomTypeId;
  }

  hotelId?: number;
  rateCodeIds?: Array<number>;
  operatorId?: number;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeRateCodeBindRequest',
      $: {
        hotelId: java.Long(this.hotelId),
        rateCodeIds: this.rateCodeIds
          ? java.List(
              (this.rateCodeIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        operatorId: java.Integer(this.operatorId),
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
