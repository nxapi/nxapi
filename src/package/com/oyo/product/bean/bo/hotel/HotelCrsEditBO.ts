import { PlaceCoordinatesDto } from './PlaceCoordinatesDto';
import { ContactBO } from './ContactBO';
import { LandmarkBO } from './LandmarkBO';
import { BreakfastBO } from './BreakfastBO';
import java from 'js-to-java';

export interface IHotelCrsEditBO {
  hubId?: number;
  nearybyLandmarkList?: Array<string>;
  controlStatus?: number;
  phoneList?: Array<string>;
  cityId?: number;
  type?: number;
  managerName?: string;
  placeCoordinatesDtos?: Array<PlaceCoordinatesDto>;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  payMethodList?: Array<number>;
  contact?: Array<ContactBO>;
  zoneId?: number;
  hubName?: string;
  id?: number;
  nearybyLandmarkDirection?: string;
  checkoutTime?: Date;
  travelTypeTagList?: Array<number>;
  landmark?: Array<LandmarkBO>;
  longitude?: string;
  locationTagList?: Array<number>;
  hotelProfileContainOyo?: string;
  clcName?: string;
  mapLink?: string;
  hotelProfileNoOyo?: string;
  signRoomNum?: number;
  name?: string;
  stateCode?: string;
  activationDate?: Date;
  breakfast?: BreakfastBO;
  startDate?: string;
  streetId?: number;
  amenities?: Array<number>;
  bizType?: number;
  cityCode?: string;
  latitude?: string;
  locationDescription?: string;
  regionName?: string;
  hotelTag?: string;
  clusterId?: number;
  streetName?: string;
  cityName?: string;
  street?: string;
  hotelFeature?: string;
  clusterName?: string;
  enName?: string;
  zoneName?: string;
  floor?: string;
  styleTagList?: Array<number>;
  bizAreaId?: number;
  lastDecorateDate?: Date;
  checkinTime?: Date;
  landmarkList?: Array<string>;
  stateId?: number;
  alternateName?: string;
  clusterCode?: string;
  bookingEmail?: string;
  clcId?: number;
  brandType?: number;
  regionId?: number;
  landline?: string;
  coordinatesSupplier?: string;
}

export class HotelCrsEditBO {
  constructor(params: IHotelCrsEditBO) {
    this.hubId = params.hubId;
    this.nearybyLandmarkList = params.nearybyLandmarkList;
    this.controlStatus = params.controlStatus;
    this.phoneList = params.phoneList;
    this.cityId = params.cityId;
    this.type = params.type;
    this.managerName = params.managerName;
    this.placeCoordinatesDtos = params.placeCoordinatesDtos;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.roomNum = params.roomNum;
    this.stateName = params.stateName;
    this.payMethodList = params.payMethodList;
    this.contact = params.contact;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.id = params.id;
    this.nearybyLandmarkDirection = params.nearybyLandmarkDirection;
    this.checkoutTime = params.checkoutTime;
    this.travelTypeTagList = params.travelTypeTagList;
    this.landmark = params.landmark;
    this.longitude = params.longitude;
    this.locationTagList = params.locationTagList;
    this.hotelProfileContainOyo = params.hotelProfileContainOyo;
    this.clcName = params.clcName;
    this.mapLink = params.mapLink;
    this.hotelProfileNoOyo = params.hotelProfileNoOyo;
    this.signRoomNum = params.signRoomNum;
    this.name = params.name;
    this.stateCode = params.stateCode;
    this.activationDate = params.activationDate;
    this.breakfast = params.breakfast;
    this.startDate = params.startDate;
    this.streetId = params.streetId;
    this.amenities = params.amenities;
    this.bizType = params.bizType;
    this.cityCode = params.cityCode;
    this.latitude = params.latitude;
    this.locationDescription = params.locationDescription;
    this.regionName = params.regionName;
    this.hotelTag = params.hotelTag;
    this.clusterId = params.clusterId;
    this.streetName = params.streetName;
    this.cityName = params.cityName;
    this.street = params.street;
    this.hotelFeature = params.hotelFeature;
    this.clusterName = params.clusterName;
    this.enName = params.enName;
    this.zoneName = params.zoneName;
    this.floor = params.floor;
    this.styleTagList = params.styleTagList;
    this.bizAreaId = params.bizAreaId;
    this.lastDecorateDate = params.lastDecorateDate;
    this.checkinTime = params.checkinTime;
    this.landmarkList = params.landmarkList;
    this.stateId = params.stateId;
    this.alternateName = params.alternateName;
    this.clusterCode = params.clusterCode;
    this.bookingEmail = params.bookingEmail;
    this.clcId = params.clcId;
    this.brandType = params.brandType;
    this.regionId = params.regionId;
    this.landline = params.landline;
    this.coordinatesSupplier = params.coordinatesSupplier;
  }

  hubId?: number;
  nearybyLandmarkList?: Array<string>;
  controlStatus?: number;
  phoneList?: Array<string>;
  cityId?: number;
  type?: number;
  managerName?: string;
  placeCoordinatesDtos?: Array<PlaceCoordinatesDto>;
  oyoId?: string;
  uniqueCode?: string;
  roomNum?: number;
  stateName?: string;
  payMethodList?: Array<number>;
  contact?: Array<ContactBO>;
  zoneId?: number;
  hubName?: string;
  id?: number;
  nearybyLandmarkDirection?: string;
  checkoutTime?: Date;
  travelTypeTagList?: Array<number>;
  landmark?: Array<LandmarkBO>;
  longitude?: string;
  locationTagList?: Array<number>;
  hotelProfileContainOyo?: string;
  clcName?: string;
  mapLink?: string;
  hotelProfileNoOyo?: string;
  signRoomNum?: number;
  name?: string;
  stateCode?: string;
  activationDate?: Date;
  breakfast?: BreakfastBO;
  startDate?: string;
  streetId?: number;
  amenities?: Array<number>;
  bizType?: number;
  cityCode?: string;
  latitude?: string;
  locationDescription?: string;
  regionName?: string;
  hotelTag?: string;
  clusterId?: number;
  streetName?: string;
  cityName?: string;
  street?: string;
  hotelFeature?: string;
  clusterName?: string;
  enName?: string;
  zoneName?: string;
  floor?: string;
  styleTagList?: Array<number>;
  bizAreaId?: number;
  lastDecorateDate?: Date;
  checkinTime?: Date;
  landmarkList?: Array<string>;
  stateId?: number;
  alternateName?: string;
  clusterCode?: string;
  bookingEmail?: string;
  clcId?: number;
  brandType?: number;
  regionId?: number;
  landline?: string;
  coordinatesSupplier?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.HotelCrsEditBO',
      $: {
        hubId: java.Integer(this.hubId),
        nearybyLandmarkList: this.nearybyLandmarkList
          ? java.List(
              (this.nearybyLandmarkList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        controlStatus: java.Integer(this.controlStatus),
        phoneList: this.phoneList
          ? java.List(
              (this.phoneList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        managerName: java.String(this.managerName),
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
        payMethodList: this.payMethodList
          ? java.List(
              (this.payMethodList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        contact: this.contact
          ? java.List(
              (this.contact || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        zoneId: java.Integer(this.zoneId),
        hubName: java.String(this.hubName),
        id: java.Long(this.id),
        nearybyLandmarkDirection: java.String(this.nearybyLandmarkDirection),
        checkoutTime: this.checkoutTime,
        travelTypeTagList: this.travelTypeTagList
          ? java.List(
              (this.travelTypeTagList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        landmark: this.landmark
          ? java.List(
              (this.landmark || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        longitude: java.String(this.longitude),
        locationTagList: this.locationTagList
          ? java.List(
              (this.locationTagList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        hotelProfileContainOyo: java.String(this.hotelProfileContainOyo),
        clcName: java.String(this.clcName),
        mapLink: java.String(this.mapLink),
        hotelProfileNoOyo: java.String(this.hotelProfileNoOyo),
        signRoomNum: java.Integer(this.signRoomNum),
        name: java.String(this.name),
        stateCode: java.String(this.stateCode),
        activationDate: this.activationDate,
        breakfast: this.breakfast ? this.breakfast.__fields2java() : null,
        startDate: java.String(this.startDate),
        streetId: java.Integer(this.streetId),
        amenities: this.amenities
          ? java.List(
              (this.amenities || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        bizType: java.Integer(this.bizType),
        cityCode: java.String(this.cityCode),
        latitude: java.String(this.latitude),
        locationDescription: java.String(this.locationDescription),
        regionName: java.String(this.regionName),
        hotelTag: java.String(this.hotelTag),
        clusterId: java.Integer(this.clusterId),
        streetName: java.String(this.streetName),
        cityName: java.String(this.cityName),
        street: java.String(this.street),
        hotelFeature: java.String(this.hotelFeature),
        clusterName: java.String(this.clusterName),
        enName: java.String(this.enName),
        zoneName: java.String(this.zoneName),
        floor: java.String(this.floor),
        styleTagList: this.styleTagList
          ? java.List(
              (this.styleTagList || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        bizAreaId: java.Integer(this.bizAreaId),
        lastDecorateDate: this.lastDecorateDate,
        checkinTime: this.checkinTime,
        landmarkList: this.landmarkList
          ? java.List(
              (this.landmarkList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        stateId: java.Integer(this.stateId),
        alternateName: java.String(this.alternateName),
        clusterCode: java.String(this.clusterCode),
        bookingEmail: java.String(this.bookingEmail),
        clcId: java.Integer(this.clcId),
        brandType: java.Integer(this.brandType),
        regionId: java.Integer(this.regionId),
        landline: java.String(this.landline),
        coordinatesSupplier: java.String(this.coordinatesSupplier),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
