import { ChannelCommissionVO } from './../../vo/channel/ChannelCommissionVO';
import java from 'js-to-java';

export interface ICommissionAndTimeRequest {
  checkinTime?: string;
  channelCommissions?: Array<ChannelCommissionVO>;
  hotelId?: number;
  checkoutTime?: string;
  operator?: string;
}

export class CommissionAndTimeRequest {
  constructor(params: ICommissionAndTimeRequest) {
    this.checkinTime = params.checkinTime;
    this.channelCommissions = params.channelCommissions;
    this.hotelId = params.hotelId;
    this.checkoutTime = params.checkoutTime;
    this.operator = params.operator;
  }

  checkinTime?: string;
  channelCommissions?: Array<ChannelCommissionVO>;
  hotelId?: number;
  checkoutTime?: string;
  operator?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.CommissionAndTimeRequest',
      $: {
        checkinTime: java.String(this.checkinTime),
        channelCommissions: this.channelCommissions
          ? java.List(
              (this.channelCommissions || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        checkoutTime: java.String(this.checkoutTime),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
