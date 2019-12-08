import java from 'js-to-java';

export interface IConstantDto {
  name?: string;
  type?: string;
  value?: string;
  key?: string;
  desc?: string;
}

export class ConstantDto {
  constructor(params: IConstantDto) {
    this.name = params.name;
    this.type = params.type;
    this.value = params.value;
    this.key = params.key;
    this.desc = params.desc;
  }

  name?: string;
  type?: string;
  value?: string;
  key?: string;
  desc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.ops.facade.bean.dto.ConstantDto',
      $: {
        name: java.String(this.name),
        type: java.String(this.type),
        value: java.String(this.value),
        key: java.String(this.key),
        desc: java.String(this.desc),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
