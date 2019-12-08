import java from 'js-to-java';

export interface IHotelByTypeAndIdListRequest {
  pageSize?: number;
  idList?: Array<number>;
  type?: string;
  typeIdList?: Array<number>;
  pageNum?: number;
}

export class HotelByTypeAndIdListRequest {
  constructor(params: IHotelByTypeAndIdListRequest) {
    this.pageSize = params.pageSize;
    this.idList = params.idList;
    this.type = params.type;
    this.typeIdList = params.typeIdList;
    this.pageNum = params.pageNum;
  }

  pageSize?: number;
  idList?: Array<number>;
  type?: string;
  typeIdList?: Array<number>;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.HotelByTypeAndIdListRequest',
      $: {
        pageSize: java.Integer(this.pageSize),
        idList: this.idList
          ? java.List(
              (this.idList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        type: java.String(this.type),
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
