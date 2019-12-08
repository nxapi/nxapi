import java from 'js-to-java';

export interface IQueryInvoiceDTO {
  invoiceRequestSn?: string;
  serialVersionUID?: number;
  orderSn?: string;
  pageSize?: number;
  pageNum?: number;
}

export class QueryInvoiceDTO {
  constructor(params: IQueryInvoiceDTO) {
    this.invoiceRequestSn = params.invoiceRequestSn;
    this.serialVersionUID = params.serialVersionUID;
    this.orderSn = params.orderSn;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
  }

  invoiceRequestSn?: string;
  serialVersionUID?: number;
  orderSn?: string;
  pageSize?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.request.QueryInvoiceDTO',
      $: {
        invoiceRequestSn: java.String(this.invoiceRequestSn),
        serialVersionUID: java.Long(this.serialVersionUID),
        orderSn: java.String(this.orderSn),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
