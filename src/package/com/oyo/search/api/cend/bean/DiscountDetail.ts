import { DiscountItem } from './DiscountItem';
import java from 'js-to-java';

export interface IDiscountDetail {
  discountDisplayText?: string;
  discountItems?: Array<DiscountItem>;
  originalPrice?: {value: string};
  discountTotalAmount?: {value: string};
  discountTotalAmountText?: string;
  originalPriceText?: string;
}

export class DiscountDetail {
  constructor(params: IDiscountDetail) {
    this.discountDisplayText = params.discountDisplayText;
    this.discountItems = params.discountItems;
    this.originalPrice = params.originalPrice;
    this.discountTotalAmount = params.discountTotalAmount;
    this.discountTotalAmountText = params.discountTotalAmountText;
    this.originalPriceText = params.originalPriceText;
  }

  discountDisplayText?: string;
  discountItems?: Array<DiscountItem>;
  originalPrice?: {value: string};
  discountTotalAmount?: {value: string};
  discountTotalAmountText?: string;
  originalPriceText?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.DiscountDetail',
      $: {
        discountDisplayText: java.String(this.discountDisplayText),
        discountItems: this.discountItems
          ? java.List(
              (this.discountItems || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        originalPrice: this.originalPrice
          ? java.BigDecimal(this.originalPrice.value)
          : null,
        discountTotalAmount: this.discountTotalAmount
          ? java.BigDecimal(this.discountTotalAmount.value)
          : null,
        discountTotalAmountText: java.String(this.discountTotalAmountText),
        originalPriceText: java.String(this.originalPriceText),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
