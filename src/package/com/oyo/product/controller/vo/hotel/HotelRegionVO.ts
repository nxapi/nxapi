import java from 'js-to-java';

export interface IHotelRegionVO {
  hubId?: number;
  address?: string;
  hotelId?: number;
  cityId?: number;
  type?: number;
  hotelName?: string;
  provinceId?: number;
  streetName?: string;
  areaId?: number;
  cityName?: string;
  areaName?: string;
  zoneId?: number;
  hubName?: string;
  provinceName?: string;
  zoneName?: string;
  streetId?: string;
}

export class HotelRegionVO {
  constructor(params: IHotelRegionVO) {
    this.hubId = params.hubId;
    this.address = params.address;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.type = params.type;
    this.hotelName = params.hotelName;
    this.provinceId = params.provinceId;
    this.streetName = params.streetName;
    this.areaId = params.areaId;
    this.cityName = params.cityName;
    this.areaName = params.areaName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.provinceName = params.provinceName;
    this.zoneName = params.zoneName;
    this.streetId = params.streetId;
  }

  hubId?: number;
  address?: string;
  hotelId?: number;
  cityId?: number;
  type?: number;
  hotelName?: string;
  provinceId?: number;
  streetName?: string;
  areaId?: number;
  cityName?: string;
  areaName?: string;
  zoneId?: number;
  hubName?: string;
  provinceName?: string;
  zoneName?: string;
  streetId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelRegionVO',
      $: {
        hubId: java.Integer(this.hubId),
        address: java.String(this.address),
        hotelId: java.Long(this.hotelId),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        hotelName: java.String(this.hotelName),
        provinceId: java.Integer(this.provinceId),
        streetName: java.String(this.streetName),
        areaId: java.Integer(this.areaId),
        cityName: java.String(this.cityName),
        areaName: java.String(this.areaName),
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        provinceName: java.String(this.provinceName),
        zoneName: java.String(this.zoneName),
        streetId: java.String(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
