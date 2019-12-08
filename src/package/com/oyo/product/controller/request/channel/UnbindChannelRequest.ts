import java from 'js-to-java';

export interface IUnbindChannelRequest {
  employeeId?: number;
  hotelIdList?: Array<number>;
  operatorId?: number;
  operatorName?: string;
  channelId?: number;
}

export class UnbindChannelRequest {
  constructor(params: IUnbindChannelRequest) {
    this.employeeId = params.employeeId;
    this.hotelIdList = params.hotelIdList;
    this.operatorId = params.operatorId;
    this.operatorName = params.operatorName;
    this.channelId = params.channelId;
  }

  employeeId?: number;
  hotelIdList?: Array<number>;
  operatorId?: number;
  operatorName?: string;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.channel.UnbindChannelRequest',
      $: {
        employeeId: java.Long(this.employeeId),
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        operatorId: java.Long(this.operatorId),
        operatorName: java.String(this.operatorName),
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
