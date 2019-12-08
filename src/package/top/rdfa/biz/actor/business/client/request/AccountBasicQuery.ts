import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountBasicQuery {
  merchantCode?: string;
  hudId?: number;
  languageType?: LanguageType;
  ticket?: string;
  accountName?: string;
  available?: boolean;
  pageSize?: number;
  searchKey?: string;
  pageNum?: number;
  userCode?: number;
  queryAction?: string;
  accountId?: number;
  phone?: string;
  appKey?: string;
  email?: string;
}

export class AccountBasicQuery {
  constructor(params: IAccountBasicQuery) {
    this.merchantCode = params.merchantCode;
    this.hudId = params.hudId;
    this.languageType = params.languageType;
    this.ticket = params.ticket;
    this.accountName = params.accountName;
    this.available = params.available;
    this.pageSize = params.pageSize;
    this.searchKey = params.searchKey;
    this.pageNum = params.pageNum;
    this.userCode = params.userCode;
    this.queryAction = params.queryAction;
    this.accountId = params.accountId;
    this.phone = params.phone;
    this.appKey = params.appKey;
    this.email = params.email;
  }

  merchantCode?: string;
  hudId?: number;
  languageType?: LanguageType;
  ticket?: string;
  accountName?: string;
  available?: boolean;
  pageSize?: number;
  searchKey?: string;
  pageNum?: number;
  userCode?: number;
  queryAction?: string;
  accountId?: number;
  phone?: string;
  appKey?: string;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.AccountBasicQuery',
      $: {
        merchantCode: java.String(this.merchantCode),
        hudId: java.Long(this.hudId),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        ticket: java.String(this.ticket),
        accountName: java.String(this.accountName),
        available: java.Boolean(this.available),
        pageSize: java.Integer(this.pageSize),
        searchKey: java.String(this.searchKey),
        pageNum: java.Integer(this.pageNum),
        userCode: java.Long(this.userCode),
        queryAction: java.String(this.queryAction),
        accountId: java.Long(this.accountId),
        phone: java.String(this.phone),
        appKey: java.String(this.appKey),
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
