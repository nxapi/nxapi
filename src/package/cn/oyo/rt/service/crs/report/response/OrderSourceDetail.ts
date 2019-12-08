import java from 'js-to-java';

export interface IOrderSourceDetail {
  roomNo?: string;
  orderId?: number;
  orderSn?: string;
  bookingName?: string;
  occupantName?: string;
  source?: string;
  checkInDate?: Date;
  bookingId?: number;
  bookingSn?: string;
  roomName?: string;
  checkOutDate?: Date;
  nights?: number;
  averagePrice?: string;
  roomIncome?: string;
}

export class OrderSourceDetail {
  constructor(params: IOrderSourceDetail) {
    this.roomNo = params.roomNo;
    this.orderId = params.orderId;
    this.orderSn = params.orderSn;
    this.bookingName = params.bookingName;
    this.occupantName = params.occupantName;
    this.source = params.source;
    this.checkInDate = params.checkInDate;
    this.bookingId = params.bookingId;
    this.bookingSn = params.bookingSn;
    this.roomName = params.roomName;
    this.checkOutDate = params.checkOutDate;
    this.nights = params.nights;
    this.averagePrice = params.averagePrice;
    this.roomIncome = params.roomIncome;
  }

  roomNo?: string;
  orderId?: number;
  orderSn?: string;
  bookingName?: string;
  occupantName?: string;
  source?: string;
  checkInDate?: Date;
  bookingId?: number;
  bookingSn?: string;
  roomName?: string;
  checkOutDate?: Date;
  nights?: number;
  averagePrice?: string;
  roomIncome?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.OrderSourceDetail',
      $: {
        roomNo: java.String(this.roomNo),
        orderId: java.Long(this.orderId),
        orderSn: java.String(this.orderSn),
        bookingName: java.String(this.bookingName),
        occupantName: java.String(this.occupantName),
        source: java.String(this.source),
        checkInDate: this.checkInDate,
        bookingId: java.Long(this.bookingId),
        bookingSn: java.String(this.bookingSn),
        roomName: java.String(this.roomName),
        checkOutDate: this.checkOutDate,
        nights: java.Integer(this.nights),
        averagePrice: java.String(this.averagePrice),
        roomIncome: java.String(this.roomIncome),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
