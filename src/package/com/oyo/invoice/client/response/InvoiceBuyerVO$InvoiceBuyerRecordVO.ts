import java from 'js-to-java';

export interface IInvoiceBuyerVO$InvoiceBuyerRecordVO {
  bankAccount?: string;
  address?: string;
  businessNature?: string;
  remark?: string;
  buyerId?: string;
  buyerName?: string;
  taxpayerNumber?: string;
  type?: string;
  bankAddress?: string;
  serialVersionUID?: number;
  phoneNumber?: string;
  invoiceTitleType?: string;
  invoiceTitle?: string;
}

export class InvoiceBuyerVO$InvoiceBuyerRecordVO {
  constructor(params: IInvoiceBuyerVO$InvoiceBuyerRecordVO) {
    this.bankAccount = params.bankAccount;
    this.address = params.address;
    this.businessNature = params.businessNature;
    this.remark = params.remark;
    this.buyerId = params.buyerId;
    this.buyerName = params.buyerName;
    this.taxpayerNumber = params.taxpayerNumber;
    this.type = params.type;
    this.bankAddress = params.bankAddress;
    this.serialVersionUID = params.serialVersionUID;
    this.phoneNumber = params.phoneNumber;
    this.invoiceTitleType = params.invoiceTitleType;
    this.invoiceTitle = params.invoiceTitle;
  }

  bankAccount?: string;
  address?: string;
  businessNature?: string;
  remark?: string;
  buyerId?: string;
  buyerName?: string;
  taxpayerNumber?: string;
  type?: string;
  bankAddress?: string;
  serialVersionUID?: number;
  phoneNumber?: string;
  invoiceTitleType?: string;
  invoiceTitle?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.invoice.client.response.InvoiceBuyerVO$InvoiceBuyerRecordVO',
      $: {
        bankAccount: java.String(this.bankAccount),
        address: java.String(this.address),
        businessNature: java.String(this.businessNature),
        remark: java.String(this.remark),
        buyerId: java.String(this.buyerId),
        buyerName: java.String(this.buyerName),
        taxpayerNumber: java.String(this.taxpayerNumber),
        type: java.String(this.type),
        bankAddress: java.String(this.bankAddress),
        serialVersionUID: java.Long(this.serialVersionUID),
        phoneNumber: java.String(this.phoneNumber),
        invoiceTitleType: java.String(this.invoiceTitleType),
        invoiceTitle: java.String(this.invoiceTitle),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
