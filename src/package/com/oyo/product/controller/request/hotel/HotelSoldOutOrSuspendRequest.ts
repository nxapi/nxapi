import java from 'js-to-java';

export interface IHotelSoldOutOrSuspendRequest {
  endDate?: Date;
  hotelId?: number;
  startDate?: Date;
  status?: number;
}

export class HotelSoldOutOrSuspendRequest {
  constructor(params: IHotelSoldOutOrSuspendRequest) {
    this.endDate = params.endDate;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
    this.status = params.status;
  }

  endDate?: Date;
  hotelId?: number;
  startDate?: Date;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.HotelSoldOutOrSuspendRequest',
      $: {
        endDate: this.endDate,
        hotelId: java.Long(this.hotelId),
        startDate: this.startDate,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
