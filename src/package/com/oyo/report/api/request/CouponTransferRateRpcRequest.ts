import java from 'js-to-java';

export interface ICouponTransferRateRpcRequest {
  couponName?: string;
  couponSource?: string;
  year?: number;
  endDate?: string;
  phone?: string;
  start?: number;
  limit?: number;
  channelName?: string;
  hotelId?: number;
  page?: number;
  startDate?: string;
}

export class CouponTransferRateRpcRequest {
  constructor(params: ICouponTransferRateRpcRequest) {
    this.couponName = params.couponName;
    this.couponSource = params.couponSource;
    this.year = params.year;
    this.endDate = params.endDate;
    this.phone = params.phone;
    this.start = params.start;
    this.limit = params.limit;
    this.channelName = params.channelName;
    this.hotelId = params.hotelId;
    this.page = params.page;
    this.startDate = params.startDate;
  }

  couponName?: string;
  couponSource?: string;
  year?: number;
  endDate?: string;
  phone?: string;
  start?: number;
  limit?: number;
  channelName?: string;
  hotelId?: number;
  page?: number;
  startDate?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.CouponTransferRateRpcRequest',
      $: {
        couponName: java.String(this.couponName),
        couponSource: java.String(this.couponSource),
        year: java.Integer(this.year),
        endDate: java.String(this.endDate),
        phone: java.String(this.phone),
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        channelName: java.String(this.channelName),
        hotelId: java.Long(this.hotelId),
        page: java.Integer(this.page),
        startDate: java.String(this.startDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
