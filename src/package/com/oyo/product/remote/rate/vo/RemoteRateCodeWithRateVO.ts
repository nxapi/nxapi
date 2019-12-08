import java from 'js-to-java';

export interface IRemoteRateCodeWithRateVO {
  checkoutDate?: string;
  rate?: number;
  continuousDay?: number;
  continusUpperDay?: number;
  rateCodeId?: number;
  rateCodeName?: string;
  stableTime?: number;
}

export class RemoteRateCodeWithRateVO {
  constructor(params: IRemoteRateCodeWithRateVO) {
    this.checkoutDate = params.checkoutDate;
    this.rate = params.rate;
    this.continuousDay = params.continuousDay;
    this.continusUpperDay = params.continusUpperDay;
    this.rateCodeId = params.rateCodeId;
    this.rateCodeName = params.rateCodeName;
    this.stableTime = params.stableTime;
  }

  checkoutDate?: string;
  rate?: number;
  continuousDay?: number;
  continusUpperDay?: number;
  rateCodeId?: number;
  rateCodeName?: string;
  stableTime?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.remote.rate.vo.RemoteRateCodeWithRateVO',
      $: {
        checkoutDate: java.String(this.checkoutDate),
        rate: java.Double(this.rate),
        continuousDay: java.Integer(this.continuousDay),
        continusUpperDay: java.Integer(this.continusUpperDay),
        rateCodeId: java.Long(this.rateCodeId),
        rateCodeName: java.String(this.rateCodeName),
        stableTime: java.Integer(this.stableTime),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
