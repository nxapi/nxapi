import java from 'js-to-java';

export interface IBasePostingItemDTO {
  amount?: {value: string};
  code?: number;
  costType?: number;
  name?: string;
}

export class BasePostingItemDTO {
  constructor(params: IBasePostingItemDTO) {
    this.amount = params.amount;
    this.code = params.code;
    this.costType = params.costType;
    this.name = params.name;
  }

  amount?: {value: string};
  code?: number;
  costType?: number;
  name?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.BasePostingItemDTO',
      $: {
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        code: java.Integer(this.code),
        costType: java.Integer(this.costType),
        name: java.String(this.name),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
