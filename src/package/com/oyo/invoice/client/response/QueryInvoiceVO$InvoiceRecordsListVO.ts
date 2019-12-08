import { QueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO } from './QueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO';
import java from 'js-to-java';

export interface IQueryInvoiceVO$InvoiceRecordsListVO {
  invoiceTypeName?: string;
  sellerPhoneNumber?: string;
  orderType?: string;
  orderSn?: string;
  buyerBankAccount?: string;
  sellerAddress?: string;
  remark?: string;
  appCode?: string;
  emailStatusName?: string;
  payee?: string;
  buyerAddress?: string;
  pdfUrl?: string;
  emailAddress?: string;
  invoiceNumber?: number;
  statusName?: string;
  invoiceType?: string;
  invoiceGoodsDetailVOS?: Array<
    QueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO
  >;
  sellerTitle?: string;
  taxType?: string;
  taxTypeName?: string;
  invoiceRequestSn?: string;
  machineCode?: string;
  buyerTitle?: string;
  drawer?: string;
  buyerPhoneNumber?: string;
  reviewer?: string;
  invoiceDate?: string;
  invoiceCode?: string;
  orderTypeName?: string;
  checkCode?: string;
  resultMsg?: string;
  totalFullAmount?: string;
  sellerBankAddress?: string;
  totalAmount?: string;
  emailStatus?: string;
  receiveUrl?: string;
  createTime?: string;
  sellerBankAccount?: string;
  invoiceSn?: string;
  buyerBankAddress?: string;
  sellerTaxpayerNumber?: string;
  totalTaxAmount?: string;
  buyerTaxpayerNumber?: string;
  status?: number;
}

export class QueryInvoiceVO$InvoiceRecordsListVO {
  constructor(params: IQueryInvoiceVO$InvoiceRecordsListVO) {
    this.invoiceTypeName = params.invoiceTypeName;
    this.sellerPhoneNumber = params.sellerPhoneNumber;
    this.orderType = params.orderType;
    this.orderSn = params.orderSn;
    this.buyerBankAccount = params.buyerBankAccount;
    this.sellerAddress = params.sellerAddress;
    this.remark = params.remark;
    this.appCode = params.appCode;
    this.emailStatusName = params.emailStatusName;
    this.payee = params.payee;
    this.buyerAddress = params.buyerAddress;
    this.pdfUrl = params.pdfUrl;
    this.emailAddress = params.emailAddress;
    this.invoiceNumber = params.invoiceNumber;
    this.statusName = params.statusName;
    this.invoiceType = params.invoiceType;
    this.invoiceGoodsDetailVOS = params.invoiceGoodsDetailVOS;
    this.sellerTitle = params.sellerTitle;
    this.taxType = params.taxType;
    this.taxTypeName = params.taxTypeName;
    this.invoiceRequestSn = params.invoiceRequestSn;
    this.machineCode = params.machineCode;
    this.buyerTitle = params.buyerTitle;
    this.drawer = params.drawer;
    this.buyerPhoneNumber = params.buyerPhoneNumber;
    this.reviewer = params.reviewer;
    this.invoiceDate = params.invoiceDate;
    this.invoiceCode = params.invoiceCode;
    this.orderTypeName = params.orderTypeName;
    this.checkCode = params.checkCode;
    this.resultMsg = params.resultMsg;
    this.totalFullAmount = params.totalFullAmount;
    this.sellerBankAddress = params.sellerBankAddress;
    this.totalAmount = params.totalAmount;
    this.emailStatus = params.emailStatus;
    this.receiveUrl = params.receiveUrl;
    this.createTime = params.createTime;
    this.sellerBankAccount = params.sellerBankAccount;
    this.invoiceSn = params.invoiceSn;
    this.buyerBankAddress = params.buyerBankAddress;
    this.sellerTaxpayerNumber = params.sellerTaxpayerNumber;
    this.totalTaxAmount = params.totalTaxAmount;
    this.buyerTaxpayerNumber = params.buyerTaxpayerNumber;
    this.status = params.status;
  }

  invoiceTypeName?: string;
  sellerPhoneNumber?: string;
  orderType?: string;
  orderSn?: string;
  buyerBankAccount?: string;
  sellerAddress?: string;
  remark?: string;
  appCode?: string;
  emailStatusName?: string;
  payee?: string;
  buyerAddress?: string;
  pdfUrl?: string;
  emailAddress?: string;
  invoiceNumber?: number;
  statusName?: string;
  invoiceType?: string;
  invoiceGoodsDetailVOS?: Array<
    QueryInvoiceVO$InvoiceRecordsListVO$InvoiceGoodsDetailVO
  >;
  sellerTitle?: string;
  taxType?: string;
  taxTypeName?: string;
  invoiceRequestSn?: string;
  machineCode?: string;
  buyerTitle?: string;
  drawer?: string;
  buyerPhoneNumber?: string;
  reviewer?: string;
  invoiceDate?: string;
  invoiceCode?: string;
  orderTypeName?: string;
  checkCode?: string;
  resultMsg?: string;
  totalFullAmount?: string;
  sellerBankAddress?: string;
  totalAmount?: string;
  emailStatus?: string;
  receiveUrl?: string;
  createTime?: string;
  sellerBankAccount?: string;
  invoiceSn?: string;
  buyerBankAddress?: string;
  sellerTaxpayerNumber?: string;
  totalTaxAmount?: string;
  buyerTaxpayerNumber?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.invoice.client.response.QueryInvoiceVO$InvoiceRecordsListVO',
      $: {
        invoiceTypeName: java.String(this.invoiceTypeName),
        sellerPhoneNumber: java.String(this.sellerPhoneNumber),
        orderType: java.String(this.orderType),
        orderSn: java.String(this.orderSn),
        buyerBankAccount: java.String(this.buyerBankAccount),
        sellerAddress: java.String(this.sellerAddress),
        remark: java.String(this.remark),
        appCode: java.String(this.appCode),
        emailStatusName: java.String(this.emailStatusName),
        payee: java.String(this.payee),
        buyerAddress: java.String(this.buyerAddress),
        pdfUrl: java.String(this.pdfUrl),
        emailAddress: java.String(this.emailAddress),
        invoiceNumber: java.Long(this.invoiceNumber),
        statusName: java.String(this.statusName),
        invoiceType: java.String(this.invoiceType),
        invoiceGoodsDetailVOS: this.invoiceGoodsDetailVOS
          ? java.List(
              (this.invoiceGoodsDetailVOS || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        sellerTitle: java.String(this.sellerTitle),
        taxType: java.String(this.taxType),
        taxTypeName: java.String(this.taxTypeName),
        invoiceRequestSn: java.String(this.invoiceRequestSn),
        machineCode: java.String(this.machineCode),
        buyerTitle: java.String(this.buyerTitle),
        drawer: java.String(this.drawer),
        buyerPhoneNumber: java.String(this.buyerPhoneNumber),
        reviewer: java.String(this.reviewer),
        invoiceDate: java.String(this.invoiceDate),
        invoiceCode: java.String(this.invoiceCode),
        orderTypeName: java.String(this.orderTypeName),
        checkCode: java.String(this.checkCode),
        resultMsg: java.String(this.resultMsg),
        totalFullAmount: java.String(this.totalFullAmount),
        sellerBankAddress: java.String(this.sellerBankAddress),
        totalAmount: java.String(this.totalAmount),
        emailStatus: java.String(this.emailStatus),
        receiveUrl: java.String(this.receiveUrl),
        createTime: java.String(this.createTime),
        sellerBankAccount: java.String(this.sellerBankAccount),
        invoiceSn: java.String(this.invoiceSn),
        buyerBankAddress: java.String(this.buyerBankAddress),
        sellerTaxpayerNumber: java.String(this.sellerTaxpayerNumber),
        totalTaxAmount: java.String(this.totalTaxAmount),
        buyerTaxpayerNumber: java.String(this.buyerTaxpayerNumber),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
