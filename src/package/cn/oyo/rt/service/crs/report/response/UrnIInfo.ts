import java from 'js-to-java';

export interface IUrnIInfo {
  date?: string;
  urn?: number;
}

export class UrnIInfo {
  constructor(params: IUrnIInfo) {
    this.date = params.date;
    this.urn = params.urn;
  }

  date?: string;
  urn?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.UrnIInfo',
      $: {date: java.String(this.date), urn: java.Long(this.urn)},
    };
  }
}

//generate by interpret-cli dubbo2.js
