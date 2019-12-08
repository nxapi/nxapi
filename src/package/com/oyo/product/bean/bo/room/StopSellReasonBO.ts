import java from 'js-to-java';

export interface IStopSellReasonBO {
  code?: number;
  content?: string;
}

export class StopSellReasonBO {
  constructor(params: IStopSellReasonBO) {
    this.code = params.code;
    this.content = params.content;
  }

  code?: number;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.room.StopSellReasonBO',
      $: {code: java.Integer(this.code), content: java.String(this.content)},
    };
  }
}

//generate by interpret-cli dubbo2.js
