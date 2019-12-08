import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ICheckAccountDataPermissionRequest {
  accountId?: number;
  merchantCode?: string;
  languageType?: LanguageType;
  dataType?: string;
  appKey?: string;
  dataGroupCode?: string;
  dataCode?: string;
}

export class CheckAccountDataPermissionRequest {
  constructor(params: ICheckAccountDataPermissionRequest) {
    this.accountId = params.accountId;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.dataType = params.dataType;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.dataCode = params.dataCode;
  }

  accountId?: number;
  merchantCode?: string;
  languageType?: LanguageType;
  dataType?: string;
  appKey?: string;
  dataGroupCode?: string;
  dataCode?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.CheckAccountDataPermissionRequest',
      $: {
        accountId: java.Long(this.accountId),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        dataType: java.String(this.dataType),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        dataCode: java.String(this.dataCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
