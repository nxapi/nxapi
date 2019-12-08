import java from 'js-to-java';

export interface IDemoDto {
  name?: string;
  id?: number;
}

export class DemoDto {
  constructor(params: IDemoDto) {
    this.name = params.name;
    this.id = params.id;
  }

  name?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.DemoDto',
      $: {name: java.String(this.name), id: java.Long(this.id)},
    };
  }
}

//generate by interpret-cli dubbo2.js
