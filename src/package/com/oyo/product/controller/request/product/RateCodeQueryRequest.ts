import java from 'js-to-java';

export interface IRateCodeQueryRequest {
  payType?: number;
  checkOutDate?: string;
  guaranteeType?: number;
  cancelType?: number;
  guestSourceType?: number;
  checkInType?: number;
  hotelId?: number;
  reservationDate?: string;
  checkInDate?: string;
  roomTypeId?: number;
  channelId?: number;
}

export class RateCodeQueryRequest {
  constructor(params: IRateCodeQueryRequest) {
    this.payType = params.payType;
    this.checkOutDate = params.checkOutDate;
    this.guaranteeType = params.guaranteeType;
    this.cancelType = params.cancelType;
    this.guestSourceType = params.guestSourceType;
    this.checkInType = params.checkInType;
    this.hotelId = params.hotelId;
    this.reservationDate = params.reservationDate;
    this.checkInDate = params.checkInDate;
    this.roomTypeId = params.roomTypeId;
    this.channelId = params.channelId;
  }

  payType?: number;
  checkOutDate?: string;
  guaranteeType?: number;
  cancelType?: number;
  guestSourceType?: number;
  checkInType?: number;
  hotelId?: number;
  reservationDate?: string;
  checkInDate?: string;
  roomTypeId?: number;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.product.RateCodeQueryRequest',
      $: {
        payType: java.Integer(this.payType),
        checkOutDate: java.String(this.checkOutDate),
        guaranteeType: java.Integer(this.guaranteeType),
        cancelType: java.Integer(this.cancelType),
        guestSourceType: java.Integer(this.guestSourceType),
        checkInType: java.Long(this.checkInType),
        hotelId: java.Long(this.hotelId),
        reservationDate: java.String(this.reservationDate),
        checkInDate: java.String(this.checkInDate),
        roomTypeId: java.Long(this.roomTypeId),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
