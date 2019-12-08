import java from 'js-to-java';

export interface IHangRequest {
  endDate?: string;
  start?: number;
  limit?: number;
  merchantsCode?: string;
  page?: number;
  hotelId?: number;
  startDate?: string;
  channelId?: string;
}

export class HangRequest {
  constructor(params: IHangRequest) {
    this.endDate = params.endDate;
    this.start = params.start;
    this.limit = params.limit;
    this.merchantsCode = params.merchantsCode;
    this.page = params.page;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
    this.channelId = params.channelId;
  }

  endDate?: string;
  start?: number;
  limit?: number;
  merchantsCode?: string;
  page?: number;
  hotelId?: number;
  startDate?: string;
  channelId?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.request.HangRequest',
      $: {
        endDate: java.String(this.endDate),
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        merchantsCode: java.String(this.merchantsCode),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
        startDate: java.String(this.startDate),
        channelId: java.String(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
