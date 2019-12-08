import { LanguageType } from './../enums/LanguageType';
import { AccountCreateInfoRequest } from './AccountCreateInfoRequest';
import java from 'js-to-java';

export interface IBatchAccountInfoRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  accountCreateInfoRequestList?: Array<AccountCreateInfoRequest>;
  creatorId?: number;
  appKey?: string;
}

export class BatchAccountInfoRequest {
  constructor(params: IBatchAccountInfoRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.accountCreateInfoRequestList = params.accountCreateInfoRequestList;
    this.creatorId = params.creatorId;
    this.appKey = params.appKey;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  accountCreateInfoRequestList?: Array<AccountCreateInfoRequest>;
  creatorId?: number;
  appKey?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.BatchAccountInfoRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        accountCreateInfoRequestList: this.accountCreateInfoRequestList
          ? java.List(
              (this.accountCreateInfoRequestList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        creatorId: java.Long(this.creatorId),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
