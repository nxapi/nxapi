import java from 'js-to-java';

export interface IExtBookingPostingRpcRequest {
  checkOutStartDate?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  checkInStartDate?: Date;
  checkInEndDate?: Date;
  channelId?: number;
  extBookingSn?: string;
  bookingSn?: string;
  checkOutEndDate?: Date;
}

export class ExtBookingPostingRpcRequest {
  constructor(params: IExtBookingPostingRpcRequest) {
    this.checkOutStartDate = params.checkOutStartDate;
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
    this.hotelId = params.hotelId;
    this.checkInStartDate = params.checkInStartDate;
    this.checkInEndDate = params.checkInEndDate;
    this.channelId = params.channelId;
    this.extBookingSn = params.extBookingSn;
    this.bookingSn = params.bookingSn;
    this.checkOutEndDate = params.checkOutEndDate;
  }

  checkOutStartDate?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  checkInStartDate?: Date;
  checkInEndDate?: Date;
  channelId?: number;
  extBookingSn?: string;
  bookingSn?: string;
  checkOutEndDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.ExtBookingPostingRpcRequest',
      $: {
        checkOutStartDate: this.checkOutStartDate,
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
        checkInStartDate: this.checkInStartDate,
        checkInEndDate: this.checkInEndDate,
        channelId: java.Long(this.channelId),
        extBookingSn: java.String(this.extBookingSn),
        bookingSn: java.String(this.bookingSn),
        checkOutEndDate: this.checkOutEndDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
