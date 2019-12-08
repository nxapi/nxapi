import java from 'js-to-java';

export interface IHotelSearchRequest {
  oyoId?: string;
  uniqueCode?: string;
  stateId?: number;
  hotelTag?: string;
  pageSize?: number;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  pageNum?: number;
  status?: number;
}

export class HotelSearchRequest {
  constructor(params: IHotelSearchRequest) {
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.stateId = params.stateId;
    this.hotelTag = params.hotelTag;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.hotelName = params.hotelName;
    this.pageNum = params.pageNum;
    this.status = params.status;
  }

  oyoId?: string;
  uniqueCode?: string;
  stateId?: number;
  hotelTag?: string;
  pageSize?: number;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  pageNum?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.hotel.HotelSearchRequest',
      $: {
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        stateId: java.Integer(this.stateId),
        hotelTag: java.String(this.hotelTag),
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        cityId: java.Long(this.cityId),
        clusterId: java.Long(this.clusterId),
        type: java.Integer(this.type),
        hotelName: java.String(this.hotelName),
        pageNum: java.Integer(this.pageNum),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
