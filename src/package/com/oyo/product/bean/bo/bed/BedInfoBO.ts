import java from 'js-to-java';

export interface IBedInfoBO {
  code?: string;
  size?: string;
  name?: string;
  id?: number;
}

export class BedInfoBO {
  constructor(params: IBedInfoBO) {
    this.code = params.code;
    this.size = params.size;
    this.name = params.name;
    this.id = params.id;
  }

  code?: string;
  size?: string;
  name?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.bed.BedInfoBO',
      $: {
        code: java.String(this.code),
        size: java.String(this.size),
        name: java.String(this.name),
        id: java.Long(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
