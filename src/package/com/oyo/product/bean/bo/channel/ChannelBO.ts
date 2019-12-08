import java from 'js-to-java';

export interface IChannelBO {
  serviceAmountCalculate?: number;
  serviceAmountRatio?: {value: string};
  oldOtaId?: number;
  isCrsOrder?: number;
  isOnline?: string;
  channelAlias?: string;
  oldChannelId?: number;
  channelName?: string;
  isDirect?: number;
  serviceAmountType?: number;
  channelId?: number;
  channelCode?: string;
  status?: number;
}

export class ChannelBO {
  constructor(params: IChannelBO) {
    this.serviceAmountCalculate = params.serviceAmountCalculate;
    this.serviceAmountRatio = params.serviceAmountRatio;
    this.oldOtaId = params.oldOtaId;
    this.isCrsOrder = params.isCrsOrder;
    this.isOnline = params.isOnline;
    this.channelAlias = params.channelAlias;
    this.oldChannelId = params.oldChannelId;
    this.channelName = params.channelName;
    this.isDirect = params.isDirect;
    this.serviceAmountType = params.serviceAmountType;
    this.channelId = params.channelId;
    this.channelCode = params.channelCode;
    this.status = params.status;
  }

  serviceAmountCalculate?: number;
  serviceAmountRatio?: {value: string};
  oldOtaId?: number;
  isCrsOrder?: number;
  isOnline?: string;
  channelAlias?: string;
  oldChannelId?: number;
  channelName?: string;
  isDirect?: number;
  serviceAmountType?: number;
  channelId?: number;
  channelCode?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.ChannelBO',
      $: {
        serviceAmountCalculate: java.Integer(this.serviceAmountCalculate),
        serviceAmountRatio: this.serviceAmountRatio
          ? java.BigDecimal(this.serviceAmountRatio.value)
          : null,
        oldOtaId: java.Integer(this.oldOtaId),
        isCrsOrder: java.Integer(this.isCrsOrder),
        isOnline: java.String(this.isOnline),
        channelAlias: java.String(this.channelAlias),
        oldChannelId: java.Integer(this.oldChannelId),
        channelName: java.String(this.channelName),
        isDirect: java.Integer(this.isDirect),
        serviceAmountType: java.Integer(this.serviceAmountType),
        channelId: java.Long(this.channelId),
        channelCode: java.String(this.channelCode),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
