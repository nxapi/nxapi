import java from 'js-to-java';

export interface IHotelTpiCheckStatusUpdateRequest {
  hotelId?: number;
  operator?: string;
  status?: number;
}

export class HotelTpiCheckStatusUpdateRequest {
  constructor(params: IHotelTpiCheckStatusUpdateRequest) {
    this.hotelId = params.hotelId;
    this.operator = params.operator;
    this.status = params.status;
  }

  hotelId?: number;
  operator?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.HotelTpiCheckStatusUpdateRequest',
      $: {
        hotelId: java.Long(this.hotelId),
        operator: java.String(this.operator),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
