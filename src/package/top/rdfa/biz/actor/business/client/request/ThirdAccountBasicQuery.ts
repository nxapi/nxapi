import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IThirdAccountBasicQuery {
  updateTimeEnd?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  openId?: string;
  index3?: string;
  pageSize?: number;
  index2?: string;
  index4?: string;
  type?: string;
  updateTimeStart?: string;
  pageNum?: number;
  queryAction?: string;
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
}

export class ThirdAccountBasicQuery {
  constructor(params: IThirdAccountBasicQuery) {
    this.updateTimeEnd = params.updateTimeEnd;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.openId = params.openId;
    this.index3 = params.index3;
    this.pageSize = params.pageSize;
    this.index2 = params.index2;
    this.index4 = params.index4;
    this.type = params.type;
    this.updateTimeStart = params.updateTimeStart;
    this.pageNum = params.pageNum;
    this.queryAction = params.queryAction;
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
  }

  updateTimeEnd?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  openId?: string;
  index3?: string;
  pageSize?: number;
  index2?: string;
  index4?: string;
  type?: string;
  updateTimeStart?: string;
  pageNum?: number;
  queryAction?: string;
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

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.ThirdAccountBasicQuery',
      $: {
        updateTimeEnd: java.String(this.updateTimeEnd),
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
        updateTimeStart: java.String(this.updateTimeStart),
        pageNum: java.Integer(this.pageNum),
        queryAction: java.String(this.queryAction),
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
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
