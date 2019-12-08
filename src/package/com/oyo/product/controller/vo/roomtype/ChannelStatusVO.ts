import java from 'js-to-java';

export interface IChannelStatusVO {
  configuredTime?: string;
  channelName?: string;
  startTime?: Date;
  configStatus?: string;
  endTime?: Date;
  channelId?: number;
  status?: string;
}

export class ChannelStatusVO {
  constructor(params: IChannelStatusVO) {
    this.configuredTime = params.configuredTime;
    this.channelName = params.channelName;
    this.startTime = params.startTime;
    this.configStatus = params.configStatus;
    this.endTime = params.endTime;
    this.channelId = params.channelId;
    this.status = params.status;
  }

  configuredTime?: string;
  channelName?: string;
  startTime?: Date;
  configStatus?: string;
  endTime?: Date;
  channelId?: number;
  status?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.ChannelStatusVO',
      $: {
        configuredTime: java.String(this.configuredTime),
        channelName: java.String(this.channelName),
        startTime: this.startTime,
        configStatus: java.String(this.configStatus),
        endTime: this.endTime,
        channelId: java.Long(this.channelId),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
