import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountBatchQuery {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  accountIds?: Array<number>;
  available?: boolean;
  usercodes?: Array<number>;
  appKey?: string;
}

export class AccountBatchQuery {
  constructor(params: IAccountBatchQuery) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.accountIds = params.accountIds;
    this.available = params.available;
    this.usercodes = params.usercodes;
    this.appKey = params.appKey;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  accountIds?: Array<number>;
  available?: boolean;
  usercodes?: Array<number>;
  appKey?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.AccountBatchQuery',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        accountIds: this.accountIds
          ? java.List(
              (this.accountIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        available: java.Boolean(this.available),
        usercodes: this.usercodes
          ? java.List(
              (this.usercodes || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
