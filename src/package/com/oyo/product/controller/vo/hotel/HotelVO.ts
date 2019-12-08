import { HotelAmenityBO } from './../../../bean/bo/amenity/HotelAmenityBO';
import { HotelRestrictionRelaBO } from './../../../bean/bo/restriction/HotelRestrictionRelaBO';
import java from 'js-to-java';

export interface IHotelVO {
  hubId?: number;
  isChina2?: boolean;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  zoneId?: number;
  hubName?: string;
  id?: number;
  checkoutTime?: string;
  fax?: string;
  longitude?: string;
  images?: Array<string>;
  clcName?: string;
  amenityList?: Array<HotelAmenityBO>;
  mapLink?: string;
  totalRooms?: number;
  nightAuditTime?: string;
  creditCards?: Array<number>;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  countryName?: string;
  cityCnName?: string;
  activationDate?: string;
  breakfast?: number;
  status?: number;
  streetId?: number;
  bizType?: number;
  bizDate?: string;
  regionName?: string;
  latitude?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  restrictionsList?: Array<HotelRestrictionRelaBO>;
  cityName?: string;
  street?: string;
  clusterName?: string;
  enName?: string;
  pyName?: string;
  zoneName?: string;
  isZombie?: boolean;
  bizAreaId?: number;
  email?: string;
  summary?: string;
  transformedById?: number;
  checkinTime?: string;
  stateId?: number;
  alternateName?: string;
  clcId?: number;
  brandType?: number;
  regionId?: number;
  landline?: string;
}

export class HotelVO {
  constructor(params: IHotelVO) {
    this.hubId = params.hubId;
    this.isChina2 = params.isChina2;
    this.oyoEmail = params.oyoEmail;
    this.cityId = params.cityId;
    this.type = params.type;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.roomNum = params.roomNum;
    this.stateName = params.stateName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.id = params.id;
    this.checkoutTime = params.checkoutTime;
    this.fax = params.fax;
    this.longitude = params.longitude;
    this.images = params.images;
    this.clcName = params.clcName;
    this.amenityList = params.amenityList;
    this.mapLink = params.mapLink;
    this.totalRooms = params.totalRooms;
    this.nightAuditTime = params.nightAuditTime;
    this.creditCards = params.creditCards;
    this.signRoomNum = params.signRoomNum;
    this.directions = params.directions;
    this.phone = params.phone;
    this.name = params.name;
    this.plotNumber = params.plotNumber;
    this.countryName = params.countryName;
    this.cityCnName = params.cityCnName;
    this.activationDate = params.activationDate;
    this.breakfast = params.breakfast;
    this.status = params.status;
    this.streetId = params.streetId;
    this.bizType = params.bizType;
    this.bizDate = params.bizDate;
    this.regionName = params.regionName;
    this.latitude = params.latitude;
    this.description = params.description;
    this.clusterId = params.clusterId;
    this.countryId = params.countryId;
    this.restrictionsList = params.restrictionsList;
    this.cityName = params.cityName;
    this.street = params.street;
    this.clusterName = params.clusterName;
    this.enName = params.enName;
    this.pyName = params.pyName;
    this.zoneName = params.zoneName;
    this.isZombie = params.isZombie;
    this.bizAreaId = params.bizAreaId;
    this.email = params.email;
    this.summary = params.summary;
    this.transformedById = params.transformedById;
    this.checkinTime = params.checkinTime;
    this.stateId = params.stateId;
    this.alternateName = params.alternateName;
    this.clcId = params.clcId;
    this.brandType = params.brandType;
    this.regionId = params.regionId;
    this.landline = params.landline;
  }

  hubId?: number;
  isChina2?: boolean;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  zoneId?: number;
  hubName?: string;
  id?: number;
  checkoutTime?: string;
  fax?: string;
  longitude?: string;
  images?: Array<string>;
  clcName?: string;
  amenityList?: Array<HotelAmenityBO>;
  mapLink?: string;
  totalRooms?: number;
  nightAuditTime?: string;
  creditCards?: Array<number>;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  countryName?: string;
  cityCnName?: string;
  activationDate?: string;
  breakfast?: number;
  status?: number;
  streetId?: number;
  bizType?: number;
  bizDate?: string;
  regionName?: string;
  latitude?: string;
  description?: string;
  clusterId?: number;
  countryId?: number;
  restrictionsList?: Array<HotelRestrictionRelaBO>;
  cityName?: string;
  street?: string;
  clusterName?: string;
  enName?: string;
  pyName?: string;
  zoneName?: string;
  isZombie?: boolean;
  bizAreaId?: number;
  email?: string;
  summary?: string;
  transformedById?: number;
  checkinTime?: string;
  stateId?: number;
  alternateName?: string;
  clcId?: number;
  brandType?: number;
  regionId?: number;
  landline?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelVO',
      $: {
        hubId: java.Integer(this.hubId),
        isChina2: java.Boolean(this.isChina2),
        oyoEmail: java.String(this.oyoEmail),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        roomNum: java.Integer(this.roomNum),
        stateName: java.String(this.stateName),
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        id: java.Long(this.id),
        checkoutTime: java.String(this.checkoutTime),
        fax: java.String(this.fax),
        longitude: java.String(this.longitude),
        images: this.images
          ? java.List(
              (this.images || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        clcName: java.String(this.clcName),
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        mapLink: java.String(this.mapLink),
        totalRooms: java.Integer(this.totalRooms),
        nightAuditTime: java.String(this.nightAuditTime),
        creditCards: this.creditCards
          ? java.List(
              (this.creditCards || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        signRoomNum: java.Integer(this.signRoomNum),
        directions: java.String(this.directions),
        phone: java.String(this.phone),
        name: java.String(this.name),
        plotNumber: java.String(this.plotNumber),
        countryName: java.String(this.countryName),
        cityCnName: java.String(this.cityCnName),
        activationDate: java.String(this.activationDate),
        breakfast: java.Integer(this.breakfast),
        status: java.Integer(this.status),
        streetId: java.Integer(this.streetId),
        bizType: java.Integer(this.bizType),
        bizDate: java.String(this.bizDate),
        regionName: java.String(this.regionName),
        latitude: java.String(this.latitude),
        description: java.String(this.description),
        clusterId: java.Integer(this.clusterId),
        countryId: java.Integer(this.countryId),
        restrictionsList: this.restrictionsList
          ? java.List(
              (this.restrictionsList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        cityName: java.String(this.cityName),
        street: java.String(this.street),
        clusterName: java.String(this.clusterName),
        enName: java.String(this.enName),
        pyName: java.String(this.pyName),
        zoneName: java.String(this.zoneName),
        isZombie: java.Boolean(this.isZombie),
        bizAreaId: java.Integer(this.bizAreaId),
        email: java.String(this.email),
        summary: java.String(this.summary),
        transformedById: java.Integer(this.transformedById),
        checkinTime: java.String(this.checkinTime),
        stateId: java.Integer(this.stateId),
        alternateName: java.String(this.alternateName),
        clcId: java.Integer(this.clcId),
        brandType: java.Integer(this.brandType),
        regionId: java.Integer(this.regionId),
        landline: java.String(this.landline),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
