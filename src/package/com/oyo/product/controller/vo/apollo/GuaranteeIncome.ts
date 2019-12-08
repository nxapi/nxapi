import java from 'js-to-java';

export interface IGuaranteeIncome {
  money?: string;
  month?: string;
  vmgMoney?: string;
}

export class GuaranteeIncome {
  constructor(params: IGuaranteeIncome) {
    this.money = params.money;
    this.month = params.month;
    this.vmgMoney = params.vmgMoney;
  }

  money?: string;
  month?: string;
  vmgMoney?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.apollo.GuaranteeIncome',
      $: {
        money: java.String(this.money),
        month: java.String(this.month),
        vmgMoney: java.String(this.vmgMoney),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
