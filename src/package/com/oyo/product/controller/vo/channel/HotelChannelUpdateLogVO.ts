import java from 'js-to-java';

export interface IHotelChannelUpdateLogVO {
  createBy?: string;
  createTime?: Date;
  property?: string;
  operateType?: string;
  channelName?: string;
  from?: string;
  remark?: string;
  hotelId?: number;
  to?: string;
  operatorId?: number;
  channelId?: number;
}

export class HotelChannelUpdateLogVO {
  constructor(params: IHotelChannelUpdateLogVO) {
    this.createBy = params.createBy;
    this.createTime = params.createTime;
    this.property = params.property;
    this.operateType = params.operateType;
    this.channelName = params.channelName;
    this.from = params.from;
    this.remark = params.remark;
    this.hotelId = params.hotelId;
    this.to = params.to;
    this.operatorId = params.operatorId;
    this.channelId = params.channelId;
  }

  createBy?: string;
  createTime?: Date;
  property?: string;
  operateType?: string;
  channelName?: string;
  from?: string;
  remark?: string;
  hotelId?: number;
  to?: string;
  operatorId?: number;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.channel.HotelChannelUpdateLogVO',
      $: {
        createBy: java.String(this.createBy),
        createTime: this.createTime,
        property: java.String(this.property),
        operateType: java.String(this.operateType),
        channelName: java.String(this.channelName),
        from: java.String(this.from),
        remark: java.String(this.remark),
        hotelId: java.Long(this.hotelId),
        to: java.String(this.to),
        operatorId: java.Long(this.operatorId),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
