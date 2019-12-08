import { LanguageType } from './../enums/LanguageType';
import java from 'js-to-java';

export interface IImageRequest {
  merchantCode?: string;
  imageUrlList?: Array<string>;
  languageType?: LanguageType;
  appKey?: string;
}

export class ImageRequest {
  constructor(params: IImageRequest) {
    this.merchantCode = params.merchantCode;
    this.imageUrlList = params.imageUrlList;
    this.languageType = params.languageType;
    this.appKey = params.appKey;
  }

  merchantCode?: string;
  imageUrlList?: Array<string>;
  languageType?: LanguageType;
  appKey?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.request.ImageRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        imageUrlList: this.imageUrlList
          ? java.List(
              (this.imageUrlList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        languageType: java['enum'](
          'top.rdfa.biz.actor.business.client.enums.LanguageType',
          LanguageType[this.languageType],
        ),
        appKey: java.String(this.appKey),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
