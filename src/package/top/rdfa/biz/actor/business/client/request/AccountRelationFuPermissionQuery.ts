import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IAccountRelationFuPermissionQuery {
  queryAction?: string;
  accountId?: number;
  merchantCode?: string;
  languageType?: LanguageType;
  fuCode?: string;
  dataType?: string;
  appKey?: string;
  dataGroupCode?: string;
  dataCode?: string;
}

export class AccountRelationFuPermissionQuery {
  constructor(params: IAccountRelationFuPermissionQuery) {
    this.queryAction = params.queryAction;
    this.accountId = params.accountId;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.fuCode = params.fuCode;
    this.dataType = params.dataType;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.dataCode = params.dataCode;
  }

  queryAction?: string;
  accountId?: number;
  merchantCode?: string;
  languageType?: LanguageType;
  fuCode?: string;
  dataType?: string;
  appKey?: string;
  dataGroupCode?: string;
  dataCode?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.AccountRelationFuPermissionQuery',
      $: {
        queryAction: java.String(this.queryAction),
        accountId: java.Long(this.accountId),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        fuCode: java.String(this.fuCode),
        dataType: java.String(this.dataType),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        dataCode: java.String(this.dataCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
