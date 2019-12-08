import java from 'js-to-java';

export interface ICrsHotelListResp$CrsHotel {
  cluster?: string;
  city?: string;
  stateId?: number;
  latitude?: string;
  cname?: string;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelStatusConfigTotime?: string;
  hotelName?: string;
  oyoId?: string;
  uniqueCode?: string;
  cooperationType?: string;
  street?: string;
  hotelConfigStatus?: number;
  hotelStatusConfigFromtime?: string;
  state?: string;
  status?: number;
  longitude?: string;
}

export class CrsHotelListResp$CrsHotel {
  constructor(params: ICrsHotelListResp$CrsHotel) {
    this.cluster = params.cluster;
    this.city = params.city;
    this.stateId = params.stateId;
    this.latitude = params.latitude;
    this.cname = params.cname;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.hotelStatusConfigTotime = params.hotelStatusConfigTotime;
    this.hotelName = params.hotelName;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.cooperationType = params.cooperationType;
    this.street = params.street;
    this.hotelConfigStatus = params.hotelConfigStatus;
    this.hotelStatusConfigFromtime = params.hotelStatusConfigFromtime;
    this.state = params.state;
    this.status = params.status;
    this.longitude = params.longitude;
  }

  cluster?: string;
  city?: string;
  stateId?: number;
  latitude?: string;
  cname?: string;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  type?: number;
  hotelStatusConfigTotime?: string;
  hotelName?: string;
  oyoId?: string;
  uniqueCode?: string;
  cooperationType?: string;
  street?: string;
  hotelConfigStatus?: number;
  hotelStatusConfigFromtime?: string;
  state?: string;
  status?: number;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.CrsHotelListResp$CrsHotel',
      $: {
        cluster: java.String(this.cluster),
        city: java.String(this.city),
        stateId: java.Integer(this.stateId),
        latitude: java.String(this.latitude),
        cname: java.String(this.cname),
        hotelId: java.Integer(this.hotelId),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        type: java.Integer(this.type),
        hotelStatusConfigTotime: java.String(this.hotelStatusConfigTotime),
        hotelName: java.String(this.hotelName),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        cooperationType: java.String(this.cooperationType),
        street: java.String(this.street),
        hotelConfigStatus: java.Integer(this.hotelConfigStatus),
        hotelStatusConfigFromtime: java.String(this.hotelStatusConfigFromtime),
        state: java.String(this.state),
        status: java.Integer(this.status),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
