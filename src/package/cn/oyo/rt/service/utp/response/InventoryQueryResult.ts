import { ChannelInfoDto } from './../dto/ChannelInfoDto';
import java from 'js-to-java';

export interface IInventoryQueryResult {
  skuName?: string;
  channelInfos?: Array<ChannelInfoDto>;
  merchantId?: number;
  skuCode?: string;
  status?: number;
}

export class InventoryQueryResult {
  constructor(params: IInventoryQueryResult) {
    this.skuName = params.skuName;
    this.channelInfos = params.channelInfos;
    this.merchantId = params.merchantId;
    this.skuCode = params.skuCode;
    this.status = params.status;
  }

  skuName?: string;
  channelInfos?: Array<ChannelInfoDto>;
  merchantId?: number;
  skuCode?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.utp.response.InventoryQueryResult',
      $: {
        skuName: java.String(this.skuName),
        channelInfos: this.channelInfos
          ? java.List(
              (this.channelInfos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        merchantId: java.Long(this.merchantId),
        skuCode: java.String(this.skuCode),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
