import { RoomTypeRateCodeBatchBindChildRequest } from './RoomTypeRateCodeBatchBindChildRequest';
import java from 'js-to-java';

export interface IRoomTypeRateCodeBatchBindRequest {
  roomTypeRateCodes?: Array<RoomTypeRateCodeBatchBindChildRequest>;
  hotelId?: number;
  operatorId?: number;
}

export class RoomTypeRateCodeBatchBindRequest {
  constructor(params: IRoomTypeRateCodeBatchBindRequest) {
    this.roomTypeRateCodes = params.roomTypeRateCodes;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
  }

  roomTypeRateCodes?: Array<RoomTypeRateCodeBatchBindChildRequest>;
  hotelId?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeRateCodeBatchBindRequest',
      $: {
        roomTypeRateCodes: this.roomTypeRateCodes
          ? java.List(
              (this.roomTypeRateCodes || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        operatorId: java.Integer(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
