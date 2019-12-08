import java from 'js-to-java';

export interface IUpdateHotelStatusLogRequest {
  pageSize?: number;
  hotelId?: number;
  pageNum?: number;
}

export class UpdateHotelStatusLogRequest {
  constructor(params: IUpdateHotelStatusLogRequest) {
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.pageNum = params.pageNum;
  }

  pageSize?: number;
  hotelId?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.UpdateHotelStatusLogRequest',
      $: {
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
