import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IRelationMapConvertRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  convertAction?: string;
  convertType?: string;
  appKey?: string;
  originalConvertCodes?: Array<string>;
  originalConvertItems?: Array<Object>;
}

export class RelationMapConvertRequest {
  constructor(params: IRelationMapConvertRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.convertAction = params.convertAction;
    this.convertType = params.convertType;
    this.appKey = params.appKey;
    this.originalConvertCodes = params.originalConvertCodes;
    this.originalConvertItems = params.originalConvertItems;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  convertAction?: string;
  convertType?: string;
  appKey?: string;
  originalConvertCodes?: Array<string>;
  originalConvertItems?: Array<Object>;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.RelationMapConvertRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        convertAction: java.String(this.convertAction),
        convertType: java.String(this.convertType),
        appKey: java.String(this.appKey),
        originalConvertCodes: this.originalConvertCodes
          ? java.List(
              (this.originalConvertCodes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        originalConvertItems: this.originalConvertItems
          ? java.List(
              (this.originalConvertItems || []).map((paramItem: any) => {
                return paramItem && paramItem['__fields2java']
                  ? paramItem['__fields2java']()
                  : paramItem;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
