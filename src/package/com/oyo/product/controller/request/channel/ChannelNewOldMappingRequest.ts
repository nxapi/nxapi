import java from 'js-to-java';

export interface IChannelNewOldMappingRequest {
  oldChannelId?: number;
  oldOtaId?: number;
  newChannelId?: number;
  isDirect?: number;
}

export class ChannelNewOldMappingRequest {
  constructor(params: IChannelNewOldMappingRequest) {
    this.oldChannelId = params.oldChannelId;
    this.oldOtaId = params.oldOtaId;
    this.newChannelId = params.newChannelId;
    this.isDirect = params.isDirect;
  }

  oldChannelId?: number;
  oldOtaId?: number;
  newChannelId?: number;
  isDirect?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.channel.ChannelNewOldMappingRequest',
      $: {
        oldChannelId: java.Integer(this.oldChannelId),
        oldOtaId: java.Integer(this.oldOtaId),
        newChannelId: java.Long(this.newChannelId),
        isDirect: java.Integer(this.isDirect),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
