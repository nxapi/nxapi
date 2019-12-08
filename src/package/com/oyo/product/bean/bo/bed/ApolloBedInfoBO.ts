import java from 'js-to-java';

export interface IApolloBedInfoBO {
  bedInfoId?: number;
  count?: number;
}

export class ApolloBedInfoBO {
  constructor(params: IApolloBedInfoBO) {
    this.bedInfoId = params.bedInfoId;
    this.count = params.count;
  }

  bedInfoId?: number;
  count?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.bed.ApolloBedInfoBO',
      $: {
        bedInfoId: java.Long(this.bedInfoId),
        count: java.Integer(this.count),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
