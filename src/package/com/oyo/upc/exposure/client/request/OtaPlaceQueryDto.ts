import java from 'js-to-java';

export interface IOtaPlaceQueryDto {
  hubId?: number;
  otaAuditStatus?: number;
  otaPlatformId?: number;
  pageSize?: number;
  clusterId?: number;
  cityId?: number;
  queryAll?: boolean;
  type?: number;
  otaPlatformName?: string;
  pageNum?: number;
  hotelName?: string;
  oyoId?: string;
  zoneId?: number;
  startTime?: Date;
  endTime?: Date;
  passing?: number;
  placeCode?: number;
  streetId?: number;
}

export class OtaPlaceQueryDto {
  constructor(params: IOtaPlaceQueryDto) {
    this.hubId = params.hubId;
    this.otaAuditStatus = params.otaAuditStatus;
    this.otaPlatformId = params.otaPlatformId;
    this.pageSize = params.pageSize;
    this.clusterId = params.clusterId;
    this.cityId = params.cityId;
    this.queryAll = params.queryAll;
    this.type = params.type;
    this.otaPlatformName = params.otaPlatformName;
    this.pageNum = params.pageNum;
    this.hotelName = params.hotelName;
    this.oyoId = params.oyoId;
    this.zoneId = params.zoneId;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.passing = params.passing;
    this.placeCode = params.placeCode;
    this.streetId = params.streetId;
  }

  hubId?: number;
  otaAuditStatus?: number;
  otaPlatformId?: number;
  pageSize?: number;
  clusterId?: number;
  cityId?: number;
  queryAll?: boolean;
  type?: number;
  otaPlatformName?: string;
  pageNum?: number;
  hotelName?: string;
  oyoId?: string;
  zoneId?: number;
  startTime?: Date;
  endTime?: Date;
  passing?: number;
  placeCode?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.request.OtaPlaceQueryDto',
      $: {
        hubId: java.Long(this.hubId),
        otaAuditStatus: java.Integer(this.otaAuditStatus),
        otaPlatformId: java.Long(this.otaPlatformId),
        pageSize: java.Integer(this.pageSize),
        clusterId: java.Long(this.clusterId),
        cityId: java.Long(this.cityId),
        queryAll: java.Boolean(this.queryAll),
        type: java.Integer(this.type),
        otaPlatformName: java.String(this.otaPlatformName),
        pageNum: java.Integer(this.pageNum),
        hotelName: java.String(this.hotelName),
        oyoId: java.String(this.oyoId),
        zoneId: java.Long(this.zoneId),
        startTime: this.startTime,
        endTime: this.endTime,
        passing: java.Integer(this.passing),
        placeCode: java.Long(this.placeCode),
        streetId: java.Long(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
