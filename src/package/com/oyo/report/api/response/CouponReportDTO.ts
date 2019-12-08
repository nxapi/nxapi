import java from 'js-to-java';

export interface ICouponReportDTO {
  useInHotelAmount?: number;
  totalAmount?: number;
  month?: number;
  rate?: number;
}

export class CouponReportDTO {
  constructor(params: ICouponReportDTO) {
    this.useInHotelAmount = params.useInHotelAmount;
    this.totalAmount = params.totalAmount;
    this.month = params.month;
    this.rate = params.rate;
  }

  useInHotelAmount?: number;
  totalAmount?: number;
  month?: number;
  rate?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.CouponReportDTO',
      $: {
        useInHotelAmount: java.Float(this.useInHotelAmount),
        totalAmount: java.Float(this.totalAmount),
        month: java.Integer(this.month),
        rate: java.Float(this.rate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
