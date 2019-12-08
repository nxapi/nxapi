import { ChannelCommissionVO } from './../../vo/channel/ChannelCommissionVO';
import java from 'js-to-java';

export interface IChannelCommissionSetRequest {
  channelCommissions?: Array<ChannelCommissionVO>;
  employeeId?: number;
  hotelId?: number;
  operatorName?: string;
  operatorId?: number;
  operator?: string;
}

export class ChannelCommissionSetRequest {
  constructor(params: IChannelCommissionSetRequest) {
    this.channelCommissions = params.channelCommissions;
    this.employeeId = params.employeeId;
    this.hotelId = params.hotelId;
    this.operatorName = params.operatorName;
    this.operatorId = params.operatorId;
    this.operator = params.operator;
  }

  channelCommissions?: Array<ChannelCommissionVO>;
  employeeId?: number;
  hotelId?: number;
  operatorName?: string;
  operatorId?: number;
  operator?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.channel.ChannelCommissionSetRequest',
      $: {
        channelCommissions: this.channelCommissions
          ? java.List(
              (this.channelCommissions || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        employeeId: java.Long(this.employeeId),
        hotelId: java.Long(this.hotelId),
        operatorName: java.String(this.operatorName),
        operatorId: java.Integer(this.operatorId),
        operator: java.String(this.operator),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
