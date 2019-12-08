import java from 'js-to-java';

export interface IChannelCommitRequest {
  serviceAmountCalculate?: number;
  channelAlias?: string;
  serviceAmountRatio?: {value: string};
  isOnline?: string;
  channelName?: string;
  operatorId?: number;
  isDirect?: number;
  serviceAmountType?: number;
  channelId?: number;
  rateCodeIdList?: Array<number>;
  status?: number;
}

export class ChannelCommitRequest {
  constructor(params: IChannelCommitRequest) {
    this.serviceAmountCalculate = params.serviceAmountCalculate;
    this.channelAlias = params.channelAlias;
    this.serviceAmountRatio = params.serviceAmountRatio;
    this.isOnline = params.isOnline;
    this.channelName = params.channelName;
    this.operatorId = params.operatorId;
    this.isDirect = params.isDirect;
    this.serviceAmountType = params.serviceAmountType;
    this.channelId = params.channelId;
    this.rateCodeIdList = params.rateCodeIdList;
    this.status = params.status;
  }

  serviceAmountCalculate?: number;
  channelAlias?: string;
  serviceAmountRatio?: {value: string};
  isOnline?: string;
  channelName?: string;
  operatorId?: number;
  isDirect?: number;
  serviceAmountType?: number;
  channelId?: number;
  rateCodeIdList?: Array<number>;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.channel.ChannelCommitRequest',
      $: {
        serviceAmountCalculate: java.Integer(this.serviceAmountCalculate),
        channelAlias: java.String(this.channelAlias),
        serviceAmountRatio: this.serviceAmountRatio
          ? java.BigDecimal(this.serviceAmountRatio.value)
          : null,
        isOnline: java.String(this.isOnline),
        channelName: java.String(this.channelName),
        operatorId: java.Integer(this.operatorId),
        isDirect: java.Integer(this.isDirect),
        serviceAmountType: java.Integer(this.serviceAmountType),
        channelId: java.Integer(this.channelId),
        rateCodeIdList: this.rateCodeIdList
          ? java.List(
              (this.rateCodeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
