import { AccountCreateInfoRequest } from './AccountCreateInfoRequest';
import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IBatchSubmitAccountInfoRequest {
  editInfoRequestList?: Array<AccountCreateInfoRequest>;
  merchantCode?: string;
  languageType?: LanguageType;
  accountIdList?: Array<number>;
  creatorId?: number;
  appKey?: string;
  createInfoRequestList?: Array<AccountCreateInfoRequest>;
}

export class BatchSubmitAccountInfoRequest {
  constructor(params: IBatchSubmitAccountInfoRequest) {
    this.editInfoRequestList = params.editInfoRequestList;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.accountIdList = params.accountIdList;
    this.creatorId = params.creatorId;
    this.appKey = params.appKey;
    this.createInfoRequestList = params.createInfoRequestList;
  }

  editInfoRequestList?: Array<AccountCreateInfoRequest>;
  merchantCode?: string;
  languageType?: LanguageType;
  accountIdList?: Array<number>;
  creatorId?: number;
  appKey?: string;
  createInfoRequestList?: Array<AccountCreateInfoRequest>;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.BatchSubmitAccountInfoRequest',
      $: {
        editInfoRequestList: this.editInfoRequestList
          ? java.List(
              (this.editInfoRequestList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
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
        creatorId: java.Long(this.creatorId),
        appKey: java.String(this.appKey),
        createInfoRequestList: this.createInfoRequestList
          ? java.List(
              (this.createInfoRequestList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
