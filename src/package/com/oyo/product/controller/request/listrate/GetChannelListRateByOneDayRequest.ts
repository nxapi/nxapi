import java from 'js-to-java';

export interface IGetChannelListRateByOneDayRequest {
  roomTypeIdList?: Array<number>;
  payType?: number;
  handleType?: number;
  rateDate?: Date;
  hotelId?: number;
  crspCode?: string;
  channelId?: number;
  checkinType?: number;
}

export class GetChannelListRateByOneDayRequest {
  constructor(params: IGetChannelListRateByOneDayRequest) {
    this.roomTypeIdList = params.roomTypeIdList;
    this.payType = params.payType;
    this.handleType = params.handleType;
    this.rateDate = params.rateDate;
    this.hotelId = params.hotelId;
    this.crspCode = params.crspCode;
    this.channelId = params.channelId;
    this.checkinType = params.checkinType;
  }

  roomTypeIdList?: Array<number>;
  payType?: number;
  handleType?: number;
  rateDate?: Date;
  hotelId?: number;
  crspCode?: string;
  channelId?: number;
  checkinType?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.GetChannelListRateByOneDayRequest',
      $: {
        roomTypeIdList: this.roomTypeIdList
          ? java.List(
              (this.roomTypeIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        payType: java.Integer(this.payType),
        handleType: java.Integer(this.handleType),
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
