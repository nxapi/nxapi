import java from 'js-to-java';

export interface IInventoryCalculationDto {
  batchNo?: string;
  itemName?: string;
  total?: number;
  surplus?: number;
  buhuo?: boolean;
  itemCode?: string;
  itemClass?: string;
  skuCode?: string;
}

export class InventoryCalculationDto {
  constructor(params: IInventoryCalculationDto) {
    this.batchNo = params.batchNo;
    this.itemName = params.itemName;
    this.total = params.total;
    this.surplus = params.surplus;
    this.buhuo = params.buhuo;
    this.itemCode = params.itemCode;
    this.itemClass = params.itemClass;
    this.skuCode = params.skuCode;
  }

  batchNo?: string;
  itemName?: string;
  total?: number;
  surplus?: number;
  buhuo?: boolean;
  itemCode?: string;
  itemClass?: string;
  skuCode?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.InventoryCalculationDto',
      $: {
        batchNo: java.String(this.batchNo),
        itemName: java.String(this.itemName),
        total: java.Integer(this.total),
        surplus: java.Integer(this.surplus),
        buhuo: java.Boolean(this.buhuo),
        itemCode: java.String(this.itemCode),
        itemClass: java.String(this.itemClass),
        skuCode: java.String(this.skuCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
