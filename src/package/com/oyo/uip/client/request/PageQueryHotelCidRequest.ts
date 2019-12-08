import java from 'js-to-java';

export interface IPageQueryHotelCidRequest {
  endDate?: Date;
  pageNo?: number;
  pageSize?: number;
  hotelId?: number;
  startDate?: Date;
}

export class PageQueryHotelCidRequest {
  constructor(params: IPageQueryHotelCidRequest) {
    this.endDate = params.endDate;
    this.pageNo = params.pageNo;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  pageNo?: number;
  pageSize?: number;
  hotelId?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.request.PageQueryHotelCidRequest',
      $: {
        endDate: this.endDate,
        pageNo: java.Integer(this.pageNo),
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
