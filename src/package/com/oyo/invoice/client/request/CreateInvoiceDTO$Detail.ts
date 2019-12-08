import java from 'js-to-java';

export interface ICreateInvoiceDTO$Detail {
  unitPrice?: string;
  number?: number;
  productCode?: string;
  remark?: string;
  fullAmount?: string;
}

export class CreateInvoiceDTO$Detail {
  constructor(params: ICreateInvoiceDTO$Detail) {
    this.unitPrice = params.unitPrice;
    this.number = params.number;
    this.productCode = params.productCode;
    this.remark = params.remark;
    this.fullAmount = params.fullAmount;
  }

  unitPrice?: string;
  number?: number;
  productCode?: string;
  remark?: string;
  fullAmount?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.request.CreateInvoiceDTO$Detail',
      $: {
        unitPrice: java.String(this.unitPrice),
        number: java.Integer(this.number),
        productCode: java.String(this.productCode),
        remark: java.String(this.remark),
        fullAmount: java.String(this.fullAmount),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
