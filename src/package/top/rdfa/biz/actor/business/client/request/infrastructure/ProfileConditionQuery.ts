import { LanguageType } from './../../enums/LanguageType';
import java from 'js-to-java';

export interface IProfileConditionQuery {
  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  corporationCode?: string;
  pageSize?: number;
  appKey?: string;
  pageNum?: number;
}

export class ProfileConditionQuery {
  constructor(params: IProfileConditionQuery) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.corporationCode = params.corporationCode;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.pageNum = params.pageNum;
  }

  queryAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  corporationCode?: string;
  pageSize?: number;
  appKey?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.infrastructure.ProfileConditionQuery',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        corporationCode: java.String(this.corporationCode),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
