import java from 'js-to-java';

export interface IHandoverAdjustmentDTO {
  amount?: {value: string};
  code?: number;
  name?: string;
  remark?: string;
}

export class HandoverAdjustmentDTO {
  constructor(params: IHandoverAdjustmentDTO) {
    this.amount = params.amount;
    this.code = params.code;
    this.name = params.name;
    this.remark = params.remark;
  }

  amount?: {value: string};
  code?: number;
  name?: string;
  remark?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.HandoverAdjustmentDTO',
      $: {
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        code: java.Integer(this.code),
        name: java.String(this.name),
        remark: java.String(this.remark),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
