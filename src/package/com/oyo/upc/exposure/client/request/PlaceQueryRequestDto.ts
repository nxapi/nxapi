import java from 'js-to-java';

export interface IPlaceQueryRequestDto {
  hubId?: number;
  bizCityId?: number;
  ptiStatusList?: number[];
  placeMode?: number;
  pageSize?: number;
  regionIds?: number[];
  createTimeStart?: Date;
  cityId?: number;
  clusterId?: number;
  clusterIds?: number[];
  placeStatus?: number;
  countryId?: number;
  oyoId?: string;
  uniqueCode?: string;
  placeBrandType?: number;
  hubIds?: number[];
  zoneId?: number;
  startTime?: Date;
  streetIds?: number[];
  placeCode?: number;
  address?: string;
  createTimeEnd?: Date;
  stateId?: number;
  priority?: number;
  pageNum?: number;
  placeStatusList?: number[];
  ptiStatus?: number;
  districtId?: number;
  zoneIds?: number[];
  oyoIds?: Array<string>;
  name?: string;
  endTime?: Date;
  placeIds?: Array<number>;
  bizCityIds?: number[];
  streetId?: number;
}

export class PlaceQueryRequestDto {
  constructor(params: IPlaceQueryRequestDto) {
    this.hubId = params.hubId;
    this.bizCityId = params.bizCityId;
    this.ptiStatusList = params.ptiStatusList;
    this.placeMode = params.placeMode;
    this.pageSize = params.pageSize;
    this.regionIds = params.regionIds;
    this.createTimeStart = params.createTimeStart;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.clusterIds = params.clusterIds;
    this.placeStatus = params.placeStatus;
    this.countryId = params.countryId;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.placeBrandType = params.placeBrandType;
    this.hubIds = params.hubIds;
    this.zoneId = params.zoneId;
    this.startTime = params.startTime;
    this.streetIds = params.streetIds;
    this.placeCode = params.placeCode;
    this.address = params.address;
    this.createTimeEnd = params.createTimeEnd;
    this.stateId = params.stateId;
    this.priority = params.priority;
    this.pageNum = params.pageNum;
    this.placeStatusList = params.placeStatusList;
    this.ptiStatus = params.ptiStatus;
    this.districtId = params.districtId;
    this.zoneIds = params.zoneIds;
    this.oyoIds = params.oyoIds;
    this.name = params.name;
    this.endTime = params.endTime;
    this.placeIds = params.placeIds;
    this.bizCityIds = params.bizCityIds;
    this.streetId = params.streetId;
  }

  hubId?: number;
  bizCityId?: number;
  ptiStatusList?: number[];
  placeMode?: number;
  pageSize?: number;
  regionIds?: number[];
  createTimeStart?: Date;
  cityId?: number;
  clusterId?: number;
  clusterIds?: number[];
  placeStatus?: number;
  countryId?: number;
  oyoId?: string;
  uniqueCode?: string;
  placeBrandType?: number;
  hubIds?: number[];
  zoneId?: number;
  startTime?: Date;
  streetIds?: number[];
  placeCode?: number;
  address?: string;
  createTimeEnd?: Date;
  stateId?: number;
  priority?: number;
  pageNum?: number;
  placeStatusList?: number[];
  ptiStatus?: number;
  districtId?: number;
  zoneIds?: number[];
  oyoIds?: Array<string>;
  name?: string;
  endTime?: Date;
  placeIds?: Array<number>;
  bizCityIds?: number[];
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.request.PlaceQueryRequestDto',
      $: {
        hubId: java.Integer(this.hubId),
        bizCityId: java.Integer(this.bizCityId),
        ptiStatusList: java.array(
          'java.lang.Integer',
          (this.ptiStatusList || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        placeMode: java.Integer(this.placeMode),
        pageSize: java.Integer(this.pageSize),
        regionIds: java.array(
          'java.lang.Integer',
          (this.regionIds || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        createTimeStart: this.createTimeStart,
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        clusterIds: java.array(
          'java.lang.Integer',
          (this.clusterIds || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        placeStatus: java.Integer(this.placeStatus),
        countryId: java.Integer(this.countryId),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        placeBrandType: java.Integer(this.placeBrandType),
        hubIds: java.array(
          'java.lang.Integer',
          (this.hubIds || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        zoneId: java.Integer(this.zoneId),
        startTime: this.startTime,
        streetIds: java.array(
          'java.lang.Integer',
          (this.streetIds || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        placeCode: java.Long(this.placeCode),
        address: java.String(this.address),
        createTimeEnd: this.createTimeEnd,
        stateId: java.Integer(this.stateId),
        priority: java.Integer(this.priority),
        pageNum: java.Integer(this.pageNum),
        placeStatusList: java.array(
          'java.lang.Integer',
          (this.placeStatusList || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        ptiStatus: java.Integer(this.ptiStatus),
        districtId: java.Integer(this.districtId),
        zoneIds: java.array(
          'java.lang.Integer',
          (this.zoneIds || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        oyoIds: this.oyoIds
          ? java.List(
              (this.oyoIds || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        name: java.String(this.name),
        endTime: this.endTime,
        placeIds: this.placeIds
          ? java.List(
              (this.placeIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        bizCityIds: java.array(
          'java.lang.Integer',
          (this.bizCityIds || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
