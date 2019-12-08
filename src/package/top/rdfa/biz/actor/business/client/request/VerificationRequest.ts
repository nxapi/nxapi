import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IVerificationRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  phone?: string;
  countryCode?: string;
  smsNod?: number;
  appKey?: string;
  verificationType?: string;
  verificationKey?: string;
  text?: string;
  email?: string;
  verificationCode?: string;
}

export class VerificationRequest {
  constructor(params: IVerificationRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.phone = params.phone;
    this.countryCode = params.countryCode;
    this.smsNod = params.smsNod;
    this.appKey = params.appKey;
    this.verificationType = params.verificationType;
    this.verificationKey = params.verificationKey;
    this.text = params.text;
    this.email = params.email;
    this.verificationCode = params.verificationCode;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  phone?: string;
  countryCode?: string;
  smsNod?: number;
  appKey?: string;
  verificationType?: string;
  verificationKey?: string;
  text?: string;
  email?: string;
  verificationCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.VerificationRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        phone: java.String(this.phone),
        countryCode: java.String(this.countryCode),
        smsNod: java.Integer(this.smsNod),
        appKey: java.String(this.appKey),
        verificationType: java.String(this.verificationType),
        verificationKey: java.String(this.verificationKey),
        text: java.String(this.text),
        email: java.String(this.email),
        verificationCode: java.String(this.verificationCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
