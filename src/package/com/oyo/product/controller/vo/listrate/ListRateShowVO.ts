import { RateInfo } from './RateInfo';
import java from 'js-to-java';

export interface IListRateShowVO {
  rateList?: Array<RateInfo>;
  lastEditDate?: string;
}

export class ListRateShowVO {
  constructor(params: IListRateShowVO) {
    this.rateList = params.rateList;
    this.lastEditDate = params.lastEditDate;
  }

  rateList?: Array<RateInfo>;
  lastEditDate?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.listrate.ListRateShowVO',
      $: {
        rateList: this.rateList
          ? java.List(
              (this.rateList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        lastEditDate: java.String(this.lastEditDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
