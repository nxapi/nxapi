import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ILoginRequest {
  accountId?: number;
  merchantCode?: string;
  password?: string;
  languageType?: LanguageType;
  loginType?: string;
  phone?: string;
  channel?: string;
  appKey?: string;
  email?: string;
  platform?: string;
  username?: string;
  verificationCode?: string;
}

export class LoginRequest {
  constructor(params: ILoginRequest) {
    this.accountId = params.accountId;
    this.merchantCode = params.merchantCode;
    this.password = params.password;
    this.languageType = params.languageType;
    this.loginType = params.loginType;
    this.phone = params.phone;
    this.channel = params.channel;
    this.appKey = params.appKey;
    this.email = params.email;
    this.platform = params.platform;
    this.username = params.username;
    this.verificationCode = params.verificationCode;
  }

  accountId?: number;
  merchantCode?: string;
  password?: string;
  languageType?: LanguageType;
  loginType?: string;
  phone?: string;
  channel?: string;
  appKey?: string;
  email?: string;
  platform?: string;
  username?: string;
  verificationCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.LoginRequest',
      $: {
        accountId: java.Long(this.accountId),
        merchantCode: java.String(this.merchantCode),
        password: java.String(this.password),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        loginType: java.String(this.loginType),
        phone: java.String(this.phone),
        channel: java.String(this.channel),
        appKey: java.String(this.appKey),
        email: java.String(this.email),
        platform: java.String(this.platform),
        username: java.String(this.username),
        verificationCode: java.String(this.verificationCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
