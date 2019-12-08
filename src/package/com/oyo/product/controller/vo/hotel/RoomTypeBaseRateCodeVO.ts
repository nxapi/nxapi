import { RateCodeBO } from './../../../bean/bo/channel/RateCodeBO';
import java from 'js-to-java';

export interface IRoomTypeBaseRateCodeVO {
  roomTypeName?: string;
  rateCodes?: Array<RateCodeBO>;
  roomTypeId?: number;
}

export class RoomTypeBaseRateCodeVO {
  constructor(params: IRoomTypeBaseRateCodeVO) {
    this.roomTypeName = params.roomTypeName;
    this.rateCodes = params.rateCodes;
    this.roomTypeId = params.roomTypeId;
  }

  roomTypeName?: string;
  rateCodes?: Array<RateCodeBO>;
  roomTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.RoomTypeBaseRateCodeVO',
      $: {
        roomTypeName: java.String(this.roomTypeName),
        rateCodes: this.rateCodes
          ? java.List(
              (this.rateCodes || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        roomTypeId: java.Long(this.roomTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
