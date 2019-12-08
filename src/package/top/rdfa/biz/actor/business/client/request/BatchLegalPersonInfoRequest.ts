import { LanguageType } from './../enums/LanguageType';
import { LegalPersonCreateInfoRequest } from './LegalPersonCreateInfoRequest';
import java from 'js-to-java';

export interface IBatchLegalPersonInfoRequest {
  merchantCode?: string;
  languageType?: LanguageType;
  creatorId?: number;
  appKey?: string;
  legalPersonCreateInfoRequestList?: Array<LegalPersonCreateInfoRequest>;
}

export class BatchLegalPersonInfoRequest {
  constructor(params: IBatchLegalPersonInfoRequest) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.creatorId = params.creatorId;
    this.appKey = params.appKey;
    this.legalPersonCreateInfoRequestList =
      params.legalPersonCreateInfoRequestList;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  creatorId?: number;
  appKey?: string;
  legalPersonCreateInfoRequestList?: Array<LegalPersonCreateInfoRequest>;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.BatchLegalPersonInfoRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        creatorId: java.Long(this.creatorId),
        appKey: java.String(this.appKey),
        legalPersonCreateInfoRequestList: this.legalPersonCreateInfoRequestList
          ? java.List(
              (this.legalPersonCreateInfoRequestList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
