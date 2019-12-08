import { HotelRoomTypeInfoVO } from './HotelRoomTypeInfoVO';
import { BreakfastBO } from './../../../bean/bo/hotel/BreakfastBO';
import { HotelRestrictionsBO } from './../../../bean/bo/hotel/HotelRestrictionsBO';
import { HotelImagesVO } from './HotelImagesVO';
import { AmenityVO } from './../amenity/AmenityVO';
import { RoomTypeVO } from './../roomtype/RoomTypeVO';
import { HotelImagesBO } from './../../../bean/bo/hotel/HotelImagesBO';
import java from 'js-to-java';

export interface IHotelDetailVO {
  isChina2?: boolean;
  roomTypeInfoList?: Array<HotelRoomTypeInfoVO>;
  bizType?: number;
  city?: string;
  shortAddress?: string;
  latitude?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  breakfastInfo?: BreakfastBO;
  oyoId?: string;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  hotelFeature?: string;
  id?: number;
  restrictionList?: Array<HotelRestrictionsBO>;
  longitude?: string;
  address?: string;
  allImageList?: Array<HotelImagesVO>;
  stateId?: number;
  alternateName?: string;
  amenityList?: Array<AmenityVO>;
  directions?: string;
  roomTypeList?: Array<RoomTypeVO>;
  phone?: string;
  name?: string;
  fullAddress?: string;
  landline?: string;
  countryName?: string;
  imageList?: Array<HotelImagesBO>;
  status?: number;
}

export class HotelDetailVO {
  constructor(params: IHotelDetailVO) {
    this.isChina2 = params.isChina2;
    this.roomTypeInfoList = params.roomTypeInfoList;
    this.bizType = params.bizType;
    this.city = params.city;
    this.shortAddress = params.shortAddress;
    this.latitude = params.latitude;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.type = params.type;
    this.breakfastInfo = params.breakfastInfo;
    this.oyoId = params.oyoId;
    this.cityName = params.cityName;
    this.stateName = params.stateName;
    this.clusterName = params.clusterName;
    this.hotelFeature = params.hotelFeature;
    this.id = params.id;
    this.restrictionList = params.restrictionList;
    this.longitude = params.longitude;
    this.address = params.address;
    this.allImageList = params.allImageList;
    this.stateId = params.stateId;
    this.alternateName = params.alternateName;
    this.amenityList = params.amenityList;
    this.directions = params.directions;
    this.roomTypeList = params.roomTypeList;
    this.phone = params.phone;
    this.name = params.name;
    this.fullAddress = params.fullAddress;
    this.landline = params.landline;
    this.countryName = params.countryName;
    this.imageList = params.imageList;
    this.status = params.status;
  }

  isChina2?: boolean;
  roomTypeInfoList?: Array<HotelRoomTypeInfoVO>;
  bizType?: number;
  city?: string;
  shortAddress?: string;
  latitude?: string;
  cityId?: number;
  clusterId?: number;
  type?: number;
  breakfastInfo?: BreakfastBO;
  oyoId?: string;
  cityName?: string;
  stateName?: string;
  clusterName?: string;
  hotelFeature?: string;
  id?: number;
  restrictionList?: Array<HotelRestrictionsBO>;
  longitude?: string;
  address?: string;
  allImageList?: Array<HotelImagesVO>;
  stateId?: number;
  alternateName?: string;
  amenityList?: Array<AmenityVO>;
  directions?: string;
  roomTypeList?: Array<RoomTypeVO>;
  phone?: string;
  name?: string;
  fullAddress?: string;
  landline?: string;
  countryName?: string;
  imageList?: Array<HotelImagesBO>;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelDetailVO',
      $: {
        isChina2: java.Boolean(this.isChina2),
        roomTypeInfoList: this.roomTypeInfoList
          ? java.List(
              (this.roomTypeInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        bizType: java.Integer(this.bizType),
        city: java.String(this.city),
        shortAddress: java.String(this.shortAddress),
        latitude: java.String(this.latitude),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        type: java.Integer(this.type),
        breakfastInfo: this.breakfastInfo
          ? this.breakfastInfo.__fields2java()
          : null,
        oyoId: java.String(this.oyoId),
        cityName: java.String(this.cityName),
        stateName: java.String(this.stateName),
        clusterName: java.String(this.clusterName),
        hotelFeature: java.String(this.hotelFeature),
        id: java.Long(this.id),
        restrictionList: this.restrictionList
          ? java.List(
              (this.restrictionList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        longitude: java.String(this.longitude),
        address: java.String(this.address),
        allImageList: this.allImageList
          ? java.List(
              (this.allImageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        stateId: java.Integer(this.stateId),
        alternateName: java.String(this.alternateName),
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        directions: java.String(this.directions),
        roomTypeList: this.roomTypeList
          ? java.List(
              (this.roomTypeList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        phone: java.String(this.phone),
        name: java.String(this.name),
        fullAddress: java.String(this.fullAddress),
        landline: java.String(this.landline),
        countryName: java.String(this.countryName),
        imageList: this.imageList
          ? java.List(
              (this.imageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
