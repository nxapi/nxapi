import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ICheckAccountFuPermissionRequest {
  accountId?: number;
  merchantCode?: string;
  languageType?: LanguageType;
  fuCode?: string;
  appKey?: string;
  fuType?: string;
}

export class CheckAccountFuPermissionRequest {
  constructor(params: ICheckAccountFuPermissionRequest) {
    this.accountId = params.accountId;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.fuCode = params.fuCode;
    this.appKey = params.appKey;
    this.fuType = params.fuType;
  }

  accountId?: number;
  merchantCode?: string;
  languageType?: LanguageType;
  fuCode?: string;
  appKey?: string;
  fuType?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.CheckAccountFuPermissionRequest',
      $: {
        accountId: java.Long(this.accountId),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        fuCode: java.String(this.fuCode),
        appKey: java.String(this.appKey),
        fuType: java.String(this.fuType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
