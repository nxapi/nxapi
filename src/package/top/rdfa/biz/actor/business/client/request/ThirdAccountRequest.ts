import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IThirdAccountRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  openId?: string;
  index3?: string;
  pageSize?: number;
  index2?: string;
  index4?: string;
  type?: string;
  pageNum?: number;
  updateAction?: string;
  accountId?: number;
  phone?: string;
  uk?: string;
  index1?: string;
  appId?: string;
  name?: string;
  appKey?: string;
  id?: number;
  userType?: string;
  status?: string;
  full?: string;
}

export class ThirdAccountRequest {
  constructor(params: IThirdAccountRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.openId = params.openId;
    this.index3 = params.index3;
    this.pageSize = params.pageSize;
    this.index2 = params.index2;
    this.index4 = params.index4;
    this.type = params.type;
    this.pageNum = params.pageNum;
    this.updateAction = params.updateAction;
    this.accountId = params.accountId;
    this.phone = params.phone;
    this.uk = params.uk;
    this.index1 = params.index1;
    this.appId = params.appId;
    this.name = params.name;
    this.appKey = params.appKey;
    this.id = params.id;
    this.userType = params.userType;
    this.status = params.status;
    this.full = params.full;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  openId?: string;
  index3?: string;
  pageSize?: number;
  index2?: string;
  index4?: string;
  type?: string;
  pageNum?: number;
  updateAction?: string;
  accountId?: number;
  phone?: string;
  uk?: string;
  index1?: string;
  appId?: string;
  name?: string;
  appKey?: string;
  id?: number;
  userType?: string;
  status?: string;
  full?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.ThirdAccountRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        openId: java.String(this.openId),
        index3: java.String(this.index3),
        pageSize: java.Integer(this.pageSize),
        index2: java.String(this.index2),
        index4: java.String(this.index4),
        type: java.String(this.type),
        pageNum: java.Integer(this.pageNum),
        updateAction: java.String(this.updateAction),
        accountId: java.Long(this.accountId),
        phone: java.String(this.phone),
        uk: java.String(this.uk),
        index1: java.String(this.index1),
        appId: java.String(this.appId),
        name: java.String(this.name),
        appKey: java.String(this.appKey),
        id: java.Long(this.id),
        userType: java.String(this.userType),
        status: java.String(this.status),
        full: java.String(this.full),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
