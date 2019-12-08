import java from 'js-to-java';

export interface IDemoReq {
  name?: string;
  id?: number;
}

export class DemoReq {
  constructor(params: IDemoReq) {
    this.name = params.name;
    this.id = params.id;
  }

  name?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.request.DemoReq',
      $: {name: java.String(this.name), id: java.Long(this.id)},
    };
  }
}

//generate by interpret-cli dubbo2.js
