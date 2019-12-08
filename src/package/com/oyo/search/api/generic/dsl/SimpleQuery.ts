import java from 'js-to-java';

export interface ISimpleQuery {}

export class SimpleQuery {
  constructor(params: ISimpleQuery) {}

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.generic.dsl.SimpleQuery',
      $: {},
    };
  }
}

//generate by interpret-cli dubbo2.js
