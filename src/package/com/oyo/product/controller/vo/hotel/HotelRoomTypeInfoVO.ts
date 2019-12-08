import { BedInfoVO } from './../roomtypeinfo/BedInfoVO';
import { AmenityVO } from './../amenity/AmenityVO';
import { HotelImagesBO } from './../../../bean/bo/hotel/HotelImagesBO';
import java from 'js-to-java';

export interface IHotelRoomTypeInfoVO {
  roomTypeCode?: string;
  personAllowed?: number;
  extraBedAllowed?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  flatBedInfoList?: Array<BedInfoVO>;
  amenityList?: Array<AmenityVO>;
  roomFeature?: string;
  roomTypeId?: number;
  space?: string;
  windowType?: number;
  saleRoomTypeId?: number;
  windowDisadvantage?: string;
  floor?: string;
  imageList?: Array<HotelImagesBO>;
  bedInfoList?: Array<Array<BedInfoVO>>;
}

export class HotelRoomTypeInfoVO {
  constructor(params: IHotelRoomTypeInfoVO) {
    this.roomTypeCode = params.roomTypeCode;
    this.personAllowed = params.personAllowed;
    this.extraBedAllowed = params.extraBedAllowed;
    this.saleRoomTypeName = params.saleRoomTypeName;
    this.roomTypeName = params.roomTypeName;
    this.flatBedInfoList = params.flatBedInfoList;
    this.amenityList = params.amenityList;
    this.roomFeature = params.roomFeature;
    this.roomTypeId = params.roomTypeId;
    this.space = params.space;
    this.windowType = params.windowType;
    this.saleRoomTypeId = params.saleRoomTypeId;
    this.windowDisadvantage = params.windowDisadvantage;
    this.floor = params.floor;
    this.imageList = params.imageList;
    this.bedInfoList = params.bedInfoList;
  }

  roomTypeCode?: string;
  personAllowed?: number;
  extraBedAllowed?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  flatBedInfoList?: Array<BedInfoVO>;
  amenityList?: Array<AmenityVO>;
  roomFeature?: string;
  roomTypeId?: number;
  space?: string;
  windowType?: number;
  saleRoomTypeId?: number;
  windowDisadvantage?: string;
  floor?: string;
  imageList?: Array<HotelImagesBO>;
  bedInfoList?: Array<Array<BedInfoVO>>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelRoomTypeInfoVO',
      $: {
        roomTypeCode: java.String(this.roomTypeCode),
        personAllowed: java.Integer(this.personAllowed),
        extraBedAllowed: java.Integer(this.extraBedAllowed),
        saleRoomTypeName: java.String(this.saleRoomTypeName),
        roomTypeName: java.String(this.roomTypeName),
        flatBedInfoList: this.flatBedInfoList
          ? java.List(
              (this.flatBedInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        roomFeature: java.String(this.roomFeature),
        roomTypeId: java.Long(this.roomTypeId),
        space: java.String(this.space),
        windowType: java.Integer(this.windowType),
        saleRoomTypeId: java.Long(this.saleRoomTypeId),
        windowDisadvantage: java.String(this.windowDisadvantage),
        floor: java.String(this.floor),
        imageList: this.imageList
          ? java.List(
              (this.imageList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        bedInfoList: this.bedInfoList
          ? java.List(
              (this.bedInfoList || []).map((paramItem: any) => {
                return paramItem;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
