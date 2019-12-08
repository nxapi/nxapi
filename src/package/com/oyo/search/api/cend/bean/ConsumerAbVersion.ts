import java from 'js-to-java';

export interface IConsumerAbVersion {
  sortWeight?: number;
}

export class ConsumerAbVersion {
  constructor(params: IConsumerAbVersion) {
    this.sortWeight = params.sortWeight;
  }

  sortWeight?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.ConsumerAbVersion',
      $: {sortWeight: java.Integer(this.sortWeight)},
    };
  }
}

//generate by interpret-cli dubbo2.js
