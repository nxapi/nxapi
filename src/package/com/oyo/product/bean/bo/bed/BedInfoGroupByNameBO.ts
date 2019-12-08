import { BedInfoBO } from './BedInfoBO';
import java from 'js-to-java';

export interface IBedInfoGroupByNameBO {
  sizeList?: Array<BedInfoBO>;
  name?: string;
}

export class BedInfoGroupByNameBO {
  constructor(params: IBedInfoGroupByNameBO) {
    this.sizeList = params.sizeList;
    this.name = params.name;
  }

  sizeList?: Array<BedInfoBO>;
  name?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.bed.BedInfoGroupByNameBO',
      $: {
        sizeList: this.sizeList
          ? java.List(
              (this.sizeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        name: java.String(this.name),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
