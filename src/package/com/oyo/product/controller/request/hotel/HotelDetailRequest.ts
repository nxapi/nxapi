import java from 'js-to-java';

export interface IHotelDetailRequest {
  endDate?: Date;
  hotelId?: number;
  startDate?: Date;
  channelId?: number;
}

export class HotelDetailRequest {
  constructor(params: IHotelDetailRequest) {
    this.endDate = params.endDate;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
    this.channelId = params.channelId;
  }

  endDate?: Date;
  hotelId?: number;
  startDate?: Date;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.hotel.HotelDetailRequest',
      $: {
        endDate: this.endDate,
        hotelId: java.Long(this.hotelId),
        startDate: this.startDate,
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
