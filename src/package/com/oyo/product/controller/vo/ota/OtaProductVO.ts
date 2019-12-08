import java from 'js-to-java';

export interface IOtaProductVO {
  roomTypeCode?: string;
  rate?: {value: string};
  rateCodeId?: number;
  roomTypeName?: string;
  hotelId?: number;
  inventory?: number;
  rateCodeName?: string;
  channelId?: number;
  roomTypeId?: number;
  stayDate?: string;
  checkinType?: number;
}

export class OtaProductVO {
  constructor(params: IOtaProductVO) {
    this.roomTypeCode = params.roomTypeCode;
    this.rate = params.rate;
    this.rateCodeId = params.rateCodeId;
    this.roomTypeName = params.roomTypeName;
    this.hotelId = params.hotelId;
    this.inventory = params.inventory;
    this.rateCodeName = params.rateCodeName;
    this.channelId = params.channelId;
    this.roomTypeId = params.roomTypeId;
    this.stayDate = params.stayDate;
    this.checkinType = params.checkinType;
  }

  roomTypeCode?: string;
  rate?: {value: string};
  rateCodeId?: number;
  roomTypeName?: string;
  hotelId?: number;
  inventory?: number;
  rateCodeName?: string;
  channelId?: number;
  roomTypeId?: number;
  stayDate?: string;
  checkinType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.ota.OtaProductVO',
      $: {
        roomTypeCode: java.String(this.roomTypeCode),
        rate: this.rate ? java.BigDecimal(this.rate.value) : null,
        rateCodeId: java.Long(this.rateCodeId),
        roomTypeName: java.String(this.roomTypeName),
        hotelId: java.Long(this.hotelId),
        inventory: java.Integer(this.inventory),
        rateCodeName: java.String(this.rateCodeName),
        channelId: java.Long(this.channelId),
        roomTypeId: java.Long(this.roomTypeId),
        stayDate: java.String(this.stayDate),
        checkinType: java.Integer(this.checkinType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
