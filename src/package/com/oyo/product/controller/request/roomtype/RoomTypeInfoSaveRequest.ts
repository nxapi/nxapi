import { HotelRoomTypeBedInfoBO } from './../../../bean/bo/roomtype/HotelRoomTypeBedInfoBO';
import java from 'js-to-java';

export interface IRoomTypeInfoSaveRequest {
  roomTypeCode?: string;
  personAllowed?: number;
  extraBedAllowed?: number;
  washroomType?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  moreAmenities?: Array<number>;
  hotelRoomTypeId?: number;
  hotelId?: number;
  roomFeature?: string;
  roomTypeId?: number;
  space?: string;
  windowType?: number;
  operator?: string;
  baseAmenities?: Array<number>;
  amenityString?: string;
  saleRoomTypeId?: number;
  windowDisadvantage?: string;
  id?: number;
  floor?: string;
  bedInfoList?: Array<HotelRoomTypeBedInfoBO>;
}

export class RoomTypeInfoSaveRequest {
  constructor(params: IRoomTypeInfoSaveRequest) {
    this.roomTypeCode = params.roomTypeCode;
    this.personAllowed = params.personAllowed;
    this.extraBedAllowed = params.extraBedAllowed;
    this.washroomType = params.washroomType;
    this.saleRoomTypeName = params.saleRoomTypeName;
    this.roomTypeName = params.roomTypeName;
    this.moreAmenities = params.moreAmenities;
    this.hotelRoomTypeId = params.hotelRoomTypeId;
    this.hotelId = params.hotelId;
    this.roomFeature = params.roomFeature;
    this.roomTypeId = params.roomTypeId;
    this.space = params.space;
    this.windowType = params.windowType;
    this.operator = params.operator;
    this.baseAmenities = params.baseAmenities;
    this.amenityString = params.amenityString;
    this.saleRoomTypeId = params.saleRoomTypeId;
    this.windowDisadvantage = params.windowDisadvantage;
    this.id = params.id;
    this.floor = params.floor;
    this.bedInfoList = params.bedInfoList;
  }

  roomTypeCode?: string;
  personAllowed?: number;
  extraBedAllowed?: number;
  washroomType?: number;
  saleRoomTypeName?: string;
  roomTypeName?: string;
  moreAmenities?: Array<number>;
  hotelRoomTypeId?: number;
  hotelId?: number;
  roomFeature?: string;
  roomTypeId?: number;
  space?: string;
  windowType?: number;
  operator?: string;
  baseAmenities?: Array<number>;
  amenityString?: string;
  saleRoomTypeId?: number;
  windowDisadvantage?: string;
  id?: number;
  floor?: string;
  bedInfoList?: Array<HotelRoomTypeBedInfoBO>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.roomtype.RoomTypeInfoSaveRequest',
      $: {
        roomTypeCode: java.String(this.roomTypeCode),
        personAllowed: java.Integer(this.personAllowed),
        extraBedAllowed: java.Integer(this.extraBedAllowed),
        washroomType: java.Integer(this.washroomType),
        saleRoomTypeName: java.String(this.saleRoomTypeName),
        roomTypeName: java.String(this.roomTypeName),
        moreAmenities: this.moreAmenities
          ? java.List(
              (this.moreAmenities || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        hotelRoomTypeId: java.Long(this.hotelRoomTypeId),
        hotelId: java.Long(this.hotelId),
        roomFeature: java.String(this.roomFeature),
        roomTypeId: java.Long(this.roomTypeId),
        space: java.String(this.space),
        windowType: java.Integer(this.windowType),
        operator: java.String(this.operator),
        baseAmenities: this.baseAmenities
          ? java.List(
              (this.baseAmenities || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        amenityString: java.String(this.amenityString),
        saleRoomTypeId: java.Long(this.saleRoomTypeId),
        windowDisadvantage: java.String(this.windowDisadvantage),
        id: java.Long(this.id),
        floor: java.String(this.floor),
        bedInfoList: this.bedInfoList
          ? java.List(
              (this.bedInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
