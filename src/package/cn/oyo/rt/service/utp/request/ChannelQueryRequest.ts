import java from 'js-to-java';

export interface IChannelQueryRequest {
  merchantId?: number;
  orgCode?: string;
  ip?: string;
  limit?: number;
  skuStatus?: number;
  page?: number;
  operatorId?: number;
  operatorName?: string;
  skuCode?: string;
  channelCodes?: string[];
}

export class ChannelQueryRequest {
  constructor(params: IChannelQueryRequest) {
    this.merchantId = params.merchantId;
    this.orgCode = params.orgCode;
    this.ip = params.ip;
    this.limit = params.limit;
    this.skuStatus = params.skuStatus;
    this.page = params.page;
    this.operatorId = params.operatorId;
    this.operatorName = params.operatorName;
    this.skuCode = params.skuCode;
    this.channelCodes = params.channelCodes;
  }

  merchantId?: number;
  orgCode?: string;
  ip?: string;
  limit?: number;
  skuStatus?: number;
  page?: number;
  operatorId?: number;
  operatorName?: string;
  skuCode?: string;
  channelCodes?: string[];

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.utp.request.ChannelQueryRequest',
      $: {
        merchantId: java.Long(this.merchantId),
        orgCode: java.String(this.orgCode),
        ip: java.String(this.ip),
        limit: java.Integer(this.limit),
        skuStatus: java.Integer(this.skuStatus),
        page: java.Integer(this.page),
        operatorId: java.Long(this.operatorId),
        operatorName: java.String(this.operatorName),
        skuCode: java.String(this.skuCode),
        channelCodes: java.array(
          'java.lang.String',
          (this.channelCodes || []).map((paramItem: any) => {
            return java.String(paramItem);
          }),
        ),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
