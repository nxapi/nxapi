import { BasePostingItemDTO } from './BasePostingItemDTO';
import java from 'js-to-java';

export interface IReceivablesDTO {
  consumptionAmount?: {value: string};
  items?: Array<BasePostingItemDTO>;
}

export class ReceivablesDTO {
  constructor(params: IReceivablesDTO) {
    this.consumptionAmount = params.consumptionAmount;
    this.items = params.items;
  }

  consumptionAmount?: {value: string};
  items?: Array<BasePostingItemDTO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ReceivablesDTO',
      $: {
        consumptionAmount: this.consumptionAmount
          ? java.BigDecimal(this.consumptionAmount.value)
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
