import { TerminalTypeEnum } from './../../../common/enums/TerminalTypeEnum';
import java from 'js-to-java';

export interface IBookingCommentReq {
  commentFlag?: boolean;
  checkInEndTime?: Date;
  orderId?: number;
  checkInStartTime?: Date;
  start?: number;
  limit?: number;
  page?: number;
  terminals?: Array<TerminalTypeEnum>;
  status?: Array<number>;
}

export class BookingCommentReq {
  constructor(params: IBookingCommentReq) {
    this.commentFlag = params.commentFlag;
    this.checkInEndTime = params.checkInEndTime;
    this.orderId = params.orderId;
    this.checkInStartTime = params.checkInStartTime;
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
    this.terminals = params.terminals;
    this.status = params.status;
  }

  commentFlag?: boolean;
  checkInEndTime?: Date;
  orderId?: number;
  checkInStartTime?: Date;
  start?: number;
  limit?: number;
  page?: number;
  terminals?: Array<TerminalTypeEnum>;
  status?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.app.request.BookingCommentReq',
      $: {
        commentFlag: java.Boolean(this.commentFlag),
        checkInEndTime: this.checkInEndTime,
        orderId: java.Long(this.orderId),
        checkInStartTime: this.checkInStartTime,
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
        terminals: this.terminals
          ? java.List(
              (this.terminals || []).map((paramItem: any) => {
                return java['enum'](
                  'cn.oyo.rt.common.enums.TerminalTypeEnum',
                  TerminalTypeEnum[paramItem],
                );
              }),
            )
          : null,
        status: this.status
          ? java.List(
              (this.status || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
