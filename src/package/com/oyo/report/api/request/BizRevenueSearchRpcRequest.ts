import java from 'js-to-java';

export interface IBizRevenueSearchRpcRequest {
  bizDateStart?: Date;
  bizDateEnd?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  source?: number;
}

export class BizRevenueSearchRpcRequest {
  constructor(params: IBizRevenueSearchRpcRequest) {
    this.bizDateStart = params.bizDateStart;
    this.bizDateEnd = params.bizDateEnd;
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
    this.hotelId = params.hotelId;
    this.source = params.source;
  }

  bizDateStart?: Date;
  bizDateEnd?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  source?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.BizRevenueSearchRpcRequest',
      $: {
        bizDateStart: this.bizDateStart,
        bizDateEnd: this.bizDateEnd,
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
        source: java.Long(this.source),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
