import java from 'js-to-java';

export interface IAreaSearchHotelRequest {
  hubId?: number;
  zoneId?: number;
  pageSize?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  pageNum?: number;
}

export class AreaSearchHotelRequest {
  constructor(params: IAreaSearchHotelRequest) {
    this.hubId = params.hubId;
    this.zoneId = params.zoneId;
    this.pageSize = params.pageSize;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.hotelName = params.hotelName;
    this.pageNum = params.pageNum;
  }

  hubId?: number;
  zoneId?: number;
  pageSize?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.hotel.AreaSearchHotelRequest',
      $: {
        hubId: java.Integer(this.hubId),
        zoneId: java.Integer(this.zoneId),
        pageSize: java.Integer(this.pageSize),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        type: java.Integer(this.type),
        hotelName: java.String(this.hotelName),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
