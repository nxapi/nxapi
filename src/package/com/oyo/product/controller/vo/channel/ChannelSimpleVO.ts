import java from 'js-to-java';

export interface IChannelSimpleVO {
  channelAlias?: string;
  channelName?: string;
  channelId?: number;
}

export class ChannelSimpleVO {
  constructor(params: IChannelSimpleVO) {
    this.channelAlias = params.channelAlias;
    this.channelName = params.channelName;
    this.channelId = params.channelId;
  }

  channelAlias?: string;
  channelName?: string;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.channel.ChannelSimpleVO',
      $: {
        channelAlias: java.String(this.channelAlias),
        channelName: java.String(this.channelName),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
