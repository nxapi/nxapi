import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IBatchDeleteAccountRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  accountIdList?: Array<number>;
  modifierId?: number;
  appKey?: string;
}

export class BatchDeleteAccountRequest {
  constructor(params: IBatchDeleteAccountRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.accountIdList = params.accountIdList;
    this.modifierId = params.modifierId;
    this.appKey = params.appKey;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  accountIdList?: Array<number>;
  modifierId?: number;
  appKey?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.BatchDeleteAccountRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        accountIdList: this.accountIdList
          ? java.List(
              (this.accountIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        modifierId: java.Long(this.modifierId),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
