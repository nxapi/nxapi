import java from 'js-to-java';

export interface IGetChannelListRateByMonthRequest {
  payType?: number;
  rateDate?: Date;
  hotelId?: number;
  crspCode?: string;
  channelId?: number;
  checkinType?: number;
}

export class GetChannelListRateByMonthRequest {
  constructor(params: IGetChannelListRateByMonthRequest) {
    this.payType = params.payType;
    this.rateDate = params.rateDate;
    this.hotelId = params.hotelId;
    this.crspCode = params.crspCode;
    this.channelId = params.channelId;
    this.checkinType = params.checkinType;
  }

  payType?: number;
  rateDate?: Date;
  hotelId?: number;
  crspCode?: string;
  channelId?: number;
  checkinType?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.GetChannelListRateByMonthRequest',
      $: {
        payType: java.Integer(this.payType),
        rateDate: this.rateDate,
        hotelId: java.Long(this.hotelId),
        crspCode: java.String(this.crspCode),
        channelId: java.Long(this.channelId),
        checkinType: java.Integer(this.checkinType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
