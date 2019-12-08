import java from 'js-to-java';

export interface IBedInfoVO {
  size?: string;
  name?: string;
  count?: number;
  bedInfoStr?: string;
}

export class BedInfoVO {
  constructor(params: IBedInfoVO) {
    this.size = params.size;
    this.name = params.name;
    this.count = params.count;
    this.bedInfoStr = params.bedInfoStr;
  }

  size?: string;
  name?: string;
  count?: number;
  bedInfoStr?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtypeinfo.BedInfoVO',
      $: {
        size: java.String(this.size),
        name: java.String(this.name),
        count: java.Integer(this.count),
        bedInfoStr: java.String(this.bedInfoStr),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
