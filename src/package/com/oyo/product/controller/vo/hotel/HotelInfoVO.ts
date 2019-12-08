import java from 'js-to-java';

export interface IHotelInfoVO {
  hubId?: number;
  bizDate?: string;
  latitude?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  oyoId?: string;
  uniqueCode?: string;
  cityName?: string;
  isDeleted?: string;
  street?: string;
  clusterName?: string;
  enName?: string;
  hubName?: string;
  zoneId?: number;
  zoneName?: string;
  floor?: string;
  longitude?: string;
  clcName?: string;
  alternateName?: string;
  hotelId?: number;
  hotelName?: string;
  provinceId?: number;
  clcId?: number;
  brandType?: number;
  signRoomNum?: number;
  phone?: string;
  countryName?: string;
  provinceName?: string;
  status?: number;
  streetId?: number;
}

export class HotelInfoVO {
  constructor(params: IHotelInfoVO) {
    this.hubId = params.hubId;
    this.bizDate = params.bizDate;
    this.latitude = params.latitude;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.cityName = params.cityName;
    this.isDeleted = params.isDeleted;
    this.street = params.street;
    this.clusterName = params.clusterName;
    this.enName = params.enName;
    this.hubName = params.hubName;
    this.zoneId = params.zoneId;
    this.zoneName = params.zoneName;
    this.floor = params.floor;
    this.longitude = params.longitude;
    this.clcName = params.clcName;
    this.alternateName = params.alternateName;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.provinceId = params.provinceId;
    this.clcId = params.clcId;
    this.brandType = params.brandType;
    this.signRoomNum = params.signRoomNum;
    this.phone = params.phone;
    this.countryName = params.countryName;
    this.provinceName = params.provinceName;
    this.status = params.status;
    this.streetId = params.streetId;
  }

  hubId?: number;
  bizDate?: string;
  latitude?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  oyoId?: string;
  uniqueCode?: string;
  cityName?: string;
  isDeleted?: string;
  street?: string;
  clusterName?: string;
  enName?: string;
  hubName?: string;
  zoneId?: number;
  zoneName?: string;
  floor?: string;
  longitude?: string;
  clcName?: string;
  alternateName?: string;
  hotelId?: number;
  hotelName?: string;
  provinceId?: number;
  clcId?: number;
  brandType?: number;
  signRoomNum?: number;
  phone?: string;
  countryName?: string;
  provinceName?: string;
  status?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelInfoVO',
      $: {
        hubId: java.Integer(this.hubId),
        bizDate: java.String(this.bizDate),
        latitude: java.String(this.latitude),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        type: java.Integer(this.type),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        cityName: java.String(this.cityName),
        isDeleted: java.String(this.isDeleted),
        street: java.String(this.street),
        clusterName: java.String(this.clusterName),
        enName: java.String(this.enName),
        hubName: java.String(this.hubName),
        zoneId: java.Integer(this.zoneId),
        zoneName: java.String(this.zoneName),
        floor: java.String(this.floor),
        longitude: java.String(this.longitude),
        clcName: java.String(this.clcName),
        alternateName: java.String(this.alternateName),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        provinceId: java.Integer(this.provinceId),
        clcId: java.Long(this.clcId),
        brandType: java.Integer(this.brandType),
        signRoomNum: java.Integer(this.signRoomNum),
        phone: java.String(this.phone),
        countryName: java.String(this.countryName),
        provinceName: java.String(this.provinceName),
        status: java.Integer(this.status),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
