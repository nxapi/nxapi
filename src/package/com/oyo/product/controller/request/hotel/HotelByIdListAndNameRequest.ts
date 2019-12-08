import java from 'js-to-java';

export interface IHotelByIdListAndNameRequest {
  pageSize?: number;
  hotelIdList?: Array<number>;
  hotelName?: string;
  pageNum?: number;
}

export class HotelByIdListAndNameRequest {
  constructor(params: IHotelByIdListAndNameRequest) {
    this.pageSize = params.pageSize;
    this.hotelIdList = params.hotelIdList;
    this.hotelName = params.hotelName;
    this.pageNum = params.pageNum;
  }

  pageSize?: number;
  hotelIdList?: Array<number>;
  hotelName?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.HotelByIdListAndNameRequest',
      $: {
        pageSize: java.Integer(this.pageSize),
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        hotelName: java.String(this.hotelName),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
