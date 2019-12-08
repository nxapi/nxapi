import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountBasicRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  ticket?: string;
  accountName?: string;
  oldPassword?: string;
  accountType?: string;
  pageSize?: number;
  pageNum?: number;
  verificationCode?: string;
  updateAction?: string;
  accountId?: number;
  password?: string;
  phone?: string;
  extra?: {[name: string]: Object};
  appKey?: string;
  email?: string;
}

export class AccountBasicRequest {
  constructor(params: IAccountBasicRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.ticket = params.ticket;
    this.accountName = params.accountName;
    this.oldPassword = params.oldPassword;
    this.accountType = params.accountType;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
    this.verificationCode = params.verificationCode;
    this.updateAction = params.updateAction;
    this.accountId = params.accountId;
    this.password = params.password;
    this.phone = params.phone;
    this.extra = params.extra;
    this.appKey = params.appKey;
    this.email = params.email;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  ticket?: string;
  accountName?: string;
  oldPassword?: string;
  accountType?: string;
  pageSize?: number;
  pageNum?: number;
  verificationCode?: string;
  updateAction?: string;
  accountId?: number;
  password?: string;
  phone?: string;
  extra?: {[name: string]: Object};
  appKey?: string;
  email?: string;

  __fields2java(): any {
    let extraMapTransfer = new Map();
    for (let mapKey in this.extra) {
      extraMapTransfer.set(
        java.String(mapKey),
        this.extra[mapKey] && this.extra[mapKey]['__fields2java']
          ? this.extra[mapKey]['__fields2java']()
          : this.extra[mapKey],
      );
    }
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.AccountBasicRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        ticket: java.String(this.ticket),
        accountName: java.String(this.accountName),
        oldPassword: java.String(this.oldPassword),
        accountType: java.String(this.accountType),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
        verificationCode: java.String(this.verificationCode),
        updateAction: java.String(this.updateAction),
        accountId: java.Long(this.accountId),
        password: java.String(this.password),
        phone: java.String(this.phone),
        extra: java.Map(extraMapTransfer),
        appKey: java.String(this.appKey),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
