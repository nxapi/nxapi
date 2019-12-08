import java from 'js-to-java';

export interface IBatchSearchRequest {
  clcIds?: Array<number>;
  zoneIds?: Array<number>;
  hotelTypeIds?: Array<number>;
  hubIds?: Array<number>;
  hotelIds?: Array<number>;
  pageSize?: number;
  startTime?: Date;
  regionIds?: Array<number>;
  endTime?: Date;
  queryAll?: boolean;
  pageNum?: number;
  streetIds?: Array<number>;
}

export class BatchSearchRequest {
  constructor(params: IBatchSearchRequest) {
    this.clcIds = params.clcIds;
    this.zoneIds = params.zoneIds;
    this.hotelTypeIds = params.hotelTypeIds;
    this.hubIds = params.hubIds;
    this.hotelIds = params.hotelIds;
    this.pageSize = params.pageSize;
    this.startTime = params.startTime;
    this.regionIds = params.regionIds;
    this.endTime = params.endTime;
    this.queryAll = params.queryAll;
    this.pageNum = params.pageNum;
    this.streetIds = params.streetIds;
  }

  clcIds?: Array<number>;
  zoneIds?: Array<number>;
  hotelTypeIds?: Array<number>;
  hubIds?: Array<number>;
  hotelIds?: Array<number>;
  pageSize?: number;
  startTime?: Date;
  regionIds?: Array<number>;
  endTime?: Date;
  queryAll?: boolean;
  pageNum?: number;
  streetIds?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.request.BatchSearchRequest',
      $: {
        clcIds: this.clcIds
          ? java.List(
              (this.clcIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        zoneIds: this.zoneIds
          ? java.List(
              (this.zoneIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        hotelTypeIds: this.hotelTypeIds
          ? java.List(
              (this.hotelTypeIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        hubIds: this.hubIds
          ? java.List(
              (this.hubIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        pageSize: java.Integer(this.pageSize),
        startTime: this.startTime,
        regionIds: this.regionIds
          ? java.List(
              (this.regionIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        endTime: this.endTime,
        queryAll: java.Boolean(this.queryAll),
        pageNum: java.Integer(this.pageNum),
        streetIds: this.streetIds
          ? java.List(
              (this.streetIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
