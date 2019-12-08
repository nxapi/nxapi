import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IDictionaryRequest {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  dictGroup?: string;
  keys?: Array<string>;
  appKey?: string;
}

export class DictionaryRequest {
  constructor(params: IDictionaryRequest) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.dictGroup = params.dictGroup;
    this.keys = params.keys;
    this.appKey = params.appKey;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  dictGroup?: string;
  keys?: Array<string>;
  appKey?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.DictionaryRequest',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        dictGroup: java.String(this.dictGroup),
        keys: this.keys
          ? java.List(
              (this.keys || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
