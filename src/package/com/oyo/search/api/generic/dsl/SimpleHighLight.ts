import java from 'js-to-java';

export interface ISimpleHighLight {}

export class SimpleHighLight {
  constructor(params: ISimpleHighLight) {}

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.generic.dsl.SimpleHighLight',
      $: {},
    };
  }
}

//generate by interpret-cli dubbo2.js
