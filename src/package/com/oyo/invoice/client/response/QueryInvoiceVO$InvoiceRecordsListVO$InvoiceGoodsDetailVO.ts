import java from 'js-to-java';

export interface IQueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO {
  unitPrice?: string;
  invoiceRequestSn?: string;
  amount?: string;
  specification?: string;
  remark?: string;
  taxCode?: string;
  serviceName?: string;
  taxName?: string;
  fullAmount?: string;
  number?: number;
  taxRate?: string;
  unit?: string;
  taxAmount?: string;
}

export class QueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO {
  constructor(
    params: IQueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO,
  ) {
    this.unitPrice = params.unitPrice;
    this.invoiceRequestSn = params.invoiceRequestSn;
    this.amount = params.amount;
    this.specification = params.specification;
    this.remark = params.remark;
    this.taxCode = params.taxCode;
    this.serviceName = params.serviceName;
    this.taxName = params.taxName;
    this.fullAmount = params.fullAmount;
    this.number = params.number;
    this.taxRate = params.taxRate;
    this.unit = params.unit;
    this.taxAmount = params.taxAmount;
  }

  unitPrice?: string;
  invoiceRequestSn?: string;
  amount?: string;
  specification?: string;
  remark?: string;
  taxCode?: string;
  serviceName?: string;
  taxName?: string;
  fullAmount?: string;
  number?: number;
  taxRate?: string;
  unit?: string;
  taxAmount?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.invoice.client.response.QueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO',
      $: {
        unitPrice: java.String(this.unitPrice),
        invoiceRequestSn: java.String(this.invoiceRequestSn),
        amount: java.String(this.amount),
        specification: java.String(this.specification),
        remark: java.String(this.remark),
        taxCode: java.String(this.taxCode),
        serviceName: java.String(this.serviceName),
        taxName: java.String(this.taxName),
        fullAmount: java.String(this.fullAmount),
        number: java.Integer(this.number),
        taxRate: java.String(this.taxRate),
        unit: java.String(this.unit),
        taxAmount: java.String(this.taxAmount),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
