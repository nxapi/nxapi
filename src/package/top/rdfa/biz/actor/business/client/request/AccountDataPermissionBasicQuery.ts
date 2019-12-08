import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountDataPermissionBasicQuery {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  fuCode?: string;
  accountIds?: Array<number>;
  dataType?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  pageNum?: number;
}

export class AccountDataPermissionBasicQuery {
  constructor(params: IAccountDataPermissionBasicQuery) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.fuCode = params.fuCode;
    this.accountIds = params.accountIds;
    this.dataType = params.dataType;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.pageNum = params.pageNum;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  fuCode?: string;
  accountIds?: Array<number>;
  dataType?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.AccountDataPermissionBasicQuery',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        fuCode: java.String(this.fuCode),
        accountIds: this.accountIds
          ? java.List(
              (this.accountIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        dataType: java.String(this.dataType),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
