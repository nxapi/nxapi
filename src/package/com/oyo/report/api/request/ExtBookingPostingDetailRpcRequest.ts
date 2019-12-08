import java from 'js-to-java';

export interface IExtBookingPostingDetailRpcRequest {
  start?: number;
  limit?: number;
  page?: number;
  bookingSn?: string;
}

export class ExtBookingPostingDetailRpcRequest {
  constructor(params: IExtBookingPostingDetailRpcRequest) {
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
    this.bookingSn = params.bookingSn;
  }

  start?: number;
  limit?: number;
  page?: number;
  bookingSn?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.ExtBookingPostingDetailRpcRequest',
      $: {
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
        bookingSn: java.String(this.bookingSn),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
