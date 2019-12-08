import java from 'js-to-java';

export interface IHotelsSearchRequest {
  hotelIndexImage?: boolean;
  distance?: number;
  physicalInventory?: boolean;
  stateId?: number;
  latitude?: number;
  start?: number;
  cname?: string;
  hotelId?: string;
  cityId?: number;
  clusterId?: number;
  sort?: string;
  type?: number;
  hotelIdArr?: number[];
  hotelName?: string;
  checkInDate?: string;
  hits?: number;
  oyoId?: string;
  uniqueCode?: string;
  checkOutDate?: string;
  cooperationType?: string;
  fields?: Array<string>;
  channelId?: number;
  status?: number;
  longitude?: number;
}

export class HotelsSearchRequest {
  constructor(params: IHotelsSearchRequest) {
    this.hotelIndexImage = params.hotelIndexImage;
    this.distance = params.distance;
    this.physicalInventory = params.physicalInventory;
    this.stateId = params.stateId;
    this.latitude = params.latitude;
    this.start = params.start;
    this.cname = params.cname;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.sort = params.sort;
    this.type = params.type;
    this.hotelIdArr = params.hotelIdArr;
    this.hotelName = params.hotelName;
    this.checkInDate = params.checkInDate;
    this.hits = params.hits;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.checkOutDate = params.checkOutDate;
    this.cooperationType = params.cooperationType;
    this.fields = params.fields;
    this.channelId = params.channelId;
    this.status = params.status;
    this.longitude = params.longitude;
  }

  hotelIndexImage?: boolean;
  distance?: number;
  physicalInventory?: boolean;
  stateId?: number;
  latitude?: number;
  start?: number;
  cname?: string;
  hotelId?: string;
  cityId?: number;
  clusterId?: number;
  sort?: string;
  type?: number;
  hotelIdArr?: number[];
  hotelName?: string;
  checkInDate?: string;
  hits?: number;
  oyoId?: string;
  uniqueCode?: string;
  checkOutDate?: string;
  cooperationType?: string;
  fields?: Array<string>;
  channelId?: number;
  status?: number;
  longitude?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.HotelsSearchRequest',
      $: {
        hotelIndexImage: java.Boolean(this.hotelIndexImage),
        distance: java.Double(this.distance),
        physicalInventory: java.Boolean(this.physicalInventory),
        stateId: java.Integer(this.stateId),
        latitude: java.Double(this.latitude),
        start: java.Integer(this.start),
        cname: java.String(this.cname),
        hotelId: java.String(this.hotelId),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        sort: java.String(this.sort),
        type: java.Integer(this.type),
        hotelIdArr: java.array(
          'java.lang.Integer',
          (this.hotelIdArr || []).map((paramItem: any) => {
            return java.Integer(paramItem);
          }),
        ),
        hotelName: java.String(this.hotelName),
        checkInDate: java.String(this.checkInDate),
        hits: java.Integer(this.hits),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        checkOutDate: java.String(this.checkOutDate),
        cooperationType: java.String(this.cooperationType),
        fields: this.fields
          ? java.List(
              (this.fields || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        channelId: java.Integer(this.channelId),
        status: java.Integer(this.status),
        longitude: java.Double(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
