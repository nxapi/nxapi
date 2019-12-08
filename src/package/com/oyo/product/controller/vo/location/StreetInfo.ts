import java from 'js-to-java';

export interface IStreetInfo {
  name?: string;
  id?: number;
}

export class StreetInfo {
  constructor(params: IStreetInfo) {
    this.name = params.name;
    this.id = params.id;
  }

  name?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.location.StreetInfo',
      $: {name: java.String(this.name), id: java.Integer(this.id)},
    };
  }
}

//generate by interpret-cli dubbo2.js
