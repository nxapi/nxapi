import { BreakfastBO } from './BreakfastBO';
import { PlaceCoordinatesDto } from './PlaceCoordinatesDto';
import { HotelImageVO } from './../../../controller/vo/image/HotelImageVO';
import java from 'js-to-java';

export interface IHotelBO {
  hubId?: number;
  breakfastBO?: BreakfastBO;
  isChina2?: boolean;
  ptiCheckStatus?: number;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  placeCoordinatesDtos?: Array<PlaceCoordinatesDto>;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  creditcards?: Array<number>;
  zoneId?: number;
  hubName?: string;
  id?: number;
  checkoutTime?: Date;
  fax?: string;
  longitude?: string;
  allImageList?: Array<HotelImageVO>;
  clcName?: string;
  amenityList?: Array<number>;
  mapLink?: string;
  totalRooms?: number;
  nightAuditTime?: Date;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  countryName?: string;
  activationDate?: Date;
  breakfast?: number;
  startDate?: string;
  status?: number;
  streetId?: number;
  bizType?: number;
  bizDate?: Date;
  latitude?: string;
  regionName?: string;
  hotelTag?: string;
  description?: string;
  bizAreaType?: number;
  clusterId?: number;
  countryId?: number;
  restrictionsList?: Array<number>;
  regionCode?: string;
  streetName?: string;
  cityName?: string;
  street?: string;
  clusterName?: string;
  hotelFeature?: string;
  enName?: string;
  pyName?: string;
  isZombie?: boolean;
  zoneName?: string;
  bizAreaId?: number;
  email?: string;
  summary?: string;
  transformedById?: number;
  checkinTime?: Date;
  stateId?: number;
  alternateName?: string;
  bookingEmail?: string;
  clcId?: number;
  brandType?: number;
  regionId?: number;
  landline?: string;
}

export class HotelBO {
  constructor(params: IHotelBO) {
    this.hubId = params.hubId;
    this.breakfastBO = params.breakfastBO;
    this.isChina2 = params.isChina2;
    this.ptiCheckStatus = params.ptiCheckStatus;
    this.oyoEmail = params.oyoEmail;
    this.cityId = params.cityId;
    this.type = params.type;
    this.placeCoordinatesDtos = params.placeCoordinatesDtos;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.roomNum = params.roomNum;
    this.stateName = params.stateName;
    this.creditcards = params.creditcards;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.id = params.id;
    this.checkoutTime = params.checkoutTime;
    this.fax = params.fax;
    this.longitude = params.longitude;
    this.allImageList = params.allImageList;
    this.clcName = params.clcName;
    this.amenityList = params.amenityList;
    this.mapLink = params.mapLink;
    this.totalRooms = params.totalRooms;
    this.nightAuditTime = params.nightAuditTime;
    this.signRoomNum = params.signRoomNum;
    this.directions = params.directions;
    this.phone = params.phone;
    this.name = params.name;
    this.plotNumber = params.plotNumber;
    this.countryName = params.countryName;
    this.activationDate = params.activationDate;
    this.breakfast = params.breakfast;
    this.startDate = params.startDate;
    this.status = params.status;
    this.streetId = params.streetId;
    this.bizType = params.bizType;
    this.bizDate = params.bizDate;
    this.latitude = params.latitude;
    this.regionName = params.regionName;
    this.hotelTag = params.hotelTag;
    this.description = params.description;
    this.bizAreaType = params.bizAreaType;
    this.clusterId = params.clusterId;
    this.countryId = params.countryId;
    this.restrictionsList = params.restrictionsList;
    this.regionCode = params.regionCode;
    this.streetName = params.streetName;
    this.cityName = params.cityName;
    this.street = params.street;
    this.clusterName = params.clusterName;
    this.hotelFeature = params.hotelFeature;
    this.enName = params.enName;
    this.pyName = params.pyName;
    this.isZombie = params.isZombie;
    this.zoneName = params.zoneName;
    this.bizAreaId = params.bizAreaId;
    this.email = params.email;
    this.summary = params.summary;
    this.transformedById = params.transformedById;
    this.checkinTime = params.checkinTime;
    this.stateId = params.stateId;
    this.alternateName = params.alternateName;
    this.bookingEmail = params.bookingEmail;
    this.clcId = params.clcId;
    this.brandType = params.brandType;
    this.regionId = params.regionId;
    this.landline = params.landline;
  }

  hubId?: number;
  breakfastBO?: BreakfastBO;
  isChina2?: boolean;
  ptiCheckStatus?: number;
  oyoEmail?: string;
  cityId?: number;
  type?: number;
  placeCoordinatesDtos?: Array<PlaceCoordinatesDto>;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  creditcards?: Array<number>;
  zoneId?: number;
  hubName?: string;
  id?: number;
  checkoutTime?: Date;
  fax?: string;
  longitude?: string;
  allImageList?: Array<HotelImageVO>;
  clcName?: string;
  amenityList?: Array<number>;
  mapLink?: string;
  totalRooms?: number;
  nightAuditTime?: Date;
  signRoomNum?: number;
  directions?: string;
  phone?: string;
  name?: string;
  plotNumber?: string;
  countryName?: string;
  activationDate?: Date;
  breakfast?: number;
  startDate?: string;
  status?: number;
  streetId?: number;
  bizType?: number;
  bizDate?: Date;
  latitude?: string;
  regionName?: string;
  hotelTag?: string;
  description?: string;
  bizAreaType?: number;
  clusterId?: number;
  countryId?: number;
  restrictionsList?: Array<number>;
  regionCode?: string;
  streetName?: string;
  cityName?: string;
  street?: string;
  clusterName?: string;
  hotelFeature?: string;
  enName?: string;
  pyName?: string;
  isZombie?: boolean;
  zoneName?: string;
  bizAreaId?: number;
  email?: string;
  summary?: string;
  transformedById?: number;
  checkinTime?: Date;
  stateId?: number;
  alternateName?: string;
  bookingEmail?: string;
  clcId?: number;
  brandType?: number;
  regionId?: number;
  landline?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.HotelBO',
      $: {
        hubId: java.Integer(this.hubId),
        breakfastBO: this.breakfastBO ? this.breakfastBO.__fields2java() : null,
        isChina2: java.Boolean(this.isChina2),
        ptiCheckStatus: java.Integer(this.ptiCheckStatus),
        oyoEmail: java.String(this.oyoEmail),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        placeCoordinatesDtos: this.placeCoordinatesDtos
          ? java.List(
              (this.placeCoordinatesDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        roomNum: java.Integer(this.roomNum),
        stateName: java.String(this.stateName),
        creditcards: this.creditcards
          ? java.List(
              (this.creditcards || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        id: java.Long(this.id),
        checkoutTime: this.checkoutTime,
        fax: java.String(this.fax),
        longitude: java.String(this.longitude),
        allImageList: this.allImageList
          ? java.List(
              (this.allImageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        clcName: java.String(this.clcName),
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        mapLink: java.String(this.mapLink),
        totalRooms: java.Integer(this.totalRooms),
        nightAuditTime: this.nightAuditTime,
        signRoomNum: java.Integer(this.signRoomNum),
        directions: java.String(this.directions),
        phone: java.String(this.phone),
        name: java.String(this.name),
        plotNumber: java.String(this.plotNumber),
        countryName: java.String(this.countryName),
        activationDate: this.activationDate,
        breakfast: java.Integer(this.breakfast),
        startDate: java.String(this.startDate),
        status: java.Integer(this.status),
        streetId: java.Integer(this.streetId),
        bizType: java.Integer(this.bizType),
        bizDate: this.bizDate,
        latitude: java.String(this.latitude),
        regionName: java.String(this.regionName),
        hotelTag: java.String(this.hotelTag),
        description: java.String(this.description),
        bizAreaType: java.Integer(this.bizAreaType),
        clusterId: java.Integer(this.clusterId),
        countryId: java.Integer(this.countryId),
        restrictionsList: this.restrictionsList
          ? java.List(
              (this.restrictionsList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        regionCode: java.String(this.regionCode),
        streetName: java.String(this.streetName),
        cityName: java.String(this.cityName),
        street: java.String(this.street),
        clusterName: java.String(this.clusterName),
        hotelFeature: java.String(this.hotelFeature),
        enName: java.String(this.enName),
        pyName: java.String(this.pyName),
        isZombie: java.Boolean(this.isZombie),
        zoneName: java.String(this.zoneName),
        bizAreaId: java.Integer(this.bizAreaId),
        email: java.String(this.email),
        summary: java.String(this.summary),
        transformedById: java.Integer(this.transformedById),
        checkinTime: this.checkinTime,
        stateId: java.Integer(this.stateId),
        alternateName: java.String(this.alternateName),
        bookingEmail: java.String(this.bookingEmail),
        clcId: java.Integer(this.clcId),
        brandType: java.Integer(this.brandType),
        regionId: java.Integer(this.regionId),
        landline: java.String(this.landline),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
