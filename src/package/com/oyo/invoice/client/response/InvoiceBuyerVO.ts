import { InvoiceBuyerVO$InvoiceBuyerRecordVO } from './InvoiceBuyerVO$InvoiceBuyerRecordVO';
import java from 'js-to-java';

export interface IInvoiceBuyerVO {
  serialVersionUID?: number;
  totalCount?: number;
  invoiceSellerRecordVOList?: Array<InvoiceBuyerVO$InvoiceBuyerRecordVO>;
}

export class InvoiceBuyerVO {
  constructor(params: IInvoiceBuyerVO) {
    this.serialVersionUID = params.serialVersionUID;
    this.totalCount = params.totalCount;
    this.invoiceSellerRecordVOList = params.invoiceSellerRecordVOList;
  }

  serialVersionUID?: number;
  totalCount?: number;
  invoiceSellerRecordVOList?: Array<InvoiceBuyerVO$InvoiceBuyerRecordVO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.response.InvoiceBuyerVO',
      $: {
        serialVersionUID: java.Long(this.serialVersionUID),
        totalCount: java.Long(this.totalCount),
        invoiceSellerRecordVOList: this.invoiceSellerRecordVOList
          ? java.List(
              (this.invoiceSellerRecordVOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
