import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IThirdAccountBatchUpdateRequest {
  updateAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  ids?: Array<number>;
  appKey?: string;
  status?: string;
}

export class ThirdAccountBatchUpdateRequest {
  constructor(params: IThirdAccountBatchUpdateRequest) {
    this.updateAction = params.updateAction;
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.ids = params.ids;
    this.appKey = params.appKey;
    this.status = params.status;
  }

  updateAction?: string;
  merchantCode?: string;
  languageType?: LanguageType;
  ids?: Array<number>;
  appKey?: string;
  status?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.request.ThirdAccountBatchUpdateRequest',
      $: {
        updateAction: java.String(this.updateAction),
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
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
