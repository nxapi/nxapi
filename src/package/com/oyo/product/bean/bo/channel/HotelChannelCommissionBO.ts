import java from 'js-to-java';

export interface IHotelChannelCommissionBO {
  applyType?: number;
  channelAlias?: string;
  channelName?: string;
  value?: {value: string};
  channelId?: number;
  status?: number;
}

export class HotelChannelCommissionBO {
  constructor(params: IHotelChannelCommissionBO) {
    this.applyType = params.applyType;
    this.channelAlias = params.channelAlias;
    this.channelName = params.channelName;
    this.value = params.value;
    this.channelId = params.channelId;
    this.status = params.status;
  }

  applyType?: number;
  channelAlias?: string;
  channelName?: string;
  value?: {value: string};
  channelId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.HotelChannelCommissionBO',
      $: {
        applyType: java.Integer(this.applyType),
        channelAlias: java.String(this.channelAlias),
        channelName: java.String(this.channelName),
        value: this.value ? java.BigDecimal(this.value.value) : null,
        channelId: java.Long(this.channelId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
