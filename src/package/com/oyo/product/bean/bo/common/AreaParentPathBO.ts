import java from 'js-to-java';

export interface IAreaParentPathBO {
  hubId?: number;
  zoneCnName?: string;
  hubCnName?: string;
  cityId?: number;
  clusterId?: number;
  hotelId?: number;
  hotelName?: string;
  cityName?: string;
  clusterName?: string;
  clusterCnName?: string;
  zoneId?: number;
  hubName?: string;
  zoneName?: string;
  cityCnName?: string;
}

export class AreaParentPathBO {
  constructor(params: IAreaParentPathBO) {
    this.hubId = params.hubId;
    this.zoneCnName = params.zoneCnName;
    this.hubCnName = params.hubCnName;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.cityName = params.cityName;
    this.clusterName = params.clusterName;
    this.clusterCnName = params.clusterCnName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.zoneName = params.zoneName;
    this.cityCnName = params.cityCnName;
  }

  hubId?: number;
  zoneCnName?: string;
  hubCnName?: string;
  cityId?: number;
  clusterId?: number;
  hotelId?: number;
  hotelName?: string;
  cityName?: string;
  clusterName?: string;
  clusterCnName?: string;
  zoneId?: number;
  hubName?: string;
  zoneName?: string;
  cityCnName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.AreaParentPathBO',
      $: {
        hubId: java.Integer(this.hubId),
        zoneCnName: java.String(this.zoneCnName),
        hubCnName: java.String(this.hubCnName),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        cityName: java.String(this.cityName),
        clusterName: java.String(this.clusterName),
        clusterCnName: java.String(this.clusterCnName),
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        zoneName: java.String(this.zoneName),
        cityCnName: java.String(this.cityCnName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
