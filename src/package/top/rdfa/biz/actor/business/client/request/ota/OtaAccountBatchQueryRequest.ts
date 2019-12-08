import { LanguageType } from './../../enums/LanguageType';
import java from 'js-to-java';

export interface IOtaAccountBatchQueryRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  ids?: Array<number>;
  appKey?: string;
  type?: string;
  queryType?: string;
  status?: string;
}

export class OtaAccountBatchQueryRequest {
  constructor(params: IOtaAccountBatchQueryRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.ids = params.ids;
    this.appKey = params.appKey;
    this.type = params.type;
    this.queryType = params.queryType;
    this.status = params.status;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  ids?: Array<number>;
  appKey?: string;
  type?: string;
  queryType?: string;
  status?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.ota.OtaAccountBatchQueryRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        ids: this.ids
          ? java.List(
              (this.ids || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        appKey: java.String(this.appKey),
        type: java.String(this.type),
        queryType: java.String(this.queryType),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
