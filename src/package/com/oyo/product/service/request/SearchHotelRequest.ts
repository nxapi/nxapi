import java from 'js-to-java';

export interface ISearchHotelRequest {
  hubId?: number;
  clcId?: number;
  regionId?: number;
  zoneId?: number;
  pageSize?: number;
  hotelName?: string;
  pageNum?: number;
  streetId?: number;
}

export class SearchHotelRequest {
  constructor(params: ISearchHotelRequest) {
    this.hubId = params.hubId;
    this.clcId = params.clcId;
    this.regionId = params.regionId;
    this.zoneId = params.zoneId;
    this.pageSize = params.pageSize;
    this.hotelName = params.hotelName;
    this.pageNum = params.pageNum;
    this.streetId = params.streetId;
  }

  hubId?: number;
  clcId?: number;
  regionId?: number;
  zoneId?: number;
  pageSize?: number;
  hotelName?: string;
  pageNum?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.service.request.SearchHotelRequest',
      $: {
        hubId: java.Long(this.hubId),
        clcId: java.Long(this.clcId),
        regionId: java.Long(this.regionId),
        zoneId: java.Long(this.zoneId),
        pageSize: java.Integer(this.pageSize),
        hotelName: java.String(this.hotelName),
        pageNum: java.Integer(this.pageNum),
        streetId: java.Long(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
