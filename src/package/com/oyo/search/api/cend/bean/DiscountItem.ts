import java from 'js-to-java';

export interface IDiscountItem {
  discountRemark?: string;
  discountName?: string;
  discountAmountText?: string;
  discountAmount?: {value: string};
}

export class DiscountItem {
  constructor(params: IDiscountItem) {
    this.discountRemark = params.discountRemark;
    this.discountName = params.discountName;
    this.discountAmountText = params.discountAmountText;
    this.discountAmount = params.discountAmount;
  }

  discountRemark?: string;
  discountName?: string;
  discountAmountText?: string;
  discountAmount?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.DiscountItem',
      $: {
        discountRemark: java.String(this.discountRemark),
        discountName: java.String(this.discountName),
        discountAmountText: java.String(this.discountAmountText),
        discountAmount: this.discountAmount
          ? java.BigDecimal(this.discountAmount.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
