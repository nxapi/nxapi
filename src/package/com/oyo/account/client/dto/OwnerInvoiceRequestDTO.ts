import { OwnerInvoiceBillDto } from './OwnerInvoiceBillDto';
import java from 'js-to-java';

export interface IOwnerInvoiceRequestDTO {
  bankAccount?: string;
  titleType?: number;
  orderType?: string;
  address?: string;
  remark?: string;
  appCode?: string;
  openingBank?: string;
  phone?: string;
  billDtoList?: Array<OwnerInvoiceBillDto>;
  invoiceType?: string;
  taxpayerNum?: string;
  invoiceTitle?: string;
  email?: string;
}

export class OwnerInvoiceRequestDTO {
  constructor(params: IOwnerInvoiceRequestDTO) {
    this.bankAccount = params.bankAccount;
    this.titleType = params.titleType;
    this.orderType = params.orderType;
    this.address = params.address;
    this.remark = params.remark;
    this.appCode = params.appCode;
    this.openingBank = params.openingBank;
    this.phone = params.phone;
    this.billDtoList = params.billDtoList;
    this.invoiceType = params.invoiceType;
    this.taxpayerNum = params.taxpayerNum;
    this.invoiceTitle = params.invoiceTitle;
    this.email = params.email;
  }

  bankAccount?: string;
  titleType?: number;
  orderType?: string;
  address?: string;
  remark?: string;
  appCode?: string;
  openingBank?: string;
  phone?: string;
  billDtoList?: Array<OwnerInvoiceBillDto>;
  invoiceType?: string;
  taxpayerNum?: string;
  invoiceTitle?: string;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerInvoiceRequestDTO',
      $: {
        bankAccount: java.String(this.bankAccount),
        titleType: java.Integer(this.titleType),
        orderType: java.String(this.orderType),
        address: java.String(this.address),
        remark: java.String(this.remark),
        appCode: java.String(this.appCode),
        openingBank: java.String(this.openingBank),
        phone: java.String(this.phone),
        billDtoList: this.billDtoList
          ? java.List(
              (this.billDtoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        invoiceType: java.String(this.invoiceType),
        taxpayerNum: java.String(this.taxpayerNum),
        invoiceTitle: java.String(this.invoiceTitle),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
