import java from 'js-to-java';

export interface ISimpleSort {}

export class SimpleSort {
  constructor(params: ISimpleSort) {}

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.generic.dsl.SimpleSort',
      $: {},
    };
  }
}

//generate by interpret-cli dubbo2.js
