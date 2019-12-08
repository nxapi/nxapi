import java from 'js-to-java';

export interface IHotelSearchRequest {
  distance?: number;
  stateId?: number;
  latitude?: number;
  start?: number;
  cname?: string;
  hotelId?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  hits?: number;
  oyoId?: string;
  uniqueCode?: string;
  cooperationType?: string;
  fields?: Array<string>;
  status?: number;
  longitude?: number;
}

export class HotelSearchRequest {
  constructor(params: IHotelSearchRequest) {
    this.distance = params.distance;
    this.stateId = params.stateId;
    this.latitude = params.latitude;
    this.start = params.start;
    this.cname = params.cname;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.hotelName = params.hotelName;
    this.hits = params.hits;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.cooperationType = params.cooperationType;
    this.fields = params.fields;
    this.status = params.status;
    this.longitude = params.longitude;
  }

  distance?: number;
  stateId?: number;
  latitude?: number;
  start?: number;
  cname?: string;
  hotelId?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelName?: string;
  hits?: number;
  oyoId?: string;
  uniqueCode?: string;
  cooperationType?: string;
  fields?: Array<string>;
  status?: number;
  longitude?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.HotelSearchRequest',
      $: {
        distance: java.Double(this.distance),
        stateId: java.Integer(this.stateId),
        latitude: java.Double(this.latitude),
        start: java.Integer(this.start),
        cname: java.String(this.cname),
        hotelId: java.String(this.hotelId),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        type: java.Integer(this.type),
        hotelName: java.String(this.hotelName),
        hits: java.Integer(this.hits),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        cooperationType: java.String(this.cooperationType),
        fields: this.fields
          ? java.List(
              (this.fields || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        status: java.Integer(this.status),
        longitude: java.Double(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
