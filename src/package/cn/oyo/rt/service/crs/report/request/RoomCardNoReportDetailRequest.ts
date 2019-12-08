import java from 'js-to-java';

export interface IRoomCardNoReportDetailRequest {
  endDate?: Date;
  forExcel?: boolean;
  ip?: string;
  limit?: number;
  start?: number;
  page?: number;
  hotelId?: number;
  operatorId?: number;
  operatorName?: string;
  startDate?: Date;
}

export class RoomCardNoReportDetailRequest {
  constructor(params: IRoomCardNoReportDetailRequest) {
    this.endDate = params.endDate;
    this.forExcel = params.forExcel;
    this.ip = params.ip;
    this.limit = params.limit;
    this.start = params.start;
    this.page = params.page;
    this.hotelId = params.hotelId;
    this.operatorId = params.operatorId;
    this.operatorName = params.operatorName;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  forExcel?: boolean;
  ip?: string;
  limit?: number;
  start?: number;
  page?: number;
  hotelId?: number;
  operatorId?: number;
  operatorName?: string;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class:
        'cn.oyo.rt.service.crs.report.request.RoomCardNoReportDetailRequest',
      $: {
        endDate: this.endDate,
        forExcel: java.Boolean(this.forExcel),
        ip: java.String(this.ip),
        limit: java.Integer(this.limit),
        start: java.Integer(this.start),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
        operatorId: java.Long(this.operatorId),
        operatorName: java.String(this.operatorName),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
