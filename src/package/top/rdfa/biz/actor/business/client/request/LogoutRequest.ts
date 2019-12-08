import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ILogoutRequest {
  accountId?: number;
  merchantCode?: string;
  logoutType?: string;
  languageType?: LanguageType;
  ticket?: string;
  phone?: string;
  channel?: string;
  appKey?: string;
  platform?: string;
}

export class LogoutRequest {
  constructor(params: ILogoutRequest) {
    this.accountId = params.accountId;
    this.merchantCode = params.merchantCode;
    this.logoutType = params.logoutType;
    this.languageType = params.languageType;
    this.ticket = params.ticket;
    this.phone = params.phone;
    this.channel = params.channel;
    this.appKey = params.appKey;
    this.platform = params.platform;
  }

  accountId?: number;
  merchantCode?: string;
  logoutType?: string;
  languageType?: LanguageType;
  ticket?: string;
  phone?: string;
  channel?: string;
  appKey?: string;
  platform?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.LogoutRequest',
      $: {
        accountId: java.Long(this.accountId),
        merchantCode: java.String(this.merchantCode),
        logoutType: java.String(this.logoutType),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        ticket: java.String(this.ticket),
        phone: java.String(this.phone),
        channel: java.String(this.channel),
        appKey: java.String(this.appKey),
        platform: java.String(this.platform),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
