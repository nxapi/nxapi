import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ITicketRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  ticket?: string;
  phone?: string;
  newPassword?: string;
  appKey?: string;
  verificationCode?: string;
}

export class TicketRequest {
  constructor(params: ITicketRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.ticket = params.ticket;
    this.phone = params.phone;
    this.newPassword = params.newPassword;
    this.appKey = params.appKey;
    this.verificationCode = params.verificationCode;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  ticket?: string;
  phone?: string;
  newPassword?: string;
  appKey?: string;
  verificationCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.TicketRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        ticket: java.String(this.ticket),
        phone: java.String(this.phone),
        newPassword: java.String(this.newPassword),
        appKey: java.String(this.appKey),
        verificationCode: java.String(this.verificationCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
