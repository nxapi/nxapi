import java from 'js-to-java';

export interface IChannelInfoResponseVO {
  serviceAmountCalculate?: number;
  channelAlias?: string;
  serviceAmountRatio?: {value: string};
  channelName?: string;
  isDirect?: number;
  serviceAmountType?: number;
  channelId?: number;
  channelCode?: string;
}

export class ChannelInfoResponseVO {
  constructor(params: IChannelInfoResponseVO) {
    this.serviceAmountCalculate = params.serviceAmountCalculate;
    this.channelAlias = params.channelAlias;
    this.serviceAmountRatio = params.serviceAmountRatio;
    this.channelName = params.channelName;
    this.isDirect = params.isDirect;
    this.serviceAmountType = params.serviceAmountType;
    this.channelId = params.channelId;
    this.channelCode = params.channelCode;
  }

  serviceAmountCalculate?: number;
  channelAlias?: string;
  serviceAmountRatio?: {value: string};
  channelName?: string;
  isDirect?: number;
  serviceAmountType?: number;
  channelId?: number;
  channelCode?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.channel.ChannelInfoResponseVO',
      $: {
        serviceAmountCalculate: java.Integer(this.serviceAmountCalculate),
        channelAlias: java.String(this.channelAlias),
        serviceAmountRatio: this.serviceAmountRatio
          ? java.BigDecimal(this.serviceAmountRatio.value)
          : null,
        channelName: java.String(this.channelName),
        isDirect: java.Integer(this.isDirect),
        serviceAmountType: java.Integer(this.serviceAmountType),
        channelId: java.Integer(this.channelId),
        channelCode: java.String(this.channelCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
