import { NewsShowVO } from './NewsShowVO';
import java from 'js-to-java';

export interface ITopNewsVO {
  oyoNews?: Array<NewsShowVO>;
  tradeNews?: Array<NewsShowVO>;
}

export class TopNewsVO {
  constructor(params: ITopNewsVO) {
    this.oyoNews = params.oyoNews;
    this.tradeNews = params.tradeNews;
  }

  oyoNews?: Array<NewsShowVO>;
  tradeNews?: Array<NewsShowVO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.TopNewsVO',
      $: {
        oyoNews: this.oyoNews
          ? java.List(
              (this.oyoNews || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        tradeNews: this.tradeNews
          ? java.List(
              (this.tradeNews || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
