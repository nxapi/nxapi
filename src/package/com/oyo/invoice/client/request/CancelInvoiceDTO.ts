import java from 'js-to-java';

export interface ICancelInvoiceDTO {
  invoiceRequestSn?: string;
  serialVersionUID?: number;
}

export class CancelInvoiceDTO {
  constructor(params: ICancelInvoiceDTO) {
    this.invoiceRequestSn = params.invoiceRequestSn;
    this.serialVersionUID = params.serialVersionUID;
  }

  invoiceRequestSn?: string;
  serialVersionUID?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.request.CancelInvoiceDTO',
      $: {
        invoiceRequestSn: java.String(this.invoiceRequestSn),
        serialVersionUID: java.Long(this.serialVersionUID),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
