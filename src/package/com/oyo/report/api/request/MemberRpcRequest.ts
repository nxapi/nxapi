import java from 'js-to-java';

export interface IMemberRpcRequest {
  endDate?: string;
  phone?: string;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  startDate?: string;
  operator?: string;
  forCount?: boolean;
}

export class MemberRpcRequest {
  constructor(params: IMemberRpcRequest) {
    this.endDate = params.endDate;
    this.phone = params.phone;
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
    this.operator = params.operator;
    this.forCount = params.forCount;
  }

  endDate?: string;
  phone?: string;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  startDate?: string;
  operator?: string;
  forCount?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.MemberRpcRequest',
      $: {
        endDate: java.String(this.endDate),
        phone: java.String(this.phone),
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
        startDate: java.String(this.startDate),
        operator: java.String(this.operator),
        forCount: java.Boolean(this.forCount),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
