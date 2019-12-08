import { NaturalPersonCreateInfoRequest } from './NaturalPersonCreateInfoRequest';
import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IBatchNaturalPersonInfoRequest {
  merchantCode?: string;
  naturalPersonCreateInfoRequests?: Array<NaturalPersonCreateInfoRequest>;
  languageType?: LanguageType;
  creatorId?: number;
  appKey?: string;
}

export class BatchNaturalPersonInfoRequest {
  constructor(params: IBatchNaturalPersonInfoRequest) {
    this.merchantCode = params.merchantCode;
    this.naturalPersonCreateInfoRequests =
      params.naturalPersonCreateInfoRequests;
    this.languageType = params.languageType;
    this.creatorId = params.creatorId;
    this.appKey = params.appKey;
  }

  merchantCode?: string;
  naturalPersonCreateInfoRequests?: Array<NaturalPersonCreateInfoRequest>;
  languageType?: LanguageType;
  creatorId?: number;
  appKey?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.BatchNaturalPersonInfoRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        naturalPersonCreateInfoRequests: this.naturalPersonCreateInfoRequests
          ? java.List(
              (this.naturalPersonCreateInfoRequests || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        creatorId: java.Long(this.creatorId),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
