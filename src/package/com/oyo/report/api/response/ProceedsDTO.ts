import { BasePostingItemDTO } from './BasePostingItemDTO';
import java from 'js-to-java';

export interface IProceedsDTO {
  receiptAmount?: {value: string};
  items?: Array<BasePostingItemDTO>;
}

export class ProceedsDTO {
  constructor(params: IProceedsDTO) {
    this.receiptAmount = params.receiptAmount;
    this.items = params.items;
  }

  receiptAmount?: {value: string};
  items?: Array<BasePostingItemDTO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ProceedsDTO',
      $: {
        receiptAmount: this.receiptAmount
          ? java.BigDecimal(this.receiptAmount.value)
          : null,
        items: this.items
          ? java.List(
              (this.items || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
