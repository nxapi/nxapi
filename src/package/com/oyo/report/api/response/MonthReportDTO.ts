import java from 'js-to-java';

export interface IMonthReportDTO {
  todayTargetNum?: number;
  targetNum?: number;
  regRate?: number;
  todayActualCheckinNum?: number;
  todayTargetCheckinNum?: number;
  regCheckinRate?: number;
  targetCheckNum?: number;
  actualNum?: number;
  actualCheckNum?: number;
  todayActualNum?: number;
}

export class MonthReportDTO {
  constructor(params: IMonthReportDTO) {
    this.todayTargetNum = params.todayTargetNum;
    this.targetNum = params.targetNum;
    this.regRate = params.regRate;
    this.todayActualCheckinNum = params.todayActualCheckinNum;
    this.todayTargetCheckinNum = params.todayTargetCheckinNum;
    this.regCheckinRate = params.regCheckinRate;
    this.targetCheckNum = params.targetCheckNum;
    this.actualNum = params.actualNum;
    this.actualCheckNum = params.actualCheckNum;
    this.todayActualNum = params.todayActualNum;
  }

  todayTargetNum?: number;
  targetNum?: number;
  regRate?: number;
  todayActualCheckinNum?: number;
  todayTargetCheckinNum?: number;
  regCheckinRate?: number;
  targetCheckNum?: number;
  actualNum?: number;
  actualCheckNum?: number;
  todayActualNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.MonthReportDTO',
      $: {
        todayTargetNum: java.Integer(this.todayTargetNum),
        targetNum: java.Integer(this.targetNum),
        regRate: java.Float(this.regRate),
        todayActualCheckinNum: java.Integer(this.todayActualCheckinNum),
        todayTargetCheckinNum: java.Integer(this.todayTargetCheckinNum),
        regCheckinRate: java.Float(this.regCheckinRate),
        targetCheckNum: java.Integer(this.targetCheckNum),
        actualNum: java.Integer(this.actualNum),
        actualCheckNum: java.Integer(this.actualCheckNum),
        todayActualNum: java.Integer(this.todayActualNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
