import java from 'js-to-java';

export interface IRateCodeBO {
  rateCodeId?: number;
  name?: string;
  description?: string;
}

export class RateCodeBO {
  constructor(params: IRateCodeBO) {
    this.rateCodeId = params.rateCodeId;
    this.name = params.name;
    this.description = params.description;
  }

  rateCodeId?: number;
  name?: string;
  description?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.RateCodeBO',
      $: {
        rateCodeId: java.Long(this.rateCodeId),
        name: java.String(this.name),
        description: java.String(this.description),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
