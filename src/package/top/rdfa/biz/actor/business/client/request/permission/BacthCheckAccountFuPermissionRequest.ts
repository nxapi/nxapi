import { LanguageType } from './../../enums/LanguageType';
import java from 'js-to-java';

export interface IBacthCheckAccountFuPermissionRequest {
  accountId?: number;
  fuCodes?: Array<string>;
  merchantCode?: string;
  languageType?: LanguageType;
  appKey?: string;
  fuType?: string;
}

export class BacthCheckAccountFuPermissionRequest {
  constructor(params: IBacthCheckAccountFuPermissionRequest) {
    this.accountId = params.accountId;
    this.fuCodes = params.fuCodes;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.appKey = params.appKey;
    this.fuType = params.fuType;
  }

  accountId?: number;
  fuCodes?: Array<string>;
  merchantCode?: string;
  languageType?: LanguageType;
  appKey?: string;
  fuType?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.permission.BacthCheckAccountFuPermissionRequest',
      $: {
        accountId: java.Long(this.accountId),
        fuCodes: this.fuCodes
          ? java.List(
              (this.fuCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        appKey: java.String(this.appKey),
        fuType: java.String(this.fuType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
