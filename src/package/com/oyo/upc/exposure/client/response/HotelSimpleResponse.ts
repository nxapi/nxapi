import java from 'js-to-java';

export interface IHotelSimpleResponse {
  hubId?: number;
  bizType?: number;
  regionName?: string;
  hotelAddress?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  regionCode?: string;
  streetName?: string;
  oyoId?: string;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  zoneName?: string;
  bizAreaId?: number;
  stateId?: number;
  clcName?: string;
  hotelId?: number;
  hotelName?: string;
  clcId?: number;
  regionId?: number;
  status?: number;
  streetId?: number;
}

export class HotelSimpleResponse {
  constructor(params: IHotelSimpleResponse) {
    this.hubId = params.hubId;
    this.bizType = params.bizType;
    this.regionName = params.regionName;
    this.hotelAddress = params.hotelAddress;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.regionCode = params.regionCode;
    this.streetName = params.streetName;
    this.oyoId = params.oyoId;
    this.cityName = params.cityName;
    this.stateName = params.stateName;
    this.clusterName = params.clusterName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.zoneName = params.zoneName;
    this.bizAreaId = params.bizAreaId;
    this.stateId = params.stateId;
    this.clcName = params.clcName;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.clcId = params.clcId;
    this.regionId = params.regionId;
    this.status = params.status;
    this.streetId = params.streetId;
  }

  hubId?: number;
  bizType?: number;
  regionName?: string;
  hotelAddress?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  regionCode?: string;
  streetName?: string;
  oyoId?: string;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  zoneName?: string;
  bizAreaId?: number;
  stateId?: number;
  clcName?: string;
  hotelId?: number;
  hotelName?: string;
  clcId?: number;
  regionId?: number;
  status?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.response.HotelSimpleResponse',
      $: {
        hubId: java.Integer(this.hubId),
        bizType: java.Integer(this.bizType),
        regionName: java.String(this.regionName),
        hotelAddress: java.String(this.hotelAddress),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        type: java.Integer(this.type),
        regionCode: java.String(this.regionCode),
        streetName: java.String(this.streetName),
        oyoId: java.String(this.oyoId),
        cityName: java.String(this.cityName),
        stateName: java.String(this.stateName),
        clusterName: java.String(this.clusterName),
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        zoneName: java.String(this.zoneName),
        bizAreaId: java.Integer(this.bizAreaId),
        stateId: java.Integer(this.stateId),
        clcName: java.String(this.clcName),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        clcId: java.Integer(this.clcId),
        regionId: java.Integer(this.regionId),
        status: java.Integer(this.status),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
