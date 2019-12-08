import java from 'js-to-java';

export interface IRealTimeDataInfoReq {
  clcIds?: Array<number>;
  zoneIds?: Array<number>;
  resource?: string;
  hotelIds?: Array<number>;
  hubIds?: Array<number>;
  cityIds?: Array<number>;
}

export class RealTimeDataInfoReq {
  constructor(params: IRealTimeDataInfoReq) {
    this.clcIds = params.clcIds;
    this.zoneIds = params.zoneIds;
    this.resource = params.resource;
    this.hotelIds = params.hotelIds;
    this.hubIds = params.hubIds;
    this.cityIds = params.cityIds;
  }

  clcIds?: Array<number>;
  zoneIds?: Array<number>;
  resource?: string;
  hotelIds?: Array<number>;
  hubIds?: Array<number>;
  cityIds?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.app.request.RealTimeDataInfoReq',
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
        resource: java.String(this.resource),
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
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
        cityIds: this.cityIds
          ? java.List(
              (this.cityIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
