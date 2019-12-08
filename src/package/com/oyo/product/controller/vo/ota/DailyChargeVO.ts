import java from 'js-to-java';

export interface IDailyChargeVO {
  rate?: {value: string};
  totalCharges?: {value: string};
  postingDate?: string;
}

export class DailyChargeVO {
  constructor(params: IDailyChargeVO) {
    this.rate = params.rate;
    this.totalCharges = params.totalCharges;
    this.postingDate = params.postingDate;
  }

  rate?: {value: string};
  totalCharges?: {value: string};
  postingDate?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.ota.DailyChargeVO',
      $: {
        rate: this.rate ? java.BigDecimal(this.rate.value) : null,
        totalCharges: this.totalCharges
          ? java.BigDecimal(this.totalCharges.value)
          : null,
        postingDate: java.String(this.postingDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
