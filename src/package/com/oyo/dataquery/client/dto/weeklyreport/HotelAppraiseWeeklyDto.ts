import java from 'js-to-java';

export interface IHotelAppraiseWeeklyDto {
  statusOtaAccount?: number;
  commentLabel?: string;
  badFbCnt?: number;
  endDate?: Date;
  hotelId?: number;
  status3c?: number;
  startDate?: Date;
  statusIncomeLosses?: number;
}

export class HotelAppraiseWeeklyDto {
  constructor(params: IHotelAppraiseWeeklyDto) {
    this.statusOtaAccount = params.statusOtaAccount;
    this.commentLabel = params.commentLabel;
    this.badFbCnt = params.badFbCnt;
    this.endDate = params.endDate;
    this.hotelId = params.hotelId;
    this.status3c = params.status3c;
    this.startDate = params.startDate;
    this.statusIncomeLosses = params.statusIncomeLosses;
  }

  statusOtaAccount?: number;
  commentLabel?: string;
  badFbCnt?: number;
  endDate?: Date;
  hotelId?: number;
  status3c?: number;
  startDate?: Date;
  statusIncomeLosses?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.dataquery.client.dto.weeklyreport.HotelAppraiseWeeklyDto',
      $: {
        statusOtaAccount: java.Integer(this.statusOtaAccount),
        commentLabel: java.String(this.commentLabel),
        badFbCnt: java.Integer(this.badFbCnt),
        endDate: this.endDate,
        hotelId: java.Integer(this.hotelId),
        status3c: java.Integer(this.status3c),
        startDate: this.startDate,
        statusIncomeLosses: java.Integer(this.statusIncomeLosses),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
