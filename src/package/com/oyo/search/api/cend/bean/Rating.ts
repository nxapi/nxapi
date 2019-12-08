import java from 'js-to-java';

export interface IRating {
  count?: number;
  value?: string;
}

export class Rating {
  constructor(params: IRating) {
    this.count = params.count;
    this.value = params.value;
  }

  count?: number;
  value?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.Rating',
      $: {count: java.Integer(this.count), value: java.String(this.value)},
    };
  }
}

//generate by interpret-cli dubbo2.js
