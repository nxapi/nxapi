import { SimpleChannelBO } from './SimpleChannelBO';
import java from 'js-to-java';

export interface IRateCodeChannelBO {
  channelList?: Array<SimpleChannelBO>;
  rateCodeId?: number;
}

export class RateCodeChannelBO {
  constructor(params: IRateCodeChannelBO) {
    this.channelList = params.channelList;
    this.rateCodeId = params.rateCodeId;
  }

  channelList?: Array<SimpleChannelBO>;
  rateCodeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.RateCodeChannelBO',
      $: {
        channelList: this.channelList
          ? java.List(
              (this.channelList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        rateCodeId: java.Long(this.rateCodeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
