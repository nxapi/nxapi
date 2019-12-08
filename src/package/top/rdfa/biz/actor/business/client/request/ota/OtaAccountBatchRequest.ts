import { LanguageType } from './../../enums/LanguageType';
import { OtaAccountRequest } from './OtaAccountRequest';
import java from 'js-to-java';

export interface IOtaAccountBatchRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  batchAction?: string;
  otaAccountRequests?: Array<OtaAccountRequest>;
  appKey?: string;
}

export class OtaAccountBatchRequest {
  constructor(params: IOtaAccountBatchRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.batchAction = params.batchAction;
    this.otaAccountRequests = params.otaAccountRequests;
    this.appKey = params.appKey;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  batchAction?: string;
  otaAccountRequests?: Array<OtaAccountRequest>;
  appKey?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.ota.OtaAccountBatchRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        batchAction: java.String(this.batchAction),
        otaAccountRequests: this.otaAccountRequests
          ? java.List(
              (this.otaAccountRequests || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
