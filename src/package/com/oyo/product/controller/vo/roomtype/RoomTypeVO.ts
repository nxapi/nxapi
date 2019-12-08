import { AmenityVO } from './../amenity/AmenityVO';
import { RemoteRateCalByRateCodeVO } from './../../../bean/vo/RemoteRateCalByRateCodeVO';
import java from 'js-to-java';

export interface IRoomTypeVO {
  englishName?: string;
  personAllowed?: number;
  code?: string;
  extraBedAllowed?: number;
  saleRoomTypeName?: string;
  bedTypeDesc?: string;
  avgListRate?: number;
  amenityList?: Array<AmenityVO>;
  bedWidth?: string;
  windowType?: number;
  size?: string;
  saleRoomTypeId?: number;
  rateList?: Array<RemoteRateCalByRateCodeVO>;
  windowTypeDesc?: string;
  name?: string;
  id?: number;
  imageList?: Array<string>;
  bedType?: number;
  baseRateCodeId?: number;
}

export class RoomTypeVO {
  constructor(params: IRoomTypeVO) {
    this.englishName = params.englishName;
    this.personAllowed = params.personAllowed;
    this.code = params.code;
    this.extraBedAllowed = params.extraBedAllowed;
    this.saleRoomTypeName = params.saleRoomTypeName;
    this.bedTypeDesc = params.bedTypeDesc;
    this.avgListRate = params.avgListRate;
    this.amenityList = params.amenityList;
    this.bedWidth = params.bedWidth;
    this.windowType = params.windowType;
    this.size = params.size;
    this.saleRoomTypeId = params.saleRoomTypeId;
    this.rateList = params.rateList;
    this.windowTypeDesc = params.windowTypeDesc;
    this.name = params.name;
    this.id = params.id;
    this.imageList = params.imageList;
    this.bedType = params.bedType;
    this.baseRateCodeId = params.baseRateCodeId;
  }

  englishName?: string;
  personAllowed?: number;
  code?: string;
  extraBedAllowed?: number;
  saleRoomTypeName?: string;
  bedTypeDesc?: string;
  avgListRate?: number;
  amenityList?: Array<AmenityVO>;
  bedWidth?: string;
  windowType?: number;
  size?: string;
  saleRoomTypeId?: number;
  rateList?: Array<RemoteRateCalByRateCodeVO>;
  windowTypeDesc?: string;
  name?: string;
  id?: number;
  imageList?: Array<string>;
  bedType?: number;
  baseRateCodeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.roomtype.RoomTypeVO',
      $: {
        englishName: java.String(this.englishName),
        personAllowed: java.Integer(this.personAllowed),
        code: java.String(this.code),
        extraBedAllowed: java.Integer(this.extraBedAllowed),
        saleRoomTypeName: java.String(this.saleRoomTypeName),
        bedTypeDesc: java.String(this.bedTypeDesc),
        avgListRate: java.Double(this.avgListRate),
        amenityList: this.amenityList
          ? java.List(
              (this.amenityList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        bedWidth: java.String(this.bedWidth),
        windowType: java.Integer(this.windowType),
        size: java.String(this.size),
        saleRoomTypeId: java.Long(this.saleRoomTypeId),
        rateList: this.rateList
          ? java.List(
              (this.rateList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        windowTypeDesc: java.String(this.windowTypeDesc),
        name: java.String(this.name),
        id: java.Long(this.id),
        imageList: this.imageList
          ? java.List(
              (this.imageList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        bedType: java.Integer(this.bedType),
        baseRateCodeId: java.Integer(this.baseRateCodeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
