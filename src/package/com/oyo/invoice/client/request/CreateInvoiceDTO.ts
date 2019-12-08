import { CreateInvoiceDTO$Detail } from './CreateInvoiceDTO$Detail';
import java from 'js-to-java';

export interface ICreateInvoiceDTO {
  invoiceRequestSn?: string;
  orderType?: string;
  buyerTitle?: string;
  orderSn?: string;
  buyerBankAccount?: string;
  sign?: string;
  orderStatus?: number;
  buyerPhoneNumber?: string;
  remark?: string;
  appCode?: string;
  buyerId?: string;
  buyerName?: string;
  sellerCompanyId?: string;
  serialVersionUID?: number;
  buyerAddress?: string;
  emailAddress?: string;
  orderAmount?: string;
  createTime?: string;
  invoiceType?: string;
  buyerBankAddress?: string;
  details?: Array<CreateInvoiceDTO$Detail>;
  payStatus?: number;
  buyerTaxpayerNumber?: string;
}

export class CreateInvoiceDTO {
  constructor(params: ICreateInvoiceDTO) {
    this.invoiceRequestSn = params.invoiceRequestSn;
    this.orderType = params.orderType;
    this.buyerTitle = params.buyerTitle;
    this.orderSn = params.orderSn;
    this.buyerBankAccount = params.buyerBankAccount;
    this.sign = params.sign;
    this.orderStatus = params.orderStatus;
    this.buyerPhoneNumber = params.buyerPhoneNumber;
    this.remark = params.remark;
    this.appCode = params.appCode;
    this.buyerId = params.buyerId;
    this.buyerName = params.buyerName;
    this.sellerCompanyId = params.sellerCompanyId;
    this.serialVersionUID = params.serialVersionUID;
    this.buyerAddress = params.buyerAddress;
    this.emailAddress = params.emailAddress;
    this.orderAmount = params.orderAmount;
    this.createTime = params.createTime;
    this.invoiceType = params.invoiceType;
    this.buyerBankAddress = params.buyerBankAddress;
    this.details = params.details;
    this.payStatus = params.payStatus;
    this.buyerTaxpayerNumber = params.buyerTaxpayerNumber;
  }

  invoiceRequestSn?: string;
  orderType?: string;
  buyerTitle?: string;
  orderSn?: string;
  buyerBankAccount?: string;
  sign?: string;
  orderStatus?: number;
  buyerPhoneNumber?: string;
  remark?: string;
  appCode?: string;
  buyerId?: string;
  buyerName?: string;
  sellerCompanyId?: string;
  serialVersionUID?: number;
  buyerAddress?: string;
  emailAddress?: string;
  orderAmount?: string;
  createTime?: string;
  invoiceType?: string;
  buyerBankAddress?: string;
  details?: Array<CreateInvoiceDTO$Detail>;
  payStatus?: number;
  buyerTaxpayerNumber?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.request.CreateInvoiceDTO',
      $: {
        invoiceRequestSn: java.String(this.invoiceRequestSn),
        orderType: java.String(this.orderType),
        buyerTitle: java.String(this.buyerTitle),
        orderSn: java.String(this.orderSn),
        buyerBankAccount: java.String(this.buyerBankAccount),
        sign: java.String(this.sign),
        orderStatus: java.Integer(this.orderStatus),
        buyerPhoneNumber: java.String(this.buyerPhoneNumber),
        remark: java.String(this.remark),
        appCode: java.String(this.appCode),
        buyerId: java.String(this.buyerId),
        buyerName: java.String(this.buyerName),
        sellerCompanyId: java.String(this.sellerCompanyId),
        serialVersionUID: java.Long(this.serialVersionUID),
        buyerAddress: java.String(this.buyerAddress),
        emailAddress: java.String(this.emailAddress),
        orderAmount: java.String(this.orderAmount),
        createTime: java.String(this.createTime),
        invoiceType: java.String(this.invoiceType),
        buyerBankAddress: java.String(this.buyerBankAddress),
        details: this.details
          ? java.List(
              (this.details || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        payStatus: java.Integer(this.payStatus),
        buyerTaxpayerNumber: java.String(this.buyerTaxpayerNumber),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
