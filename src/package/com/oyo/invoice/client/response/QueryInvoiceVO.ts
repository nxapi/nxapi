import { QueryInvoiceVO$InvoiceRecordsListVO } from './QueryInvoiceVO$InvoiceRecordsListVO';
import java from 'js-to-java';

export interface IQueryInvoiceVO {
  invoiceRecordsListVO?: Array<QueryInvoiceVO$InvoiceRecordsListVO>;
  serialVersionUID?: number;
  totalCount?: number;
}

export class QueryInvoiceVO {
  constructor(params: IQueryInvoiceVO) {
    this.invoiceRecordsListVO = params.invoiceRecordsListVO;
    this.serialVersionUID = params.serialVersionUID;
    this.totalCount = params.totalCount;
  }

  invoiceRecordsListVO?: Array<QueryInvoiceVO$InvoiceRecordsListVO>;
  serialVersionUID?: number;
  totalCount?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.response.QueryInvoiceVO',
      $: {
        invoiceRecordsListVO: this.invoiceRecordsListVO
          ? java.List(
              (this.invoiceRecordsListVO || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        serialVersionUID: java.Long(this.serialVersionUID),
        totalCount: java.Long(this.totalCount),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
