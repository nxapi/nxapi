import java from 'js-to-java';

export interface IFilterMapDTO {
  value?: string;
  key?: string;
}

export class FilterMapDTO {
  constructor(params: IFilterMapDTO) {
    this.value = params.value;
    this.key = params.key;
  }

  value?: string;
  key?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.inventory.dto.FilterMapDTO',
      $: {value: java.String(this.value), key: java.String(this.key)},
    };
  }
}

//generate by interpret-cli dubbo2.js
