import java from 'js-to-java';

export interface IHotelInfoRequest {
  statusList?: Array<number>;
  pageSize?: number;
  beginTime?: Date;
  endTime?: Date;
  hotelIdList?: Array<number>;
  typeIdList?: Array<number>;
  pageNum?: number;
}

export class HotelInfoRequest {
  constructor(params: IHotelInfoRequest) {
    this.statusList = params.statusList;
    this.pageSize = params.pageSize;
    this.beginTime = params.beginTime;
    this.endTime = params.endTime;
    this.hotelIdList = params.hotelIdList;
    this.typeIdList = params.typeIdList;
    this.pageNum = params.pageNum;
  }

  statusList?: Array<number>;
  pageSize?: number;
  beginTime?: Date;
  endTime?: Date;
  hotelIdList?: Array<number>;
  typeIdList?: Array<number>;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.hotel.HotelInfoRequest',
      $: {
        statusList: this.statusList
          ? java.List(
              (this.statusList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        pageSize: java.Integer(this.pageSize),
        beginTime: this.beginTime,
        endTime: this.endTime,
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        typeIdList: this.typeIdList
          ? java.List(
              (this.typeIdList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
