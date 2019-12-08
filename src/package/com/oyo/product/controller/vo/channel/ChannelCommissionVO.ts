import java from 'js-to-java';

export interface IChannelCommissionVO {
  applyType?: number;
  channelName?: string;
  value?: {value: string};
  channelId?: number;
  status?: number;
}

export class ChannelCommissionVO {
  constructor(params: IChannelCommissionVO) {
    this.applyType = params.applyType;
    this.channelName = params.channelName;
    this.value = params.value;
    this.channelId = params.channelId;
    this.status = params.status;
  }

  applyType?: number;
  channelName?: string;
  value?: {value: string};
  channelId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.channel.ChannelCommissionVO',
      $: {
        applyType: java.Integer(this.applyType),
        channelName: java.String(this.channelName),
        value: this.value ? java.BigDecimal(this.value.value) : null,
        channelId: java.Long(this.channelId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
