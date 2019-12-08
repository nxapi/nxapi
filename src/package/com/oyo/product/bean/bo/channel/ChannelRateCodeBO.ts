import { RateCodeBO } from './RateCodeBO';
import java from 'js-to-java';

export interface IChannelRateCodeBO {
  channelName?: string;
  rateCodes?: Array<RateCodeBO>;
  channelId?: number;
  channelCode?: string;
  status?: number;
}

export class ChannelRateCodeBO {
  constructor(params: IChannelRateCodeBO) {
    this.channelName = params.channelName;
    this.rateCodes = params.rateCodes;
    this.channelId = params.channelId;
    this.channelCode = params.channelCode;
    this.status = params.status;
  }

  channelName?: string;
  rateCodes?: Array<RateCodeBO>;
  channelId?: number;
  channelCode?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.ChannelRateCodeBO',
      $: {
        channelName: java.String(this.channelName),
        rateCodes: this.rateCodes
          ? java.List(
              (this.rateCodes || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        channelId: java.Long(this.channelId),
        channelCode: java.String(this.channelCode),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
