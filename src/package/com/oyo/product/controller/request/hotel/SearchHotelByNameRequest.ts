import java from 'js-to-java';

export interface ISearchHotelByNameRequest {
  pageSize?: number;
  hotelName?: string;
  pageNum?: number;
}

export class SearchHotelByNameRequest {
  constructor(params: ISearchHotelByNameRequest) {
    this.pageSize = params.pageSize;
    this.hotelName = params.hotelName;
    this.pageNum = params.pageNum;
  }

  pageSize?: number;
  hotelName?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.SearchHotelByNameRequest',
      $: {
        pageSize: java.Integer(this.pageSize),
        hotelName: java.String(this.hotelName),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
