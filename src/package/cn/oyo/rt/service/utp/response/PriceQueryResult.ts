import { ChannelInfoDto } from './../dto/ChannelInfoDto';
import java from 'js-to-java';

export interface IPriceQueryResult {
  currencyType?: string;
  skuName?: string;
  channelInfo?: ChannelInfoDto;
  endDate?: Date;
  merchantId?: number;
  price?: number;
  startDate?: Date;
  skuCode?: string;
  status?: number;
}

export class PriceQueryResult {
  constructor(params: IPriceQueryResult) {
    this.currencyType = params.currencyType;
    this.skuName = params.skuName;
    this.channelInfo = params.channelInfo;
    this.endDate = params.endDate;
    this.merchantId = params.merchantId;
    this.price = params.price;
    this.startDate = params.startDate;
    this.skuCode = params.skuCode;
    this.status = params.status;
  }

  currencyType?: string;
  skuName?: string;
  channelInfo?: ChannelInfoDto;
  endDate?: Date;
  merchantId?: number;
  price?: number;
  startDate?: Date;
  skuCode?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.utp.response.PriceQueryResult',
      $: {
        currencyType: java.String(this.currencyType),
        skuName: java.String(this.skuName),
        channelInfo: this.channelInfo ? this.channelInfo.__fields2java() : null,
        endDate: this.endDate,
        merchantId: java.Long(this.merchantId),
        price: java.Double(this.price),
        startDate: this.startDate,
        skuCode: java.String(this.skuCode),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
