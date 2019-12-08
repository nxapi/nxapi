import java from 'js-to-java';

export interface ICouponTransRateListDTO {
  couponName?: string;
  couponAmount?: number;
  useInHotel?: boolean;
  phone?: string;
  channelName?: string;
  orderDate?: Date;
  bookingSn?: string;
}

export class CouponTransRateListDTO {
  constructor(params: ICouponTransRateListDTO) {
    this.couponName = params.couponName;
    this.couponAmount = params.couponAmount;
    this.useInHotel = params.useInHotel;
    this.phone = params.phone;
    this.channelName = params.channelName;
    this.orderDate = params.orderDate;
    this.bookingSn = params.bookingSn;
  }

  couponName?: string;
  couponAmount?: number;
  useInHotel?: boolean;
  phone?: string;
  channelName?: string;
  orderDate?: Date;
  bookingSn?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.CouponTransRateListDTO',
      $: {
        couponName: java.String(this.couponName),
        couponAmount: java.Float(this.couponAmount),
        useInHotel: java.Boolean(this.useInHotel),
        phone: java.String(this.phone),
        channelName: java.String(this.channelName),
        orderDate: this.orderDate,
        bookingSn: java.String(this.bookingSn),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
