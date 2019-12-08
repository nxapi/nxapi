import java from 'js-to-java';

export interface IAttribute {
  id?: number;
  value?: string;
}

export class Attribute {
  constructor(params: IAttribute) {
    this.id = params.id;
    this.value = params.value;
  }

  id?: number;
  value?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.common.Attribute',
      $: {id: java.Long(this.id), value: java.String(this.value)},
    };
  }
}

//generate by interpret-cli dubbo2.js
