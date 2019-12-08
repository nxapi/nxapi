import java from 'js-to-java';

export interface IGetListRateByHotelIdRequest {
  payType?: number;
  handleType?: number;
  rateDate?: Date;
  hotelId?: number;
  channelId?: number;
  checkinType?: number;
}

export class GetListRateByHotelIdRequest {
  constructor(params: IGetListRateByHotelIdRequest) {
    this.payType = params.payType;
    this.handleType = params.handleType;
    this.rateDate = params.rateDate;
    this.hotelId = params.hotelId;
    this.channelId = params.channelId;
    this.checkinType = params.checkinType;
  }

  payType?: number;
  handleType?: number;
  rateDate?: Date;
  hotelId?: number;
  channelId?: number;
  checkinType?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.listrate.GetListRateByHotelIdRequest',
      $: {
        payType: java.Integer(this.payType),
        handleType: java.Integer(this.handleType),
        rateDate: this.rateDate,
        hotelId: java.Long(this.hotelId),
        channelId: java.Long(this.channelId),
        checkinType: java.Integer(this.checkinType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
