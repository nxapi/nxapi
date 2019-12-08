import java from 'js-to-java';

export interface IAbVersion {
  sortWeight?: number;
}

export class AbVersion {
  constructor(params: IAbVersion) {
    this.sortWeight = params.sortWeight;
  }

  sortWeight?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.AbVersion',
      $: {sortWeight: java.Integer(this.sortWeight)},
    };
  }
}

//generate by interpret-cli dubbo2.js
