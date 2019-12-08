import java from 'js-to-java';

export interface ICountRateDTO {
  total?: number;
  operator?: string;
}

export class CountRateDTO {
  constructor(params: ICountRateDTO) {
    this.total = params.total;
    this.operator = params.operator;
  }

  total?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.CountRateDTO',
      $: {
        total: java.Integer(this.total),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
