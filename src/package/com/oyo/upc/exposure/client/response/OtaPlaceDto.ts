import java from 'js-to-java';

export interface IOtaPlaceDto {
  hubId?: number;
  typeName?: string;
  otaAccount?: string;
  hotelAddress?: string;
  otaAccountPwd?: string;
  updateTime?: Date;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  otaPlatformName?: string;
  hotelName?: string;
  oyoId?: string;
  cityName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  auditStatus?: number;
  id?: number;
  zoneName?: string;
  placeCode?: number;
}

export class OtaPlaceDto {
  constructor(params: IOtaPlaceDto) {
    this.hubId = params.hubId;
    this.typeName = params.typeName;
    this.otaAccount = params.otaAccount;
    this.hotelAddress = params.hotelAddress;
    this.otaAccountPwd = params.otaAccountPwd;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.otaPlatformName = params.otaPlatformName;
    this.hotelName = params.hotelName;
    this.oyoId = params.oyoId;
    this.cityName = params.cityName;
    this.clusterName = params.clusterName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.auditStatus = params.auditStatus;
    this.id = params.id;
    this.zoneName = params.zoneName;
    this.placeCode = params.placeCode;
  }

  hubId?: number;
  typeName?: string;
  otaAccount?: string;
  hotelAddress?: string;
  otaAccountPwd?: string;
  updateTime?: Date;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  otaPlatformName?: string;
  hotelName?: string;
  oyoId?: string;
  cityName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  auditStatus?: number;
  id?: number;
  zoneName?: string;
  placeCode?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.response.OtaPlaceDto',
      $: {
        hubId: java.Long(this.hubId),
        typeName: java.String(this.typeName),
        otaAccount: java.String(this.otaAccount),
        hotelAddress: java.String(this.hotelAddress),
        otaAccountPwd: java.String(this.otaAccountPwd),
        updateTime: this.updateTime,
        hotelId: java.Long(this.hotelId),
        cityId: java.Long(this.cityId),
        clusterId: java.Long(this.clusterId),
        type: java.Integer(this.type),
        otaPlatformName: java.String(this.otaPlatformName),
        hotelName: java.String(this.hotelName),
        oyoId: java.String(this.oyoId),
        cityName: java.String(this.cityName),
        clusterName: java.String(this.clusterName),
        zoneId: java.Long(this.zoneId),
        hubName: java.String(this.hubName),
        auditStatus: java.Integer(this.auditStatus),
        id: java.Long(this.id),
        zoneName: java.String(this.zoneName),
        placeCode: java.Long(this.placeCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
