import java from 'js-to-java';

export interface IWeekReportBatchNoVo {
  endDate?: Date;
  readFlag?: number;
  id?: number;
  startDate?: Date;
}

export class WeekReportBatchNoVo {
  constructor(params: IWeekReportBatchNoVo) {
    this.endDate = params.endDate;
    this.readFlag = params.readFlag;
    this.id = params.id;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  readFlag?: number;
  id?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.WeekReportBatchNoVo',
      $: {
        endDate: this.endDate,
        readFlag: java.Integer(this.readFlag),
        id: java.Long(this.id),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
