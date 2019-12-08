import java from 'js-to-java';

export interface IOrderSourceRequest {
  checkOutDate?: string;
  limit?: number;
  start?: number;
  source?: string;
  hotelId?: number;
  page?: number;
  checkInDate?: string;
  bookingId?: number;
}

export class OrderSourceRequest {
  constructor(params: IOrderSourceRequest) {
    this.checkOutDate = params.checkOutDate;
    this.limit = params.limit;
    this.start = params.start;
    this.source = params.source;
    this.hotelId = params.hotelId;
    this.page = params.page;
    this.checkInDate = params.checkInDate;
    this.bookingId = params.bookingId;
  }

  checkOutDate?: string;
  limit?: number;
  start?: number;
  source?: string;
  hotelId?: number;
  page?: number;
  checkInDate?: string;
  bookingId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.request.OrderSourceRequest',
      $: {
        checkOutDate: java.String(this.checkOutDate),
        limit: java.Integer(this.limit),
        start: java.Integer(this.start),
        source: java.String(this.source),
        hotelId: java.Long(this.hotelId),
        page: java.Integer(this.page),
        checkInDate: java.String(this.checkInDate),
        bookingId: java.Long(this.bookingId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
