import java from 'js-to-java';

export interface IDailyTotalChargeRequest {
  roomNum?: number;
  checkOutDate?: Date;
  rateCodeId?: number;
  hotelId?: number;
  checkInDate?: Date;
  roomTypeId?: number;
  channelId?: number;
}

export class DailyTotalChargeRequest {
  constructor(params: IDailyTotalChargeRequest) {
    this.roomNum = params.roomNum;
    this.checkOutDate = params.checkOutDate;
    this.rateCodeId = params.rateCodeId;
    this.hotelId = params.hotelId;
    this.checkInDate = params.checkInDate;
    this.roomTypeId = params.roomTypeId;
    this.channelId = params.channelId;
  }

  roomNum?: number;
  checkOutDate?: Date;
  rateCodeId?: number;
  hotelId?: number;
  checkInDate?: Date;
  roomTypeId?: number;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.ota.DailyTotalChargeRequest',
      $: {
        roomNum: java.Integer(this.roomNum),
        checkOutDate: this.checkOutDate,
        rateCodeId: java.Long(this.rateCodeId),
        hotelId: java.Long(this.hotelId),
        checkInDate: this.checkInDate,
        roomTypeId: java.Long(this.roomTypeId),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
