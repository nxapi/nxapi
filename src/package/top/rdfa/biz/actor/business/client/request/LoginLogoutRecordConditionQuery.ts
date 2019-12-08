import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ILoginLogoutRecordConditionQuery {
  merchantCode?: string;
  languageType?: LanguageType;
  corporationId?: number;
  ticket?: string;
  accountName?: string;
  ip?: string;
  resultCode?: string;
  channel?: string;
  pageSize?: number;
  searchKey?: string;
  type?: string;
  pageNum?: number;
  deviceId?: string;
  platform?: string;
  positionName?: string;
  queryAction?: string;
  accountEmail?: string;
  accountPhone?: string;
  positionId?: number;
  accountIds?: Array<number>;
  extra?: string;
  appKey?: string;
  startTime?: string;
  endTime?: string;
}

export class LoginLogoutRecordConditionQuery {
  constructor(params: ILoginLogoutRecordConditionQuery) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.corporationId = params.corporationId;
    this.ticket = params.ticket;
    this.accountName = params.accountName;
    this.ip = params.ip;
    this.resultCode = params.resultCode;
    this.channel = params.channel;
    this.pageSize = params.pageSize;
    this.searchKey = params.searchKey;
    this.type = params.type;
    this.pageNum = params.pageNum;
    this.deviceId = params.deviceId;
    this.platform = params.platform;
    this.positionName = params.positionName;
    this.queryAction = params.queryAction;
    this.accountEmail = params.accountEmail;
    this.accountPhone = params.accountPhone;
    this.positionId = params.positionId;
    this.accountIds = params.accountIds;
    this.extra = params.extra;
    this.appKey = params.appKey;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  corporationId?: number;
  ticket?: string;
  accountName?: string;
  ip?: string;
  resultCode?: string;
  channel?: string;
  pageSize?: number;
  searchKey?: string;
  type?: string;
  pageNum?: number;
  deviceId?: string;
  platform?: string;
  positionName?: string;
  queryAction?: string;
  accountEmail?: string;
  accountPhone?: string;
  positionId?: number;
  accountIds?: Array<number>;
  extra?: string;
  appKey?: string;
  startTime?: string;
  endTime?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.LoginLogoutRecordConditionQuery',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        corporationId: java.Long(this.corporationId),
        ticket: java.String(this.ticket),
        accountName: java.String(this.accountName),
        ip: java.String(this.ip),
        resultCode: java.String(this.resultCode),
        channel: java.String(this.channel),
        pageSize: java.Integer(this.pageSize),
        searchKey: java.String(this.searchKey),
        type: java.String(this.type),
        pageNum: java.Integer(this.pageNum),
        deviceId: java.String(this.deviceId),
        platform: java.String(this.platform),
        positionName: java.String(this.positionName),
        queryAction: java.String(this.queryAction),
        accountEmail: java.String(this.accountEmail),
        accountPhone: java.String(this.accountPhone),
        positionId: java.Long(this.positionId),
        accountIds: this.accountIds
          ? java.List(
              (this.accountIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        extra: java.String(this.extra),
        appKey: java.String(this.appKey),
        startTime: java.String(this.startTime),
        endTime: java.String(this.endTime),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
