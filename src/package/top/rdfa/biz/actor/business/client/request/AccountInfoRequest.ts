import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountInfoRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  accountIdList?: Array<number>;
  pageSize?: number;
  appKey?: string;
  pageNum?: number;
}

export class AccountInfoRequest {
  constructor(params: IAccountInfoRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.accountIdList = params.accountIdList;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.pageNum = params.pageNum;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  accountIdList?: Array<number>;
  pageSize?: number;
  appKey?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.AccountInfoRequest',
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
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
