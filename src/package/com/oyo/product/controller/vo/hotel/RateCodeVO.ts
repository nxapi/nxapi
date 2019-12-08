import java from 'js-to-java';

export interface IRateCodeVO {
  channelList?: Array<string>;
  isSupport?: string;
  rateCodeId?: number;
  rateCodeName?: string;
  rateCodeDesc?: string;
}

export class RateCodeVO {
  constructor(params: IRateCodeVO) {
    this.channelList = params.channelList;
    this.isSupport = params.isSupport;
    this.rateCodeId = params.rateCodeId;
    this.rateCodeName = params.rateCodeName;
    this.rateCodeDesc = params.rateCodeDesc;
  }

  channelList?: Array<string>;
  isSupport?: string;
  rateCodeId?: number;
  rateCodeName?: string;
  rateCodeDesc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.RateCodeVO',
      $: {
        channelList: this.channelList
          ? java.List(
              (this.channelList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        isSupport: java.String(this.isSupport),
        rateCodeId: java.Long(this.rateCodeId),
        rateCodeName: java.String(this.rateCodeName),
        rateCodeDesc: java.String(this.rateCodeDesc),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
