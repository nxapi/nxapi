import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IImageQuery {
  merchantCode?: string;
  languageType?: LanguageType;
  appKey?: string;
  idList?: Array<number>;
}

export class ImageQuery {
  constructor(params: IImageQuery) {
    this.merchantCode = params.merchantCode;
    this.languageType = params.languageType;
    this.appKey = params.appKey;
    this.idList = params.idList;
  }

  merchantCode?: string;
  languageType?: LanguageType;
  appKey?: string;
  idList?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.ImageQuery',
      $: {
        merchantCode: java.String(this.merchantCode),
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        appKey: java.String(this.appKey),
        idList: this.idList
          ? java.List(
              (this.idList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
