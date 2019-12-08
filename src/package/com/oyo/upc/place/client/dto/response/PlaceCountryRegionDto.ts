import java from 'js-to-java';

export interface IPlaceCountryRegionDto {
  hubId?: number;
  districtName?: string;
  stateId?: number;
  cityId?: number;
  clusterId?: number;
  countryId?: number;
  streetName?: string;
  districtId?: number;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  countryName?: string;
  zoneName?: string;
  streetId?: number;
}

export class PlaceCountryRegionDto {
  constructor(params: IPlaceCountryRegionDto) {
    this.hubId = params.hubId;
    this.districtName = params.districtName;
    this.stateId = params.stateId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.countryId = params.countryId;
    this.streetName = params.streetName;
    this.districtId = params.districtId;
    this.cityName = params.cityName;
    this.stateName = params.stateName;
    this.clusterName = params.clusterName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.countryName = params.countryName;
    this.zoneName = params.zoneName;
    this.streetId = params.streetId;
  }

  hubId?: number;
  districtName?: string;
  stateId?: number;
  cityId?: number;
  clusterId?: number;
  countryId?: number;
  streetName?: string;
  districtId?: number;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  countryName?: string;
  zoneName?: string;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceCountryRegionDto',
      $: {
        hubId: java.Integer(this.hubId),
        districtName: java.String(this.districtName),
        stateId: java.Integer(this.stateId),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        countryId: java.Integer(this.countryId),
        streetName: java.String(this.streetName),
        districtId: java.Integer(this.districtId),
        cityName: java.String(this.cityName),
        stateName: java.String(this.stateName),
        clusterName: java.String(this.clusterName),
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        countryName: java.String(this.countryName),
        zoneName: java.String(this.zoneName),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
