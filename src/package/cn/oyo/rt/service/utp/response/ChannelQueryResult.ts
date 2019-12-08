import java from 'js-to-java';

export interface IChannelQueryResult {
  skuName?: string;
  merchantId?: number;
  channelName?: string;
  skuCode?: string;
  status?: number;
  channelCode?: string;
}

export class ChannelQueryResult {
  constructor(params: IChannelQueryResult) {
    this.skuName = params.skuName;
    this.merchantId = params.merchantId;
    this.channelName = params.channelName;
    this.skuCode = params.skuCode;
    this.status = params.status;
    this.channelCode = params.channelCode;
  }

  skuName?: string;
  merchantId?: number;
  channelName?: string;
  skuCode?: string;
  status?: number;
  channelCode?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.utp.response.ChannelQueryResult',
      $: {
        skuName: java.String(this.skuName),
        merchantId: java.Long(this.merchantId),
        channelName: java.String(this.channelName),
        skuCode: java.String(this.skuCode),
        status: java.Integer(this.status),
        channelCode: java.String(this.channelCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
