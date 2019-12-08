import java from 'js-to-java';

export interface IOrderSourceRequest {
  sourceId?: number;
  bizDateStart?: Date;
  bizDateEnd?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
}

export class OrderSourceRequest {
  constructor(params: IOrderSourceRequest) {
    this.sourceId = params.sourceId;
    this.bizDateStart = params.bizDateStart;
    this.bizDateEnd = params.bizDateEnd;
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
    this.hotelId = params.hotelId;
  }

  sourceId?: number;
  bizDateStart?: Date;
  bizDateEnd?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.OrderSourceRequest',
      $: {
        sourceId: java.Long(this.sourceId),
        bizDateStart: this.bizDateStart,
        bizDateEnd: this.bizDateEnd,
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
