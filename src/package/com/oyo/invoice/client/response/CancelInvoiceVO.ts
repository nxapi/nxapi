import java from 'js-to-java';

export interface ICancelInvoiceVO {
  invoiceRequestSn?: string;
  serialVersionUID?: number;
  status?: number;
}

export class CancelInvoiceVO {
  constructor(params: ICancelInvoiceVO) {
    this.invoiceRequestSn = params.invoiceRequestSn;
    this.serialVersionUID = params.serialVersionUID;
    this.status = params.status;
  }

  invoiceRequestSn?: string;
  serialVersionUID?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.response.CancelInvoiceVO',
      $: {
        invoiceRequestSn: java.String(this.invoiceRequestSn),
        serialVersionUID: java.Long(this.serialVersionUID),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
