import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ICorporationConditionRequest {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  dictKeys?: Array<string>;
  dictGroup?: string;
  appKey?: string;
}

export class CorporationConditionRequest {
  constructor(params: ICorporationConditionRequest) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.dictKeys = params.dictKeys;
    this.dictGroup = params.dictGroup;
    this.appKey = params.appKey;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  dictKeys?: Array<string>;
  dictGroup?: string;
  appKey?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.CorporationConditionRequest',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        dictKeys: this.dictKeys
          ? java.List(
              (this.dictKeys || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        dictGroup: java.String(this.dictGroup),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
