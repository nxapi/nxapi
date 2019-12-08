import java from 'js-to-java';

export interface IPlaceDto {
  hubId?: number;
  bizCityId?: number;
  bizType?: number;
  placeMode?: number;
  latitude?: string;
  placeId?: number;
  cityId?: number;
  clusterId?: number;
  countryId?: number;
  streetName?: string;
  oyoId?: string;
  uniqueCode?: string;
  placeBrandType?: number;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  id?: number;
  zoneName?: string;
  floor?: string;
  bizAreaId?: number;
  email?: string;
  placeCode?: number;
  lastDecorateDate?: Date;
  longitude?: string;
  address?: string;
  payTypes?: Array<number>;
  districtName?: string;
  stateId?: number;
  spaceNum?: number;
  alternateName?: string;
  bookingEmail?: string;
  bizCityName?: string;
  draftOrHotel?: number;
  signNum?: number;
  districtId?: number;
  name?: string;
  landline?: string;
  countryName?: string;
  placeSubType?: number;
  startDate?: Date;
  statusCode?: number;
  streetId?: number;
}

export class PlaceDto {
  constructor(params: IPlaceDto) {
    this.hubId = params.hubId;
    this.bizCityId = params.bizCityId;
    this.bizType = params.bizType;
    this.placeMode = params.placeMode;
    this.latitude = params.latitude;
    this.placeId = params.placeId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.countryId = params.countryId;
    this.streetName = params.streetName;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.placeBrandType = params.placeBrandType;
    this.cityName = params.cityName;
    this.stateName = params.stateName;
    this.clusterName = params.clusterName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.id = params.id;
    this.zoneName = params.zoneName;
    this.floor = params.floor;
    this.bizAreaId = params.bizAreaId;
    this.email = params.email;
    this.placeCode = params.placeCode;
    this.lastDecorateDate = params.lastDecorateDate;
    this.longitude = params.longitude;
    this.address = params.address;
    this.payTypes = params.payTypes;
    this.districtName = params.districtName;
    this.stateId = params.stateId;
    this.spaceNum = params.spaceNum;
    this.alternateName = params.alternateName;
    this.bookingEmail = params.bookingEmail;
    this.bizCityName = params.bizCityName;
    this.draftOrHotel = params.draftOrHotel;
    this.signNum = params.signNum;
    this.districtId = params.districtId;
    this.name = params.name;
    this.landline = params.landline;
    this.countryName = params.countryName;
    this.placeSubType = params.placeSubType;
    this.startDate = params.startDate;
    this.statusCode = params.statusCode;
    this.streetId = params.streetId;
  }

  hubId?: number;
  bizCityId?: number;
  bizType?: number;
  placeMode?: number;
  latitude?: string;
  placeId?: number;
  cityId?: number;
  clusterId?: number;
  countryId?: number;
  streetName?: string;
  oyoId?: string;
  uniqueCode?: string;
  placeBrandType?: number;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  zoneId?: number;
  hubName?: string;
  id?: number;
  zoneName?: string;
  floor?: string;
  bizAreaId?: number;
  email?: string;
  placeCode?: number;
  lastDecorateDate?: Date;
  longitude?: string;
  address?: string;
  payTypes?: Array<number>;
  districtName?: string;
  stateId?: number;
  spaceNum?: number;
  alternateName?: string;
  bookingEmail?: string;
  bizCityName?: string;
  draftOrHotel?: number;
  signNum?: number;
  districtId?: number;
  name?: string;
  landline?: string;
  countryName?: string;
  placeSubType?: number;
  startDate?: Date;
  statusCode?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.response.PlaceDto',
      $: {
        hubId: java.Integer(this.hubId),
        bizCityId: java.Integer(this.bizCityId),
        bizType: java.Integer(this.bizType),
        placeMode: java.Integer(this.placeMode),
        latitude: java.String(this.latitude),
        placeId: java.Long(this.placeId),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        countryId: java.Integer(this.countryId),
        streetName: java.String(this.streetName),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        placeBrandType: java.Integer(this.placeBrandType),
        cityName: java.String(this.cityName),
        stateName: java.String(this.stateName),
        clusterName: java.String(this.clusterName),
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        id: java.Long(this.id),
        zoneName: java.String(this.zoneName),
        floor: java.String(this.floor),
        bizAreaId: java.Integer(this.bizAreaId),
        email: java.String(this.email),
        placeCode: java.Long(this.placeCode),
        lastDecorateDate: this.lastDecorateDate,
        longitude: java.String(this.longitude),
        address: java.String(this.address),
        payTypes: this.payTypes
          ? java.List(
              (this.payTypes || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        districtName: java.String(this.districtName),
        stateId: java.Integer(this.stateId),
        spaceNum: java.Integer(this.spaceNum),
        alternateName: java.String(this.alternateName),
        bookingEmail: java.String(this.bookingEmail),
        bizCityName: java.String(this.bizCityName),
        draftOrHotel: java.Integer(this.draftOrHotel),
        signNum: java.Integer(this.signNum),
        districtId: java.Integer(this.districtId),
        name: java.String(this.name),
        landline: java.String(this.landline),
        countryName: java.String(this.countryName),
        placeSubType: java.Integer(this.placeSubType),
        startDate: this.startDate,
        statusCode: java.Integer(this.statusCode),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
