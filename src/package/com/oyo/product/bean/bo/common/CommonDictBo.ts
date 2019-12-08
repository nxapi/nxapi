import java from 'js-to-java';

export interface ICommonDictBo {
  code?: number;
  desc?: string;
}

export class CommonDictBo {
  constructor(params: ICommonDictBo) {
    this.code = params.code;
    this.desc = params.desc;
  }

  code?: number;
  desc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.CommonDictBo',
      $: {code: java.Integer(this.code), desc: java.String(this.desc)},
    };
  }
}

//generate by interpret-cli dubbo2.js
