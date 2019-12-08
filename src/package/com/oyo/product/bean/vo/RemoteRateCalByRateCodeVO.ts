import java from 'js-to-java';

export interface IRemoteRateCalByRateCodeVO {
  payType?: number;
  rate?: {value: string};
  cancelType?: number;
  rateCodeId?: number;
  rateCodeName?: string;
  checkinType?: number;
}

export class RemoteRateCalByRateCodeVO {
  constructor(params: IRemoteRateCalByRateCodeVO) {
    this.payType = params.payType;
    this.rate = params.rate;
    this.cancelType = params.cancelType;
    this.rateCodeId = params.rateCodeId;
    this.rateCodeName = params.rateCodeName;
    this.checkinType = params.checkinType;
  }

  payType?: number;
  rate?: {value: string};
  cancelType?: number;
  rateCodeId?: number;
  rateCodeName?: string;
  checkinType?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.vo.RemoteRateCalByRateCodeVO',
      $: {
        payType: java.Integer(this.payType),
        rate: this.rate ? java.BigDecimal(this.rate.value) : null,
        cancelType: java.Integer(this.cancelType),
        rateCodeId: java.Long(this.rateCodeId),
        rateCodeName: java.String(this.rateCodeName),
        checkinType: java.Integer(this.checkinType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
