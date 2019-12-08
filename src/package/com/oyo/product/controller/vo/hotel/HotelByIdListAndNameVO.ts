import java from 'js-to-java';

export interface IHotelByIdListAndNameVO {
  bizType?: number;
  clcName?: string;
  hotelAddress?: string;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  clcId?: number;
  streetName?: string;
  oyoId?: string;
  cityName?: string;
  clusterName?: string;
  bizAreaId?: number;
  status?: number;
  streetId?: number;
}

export class HotelByIdListAndNameVO {
  constructor(params: IHotelByIdListAndNameVO) {
    this.bizType = params.bizType;
    this.clcName = params.clcName;
    this.hotelAddress = params.hotelAddress;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.hotelName = params.hotelName;
    this.clcId = params.clcId;
    this.streetName = params.streetName;
    this.oyoId = params.oyoId;
    this.cityName = params.cityName;
    this.clusterName = params.clusterName;
    this.bizAreaId = params.bizAreaId;
    this.status = params.status;
    this.streetId = params.streetId;
  }

  bizType?: number;
  clcName?: string;
  hotelAddress?: string;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  clcId?: number;
  streetName?: string;
  oyoId?: string;
  cityName?: string;
  clusterName?: string;
  bizAreaId?: number;
  status?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelByIdListAndNameVO',
      $: {
        bizType: java.Integer(this.bizType),
        clcName: java.String(this.clcName),
        hotelAddress: java.String(this.hotelAddress),
        hotelId: java.Long(this.hotelId),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        type: java.Integer(this.type),
        hotelName: java.String(this.hotelName),
        clcId: java.Long(this.clcId),
        streetName: java.String(this.streetName),
        oyoId: java.String(this.oyoId),
        cityName: java.String(this.cityName),
        clusterName: java.String(this.clusterName),
        bizAreaId: java.Integer(this.bizAreaId),
        status: java.Integer(this.status),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
