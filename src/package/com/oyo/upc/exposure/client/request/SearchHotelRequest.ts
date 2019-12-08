import java from 'js-to-java';

export interface ISearchHotelRequest {
  hubId?: number;
  clcId?: number;
  regionId?: number;
  pageSize?: number;
  zoneId?: number;
  startTime?: Date;
  endTime?: Date;
  queryAll?: boolean;
  pageNum?: number;
  hotelName?: string;
  streetId?: number;
}

export class SearchHotelRequest {
  constructor(params: ISearchHotelRequest) {
    this.hubId = params.hubId;
    this.clcId = params.clcId;
    this.regionId = params.regionId;
    this.pageSize = params.pageSize;
    this.zoneId = params.zoneId;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.queryAll = params.queryAll;
    this.pageNum = params.pageNum;
    this.hotelName = params.hotelName;
    this.streetId = params.streetId;
  }

  hubId?: number;
  clcId?: number;
  regionId?: number;
  pageSize?: number;
  zoneId?: number;
  startTime?: Date;
  endTime?: Date;
  queryAll?: boolean;
  pageNum?: number;
  hotelName?: string;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.request.SearchHotelRequest',
      $: {
        hubId: java.Long(this.hubId),
        clcId: java.Long(this.clcId),
        regionId: java.Long(this.regionId),
        pageSize: java.Integer(this.pageSize),
        zoneId: java.Long(this.zoneId),
        startTime: this.startTime,
        endTime: this.endTime,
        queryAll: java.Boolean(this.queryAll),
        pageNum: java.Integer(this.pageNum),
        hotelName: java.String(this.hotelName),
        streetId: java.Long(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
