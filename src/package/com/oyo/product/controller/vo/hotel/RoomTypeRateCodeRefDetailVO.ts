import { RateCodeVO } from './RateCodeVO';
import java from 'js-to-java';

export interface IRoomTypeRateCodeRefDetailVO {
  roomTypeName?: string;
  roomTypeId?: number;
  rateCodeList?: Array<RateCodeVO>;
}

export class RoomTypeRateCodeRefDetailVO {
  constructor(params: IRoomTypeRateCodeRefDetailVO) {
    this.roomTypeName = params.roomTypeName;
    this.roomTypeId = params.roomTypeId;
    this.rateCodeList = params.rateCodeList;
  }

  roomTypeName?: string;
  roomTypeId?: number;
  rateCodeList?: Array<RateCodeVO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.RoomTypeRateCodeRefDetailVO',
      $: {
        roomTypeName: java.String(this.roomTypeName),
        roomTypeId: java.Long(this.roomTypeId),
        rateCodeList: this.rateCodeList
          ? java.List(
              (this.rateCodeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
