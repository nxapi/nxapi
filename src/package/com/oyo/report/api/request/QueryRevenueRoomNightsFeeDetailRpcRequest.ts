import java from 'js-to-java';

export interface IQueryRevenueRoomNightsFeeDetailRpcRequest {
  bizDateStart?: Date;
  roomReservationSn?: string;
  bizDateEnd?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  type?: number;
}

export class QueryRevenueRoomNightsFeeDetailRpcRequest {
  constructor(params: IQueryRevenueRoomNightsFeeDetailRpcRequest) {
    this.bizDateStart = params.bizDateStart;
    this.roomReservationSn = params.roomReservationSn;
    this.bizDateEnd = params.bizDateEnd;
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
    this.hotelId = params.hotelId;
    this.type = params.type;
  }

  bizDateStart?: Date;
  roomReservationSn?: string;
  bizDateEnd?: Date;
  start?: number;
  limit?: number;
  page?: number;
  hotelId?: number;
  type?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.report.api.request.QueryRevenueRoomNightsFeeDetailRpcRequest',
      $: {
        bizDateStart: this.bizDateStart,
        roomReservationSn: java.String(this.roomReservationSn),
        bizDateEnd: this.bizDateEnd,
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
        hotelId: java.Long(this.hotelId),
        type: java.Integer(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
