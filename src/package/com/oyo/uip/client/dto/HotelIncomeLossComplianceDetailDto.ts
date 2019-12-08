import java from 'js-to-java';

export interface IHotelIncomeLossComplianceDetailDto {
  lossesUrn?: string;
  auditCountMonthly?: number;
  auditMonth?: Date;
  bizDate?: Date;
  auditStatus?: string;
  beginTime?: string;
  endTime?: string;
}

export class HotelIncomeLossComplianceDetailDto {
  constructor(params: IHotelIncomeLossComplianceDetailDto) {
    this.lossesUrn = params.lossesUrn;
    this.auditCountMonthly = params.auditCountMonthly;
    this.auditMonth = params.auditMonth;
    this.bizDate = params.bizDate;
    this.auditStatus = params.auditStatus;
    this.beginTime = params.beginTime;
    this.endTime = params.endTime;
  }

  lossesUrn?: string;
  auditCountMonthly?: number;
  auditMonth?: Date;
  bizDate?: Date;
  auditStatus?: string;
  beginTime?: string;
  endTime?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.HotelIncomeLossComplianceDetailDto',
      $: {
        lossesUrn: java.String(this.lossesUrn),
        auditCountMonthly: java.Integer(this.auditCountMonthly),
        auditMonth: this.auditMonth,
        bizDate: this.bizDate,
        auditStatus: java.String(this.auditStatus),
        beginTime: java.String(this.beginTime),
        endTime: java.String(this.endTime),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
