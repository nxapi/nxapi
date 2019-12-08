import java from 'js-to-java';

export interface IHotelBookingCountResponse {
  count?: number;
  hotelId?: number;
}

export class HotelBookingCountResponse {
  constructor(params: IHotelBookingCountResponse) {
    this.count = params.count;
    this.hotelId = params.hotelId;
  }

  count?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.app.response.HotelBookingCountResponse',
      $: {count: java.Integer(this.count), hotelId: java.Long(this.hotelId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
