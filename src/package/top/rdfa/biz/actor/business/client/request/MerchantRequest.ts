import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IMerchantRequest {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  appKey?: string;
}

export class MerchantRequest {
  constructor(params: IMerchantRequest) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.appKey = params.appKey;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  appKey?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.MerchantRequest',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
