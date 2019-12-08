import java from 'js-to-java';

export interface ILocationVO {
  hubId?: number;
  enCityName?: string;
  enHubName?: string;
  cnClusterName?: string;
  stateId?: number;
  enZoneName?: string;
  cnCityName?: string;
  cnStateName?: string;
  cityId?: number;
  clusterId?: number;
  cnZoneName?: string;
  enStateName?: string;
  zoneId?: number;
  cnHubName?: string;
  enClusterName?: string;
  enStreetName?: string;
  streetId?: number;
  cnStreetName?: string;
}

export class LocationVO {
  constructor(params: ILocationVO) {
    this.hubId = params.hubId;
    this.enCityName = params.enCityName;
    this.enHubName = params.enHubName;
    this.cnClusterName = params.cnClusterName;
    this.stateId = params.stateId;
    this.enZoneName = params.enZoneName;
    this.cnCityName = params.cnCityName;
    this.cnStateName = params.cnStateName;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.cnZoneName = params.cnZoneName;
    this.enStateName = params.enStateName;
    this.zoneId = params.zoneId;
    this.cnHubName = params.cnHubName;
    this.enClusterName = params.enClusterName;
    this.enStreetName = params.enStreetName;
    this.streetId = params.streetId;
    this.cnStreetName = params.cnStreetName;
  }

  hubId?: number;
  enCityName?: string;
  enHubName?: string;
  cnClusterName?: string;
  stateId?: number;
  enZoneName?: string;
  cnCityName?: string;
  cnStateName?: string;
  cityId?: number;
  clusterId?: number;
  cnZoneName?: string;
  enStateName?: string;
  zoneId?: number;
  cnHubName?: string;
  enClusterName?: string;
  enStreetName?: string;
  streetId?: number;
  cnStreetName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.location.LocationVO',
      $: {
        hubId: java.Integer(this.hubId),
        enCityName: java.String(this.enCityName),
        enHubName: java.String(this.enHubName),
        cnClusterName: java.String(this.cnClusterName),
        stateId: java.Integer(this.stateId),
        enZoneName: java.String(this.enZoneName),
        cnCityName: java.String(this.cnCityName),
        cnStateName: java.String(this.cnStateName),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        cnZoneName: java.String(this.cnZoneName),
        enStateName: java.String(this.enStateName),
        zoneId: java.Integer(this.zoneId),
        cnHubName: java.String(this.cnHubName),
        enClusterName: java.String(this.enClusterName),
        enStreetName: java.String(this.enStreetName),
        streetId: java.Integer(this.streetId),
        cnStreetName: java.String(this.cnStreetName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
