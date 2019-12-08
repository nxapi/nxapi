import java from 'js-to-java';

export interface IRemoteSimpleRateCodeNameVO {
  rateCodeId?: number;
  description?: string;
  rateCodeName?: string;
}

export class RemoteSimpleRateCodeNameVO {
  constructor(params: IRemoteSimpleRateCodeNameVO) {
    this.rateCodeId = params.rateCodeId;
    this.description = params.description;
    this.rateCodeName = params.rateCodeName;
  }

  rateCodeId?: number;
  description?: string;
  rateCodeName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.remote.rate.vo.RemoteSimpleRateCodeNameVO',
      $: {
        rateCodeId: java.Long(this.rateCodeId),
        description: java.String(this.description),
        rateCodeName: java.String(this.rateCodeName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
