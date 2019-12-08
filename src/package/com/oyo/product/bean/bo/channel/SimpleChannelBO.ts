import java from 'js-to-java';

export interface ISimpleChannelBO {
  channelAlias?: string;
  channelName?: string;
  channelId?: number;
}

export class SimpleChannelBO {
  constructor(params: ISimpleChannelBO) {
    this.channelAlias = params.channelAlias;
    this.channelName = params.channelName;
    this.channelId = params.channelId;
  }

  channelAlias?: string;
  channelName?: string;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.SimpleChannelBO',
      $: {
        channelAlias: java.String(this.channelAlias),
        channelName: java.String(this.channelName),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
