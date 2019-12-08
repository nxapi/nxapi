import java from 'js-to-java';

export interface IPmsVerificationRequest {
  orderSn?: string;
  verificationStatus?: string;
  checkOutDateTo?: any;
  bookingName?: string;
  ip?: string;
  hotelId?: number;
  operatorName?: string;
  hangingDateFrom?: any;
  bookingSn?: string;
  checkInDateFrom?: any;
  checkOutDateFrom?: any;
  limit?: number;
  checkInDateTo?: any;
  page?: number;
  operatorId?: number;
  hangingDateTo?: any;
}

export class PmsVerificationRequest {
  constructor(params: IPmsVerificationRequest) {
    this.orderSn = params.orderSn;
    this.verificationStatus = params.verificationStatus;
    this.checkOutDateTo = params.checkOutDateTo;
    this.bookingName = params.bookingName;
    this.ip = params.ip;
    this.hotelId = params.hotelId;
    this.operatorName = params.operatorName;
    this.hangingDateFrom = params.hangingDateFrom;
    this.bookingSn = params.bookingSn;
    this.checkInDateFrom = params.checkInDateFrom;
    this.checkOutDateFrom = params.checkOutDateFrom;
    this.limit = params.limit;
    this.checkInDateTo = params.checkInDateTo;
    this.page = params.page;
    this.operatorId = params.operatorId;
    this.hangingDateTo = params.hangingDateTo;
  }

  orderSn?: string;
  verificationStatus?: string;
  checkOutDateTo?: any;
  bookingName?: string;
  ip?: string;
  hotelId?: number;
  operatorName?: string;
  hangingDateFrom?: any;
  bookingSn?: string;
  checkInDateFrom?: any;
  checkOutDateFrom?: any;
  limit?: number;
  checkInDateTo?: any;
  page?: number;
  operatorId?: number;
  hangingDateTo?: any;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.pms.request.PmsVerificationRequest',
      $: {
        orderSn: java.String(this.orderSn),
        verificationStatus: java.String(this.verificationStatus),
        checkOutDateTo: this.checkOutDateTo,
        bookingName: java.String(this.bookingName),
        ip: java.String(this.ip),
        hotelId: java.Long(this.hotelId),
        operatorName: java.String(this.operatorName),
        hangingDateFrom: this.hangingDateFrom,
        bookingSn: java.String(this.bookingSn),
        checkInDateFrom: this.checkInDateFrom,
        checkOutDateFrom: this.checkOutDateFrom,
        limit: java.Integer(this.limit),
        checkInDateTo: this.checkInDateTo,
        page: java.Integer(this.page),
        operatorId: java.Long(this.operatorId),
        hangingDateTo: this.hangingDateTo,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
