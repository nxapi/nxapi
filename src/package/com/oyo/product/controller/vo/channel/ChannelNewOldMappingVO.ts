import java from 'js-to-java';

export interface IChannelNewOldMappingVO {
  newChannelName?: string;
  oldChannelId?: number;
  oldChannelName?: string;
  oldOtaId?: number;
  newChannelId?: number;
  isDirect?: number;
}

export class ChannelNewOldMappingVO {
  constructor(params: IChannelNewOldMappingVO) {
    this.newChannelName = params.newChannelName;
    this.oldChannelId = params.oldChannelId;
    this.oldChannelName = params.oldChannelName;
    this.oldOtaId = params.oldOtaId;
    this.newChannelId = params.newChannelId;
    this.isDirect = params.isDirect;
  }

  newChannelName?: string;
  oldChannelId?: number;
  oldChannelName?: string;
  oldOtaId?: number;
  newChannelId?: number;
  isDirect?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.channel.ChannelNewOldMappingVO',
      $: {
        newChannelName: java.String(this.newChannelName),
        oldChannelId: java.Integer(this.oldChannelId),
        oldChannelName: java.String(this.oldChannelName),
        oldOtaId: java.Integer(this.oldOtaId),
        newChannelId: java.Long(this.newChannelId),
        isDirect: java.Integer(this.isDirect),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
