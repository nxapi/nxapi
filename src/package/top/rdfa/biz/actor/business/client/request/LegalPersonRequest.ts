import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface ILegalPersonRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  pageSize?: number;
  appKey?: string;
  userCodeList?: Array<number>;
  pageNum?: number;
}

export class LegalPersonRequest {
  constructor(params: ILegalPersonRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.userCodeList = params.userCodeList;
    this.pageNum = params.pageNum;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  pageSize?: number;
  appKey?: string;
  userCodeList?: Array<number>;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.LegalPersonRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        userCodeList: this.userCodeList
          ? java.List(
              (this.userCodeList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
