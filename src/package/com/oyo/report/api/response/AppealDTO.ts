import java from 'js-to-java';

export interface IAppealDTO {
  departureDate?: Date;
  appealId?: number;
  consumerServiceDealNum?: number;
  appealSource?: string;
  bookingId?: number;
  bookingSn?: string;
  appealCreateTime?: Date;
}

export class AppealDTO {
  constructor(params: IAppealDTO) {
    this.departureDate = params.departureDate;
    this.appealId = params.appealId;
    this.consumerServiceDealNum = params.consumerServiceDealNum;
    this.appealSource = params.appealSource;
    this.bookingId = params.bookingId;
    this.bookingSn = params.bookingSn;
    this.appealCreateTime = params.appealCreateTime;
  }

  departureDate?: Date;
  appealId?: number;
  consumerServiceDealNum?: number;
  appealSource?: string;
  bookingId?: number;
  bookingSn?: string;
  appealCreateTime?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.AppealDTO',
      $: {
        departureDate: this.departureDate,
        appealId: java.Long(this.appealId),
        consumerServiceDealNum: java.Integer(this.consumerServiceDealNum),
        appealSource: java.String(this.appealSource),
        bookingId: java.Long(this.bookingId),
        bookingSn: java.String(this.bookingSn),
        appealCreateTime: this.appealCreateTime,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
