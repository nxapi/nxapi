import java from 'js-to-java';

export interface IApplyItemAmountDto {
  batchNo?: string;
  itemName?: string;
  amount?: number;
  itemCode?: string;
  itemClass?: string;
  skuCode?: string;
}

export class ApplyItemAmountDto {
  constructor(params: IApplyItemAmountDto) {
    this.batchNo = params.batchNo;
    this.itemName = params.itemName;
    this.amount = params.amount;
    this.itemCode = params.itemCode;
    this.itemClass = params.itemClass;
    this.skuCode = params.skuCode;
  }

  batchNo?: string;
  itemName?: string;
  amount?: number;
  itemCode?: string;
  itemClass?: string;
  skuCode?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.ApplyItemAmountDto',
      $: {
        batchNo: java.String(this.batchNo),
        itemName: java.String(this.itemName),
        amount: java.Integer(this.amount),
        itemCode: java.String(this.itemCode),
        itemClass: java.String(this.itemClass),
        skuCode: java.String(this.skuCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
