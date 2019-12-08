import { LanguageType } from './../enums/LanguageType';
import { UpdateAccountStatusRequest } from './UpdateAccountStatusRequest';
import java from 'js-to-java';

export interface IBatchUpdateAccountRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  updateAccountStatusRequests?: Array<UpdateAccountStatusRequest>;
  modifierId?: number;
  appKey?: string;
}

export class BatchUpdateAccountRequest {
  constructor(params: IBatchUpdateAccountRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.updateAccountStatusRequests = params.updateAccountStatusRequests;
    this.modifierId = params.modifierId;
    this.appKey = params.appKey;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  updateAccountStatusRequests?: Array<UpdateAccountStatusRequest>;
  modifierId?: number;
  appKey?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.BatchUpdateAccountRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        updateAccountStatusRequests: this.updateAccountStatusRequests
          ? java.List(
              (this.updateAccountStatusRequests || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        modifierId: java.Long(this.modifierId),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
