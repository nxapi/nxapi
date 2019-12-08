import { PlaceCountryRegionDto } from './PlaceCountryRegionDto';
import { PlaceAttributeDto } from './PlaceAttributeDto';
import { PlaceImageBasicInfo } from './../../common/PlaceImageBasicInfo';
import { PlacePoiGeographyDto } from './PlacePoiGeographyDto';
import java from 'js-to-java';

export interface IPlaceDto {
  placeMode?: number;
  synchronizeDelete?: number;
  saleBlackRoomNum?: number;
  latitude?: string;
  placeId?: number;
  darkSpaceNum?: number;
  oyoId?: string;
  uniqueCode?: string;
  placeBrandType?: number;
  id?: number;
  floor?: string;
  email?: string;
  placeCode?: number;
  lastDecorateDate?: Date;
  longitude?: string;
  brandName?: string;
  address?: string;
  payTypes?: Array<number>;
  spaceNum?: number;
  alternateName?: string;
  bookingEmail?: string;
  placeCountryRegionDto?: PlaceCountryRegionDto;
  placeAttributeDto?: PlaceAttributeDto;
  revPar?: string;
  signNum?: number;
  placeImageBasicInfoList?: Array<PlaceImageBasicInfo>;
  name?: string;
  placePoiGeographyDto?: Array<PlacePoiGeographyDto>;
  landline?: string;
  placeSubType?: number;
  resign?: number;
  startDate?: Date;
  statusCode?: number;
}

export class PlaceDto {
  constructor(params: IPlaceDto) {
    this.placeMode = params.placeMode;
    this.synchronizeDelete = params.synchronizeDelete;
    this.saleBlackRoomNum = params.saleBlackRoomNum;
    this.latitude = params.latitude;
    this.placeId = params.placeId;
    this.darkSpaceNum = params.darkSpaceNum;
    this.oyoId = params.oyoId;
    this.uniqueCode = params.uniqueCode;
    this.placeBrandType = params.placeBrandType;
    this.id = params.id;
    this.floor = params.floor;
    this.email = params.email;
    this.placeCode = params.placeCode;
    this.lastDecorateDate = params.lastDecorateDate;
    this.longitude = params.longitude;
    this.brandName = params.brandName;
    this.address = params.address;
    this.payTypes = params.payTypes;
    this.spaceNum = params.spaceNum;
    this.alternateName = params.alternateName;
    this.bookingEmail = params.bookingEmail;
    this.placeCountryRegionDto = params.placeCountryRegionDto;
    this.placeAttributeDto = params.placeAttributeDto;
    this.revPar = params.revPar;
    this.signNum = params.signNum;
    this.placeImageBasicInfoList = params.placeImageBasicInfoList;
    this.name = params.name;
    this.placePoiGeographyDto = params.placePoiGeographyDto;
    this.landline = params.landline;
    this.placeSubType = params.placeSubType;
    this.resign = params.resign;
    this.startDate = params.startDate;
    this.statusCode = params.statusCode;
  }

  placeMode?: number;
  synchronizeDelete?: number;
  saleBlackRoomNum?: number;
  latitude?: string;
  placeId?: number;
  darkSpaceNum?: number;
  oyoId?: string;
  uniqueCode?: string;
  placeBrandType?: number;
  id?: number;
  floor?: string;
  email?: string;
  placeCode?: number;
  lastDecorateDate?: Date;
  longitude?: string;
  brandName?: string;
  address?: string;
  payTypes?: Array<number>;
  spaceNum?: number;
  alternateName?: string;
  bookingEmail?: string;
  placeCountryRegionDto?: PlaceCountryRegionDto;
  placeAttributeDto?: PlaceAttributeDto;
  revPar?: string;
  signNum?: number;
  placeImageBasicInfoList?: Array<PlaceImageBasicInfo>;
  name?: string;
  placePoiGeographyDto?: Array<PlacePoiGeographyDto>;
  landline?: string;
  placeSubType?: number;
  resign?: number;
  startDate?: Date;
  statusCode?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceDto',
      $: {
        placeMode: java.Integer(this.placeMode),
        synchronizeDelete: java.Integer(this.synchronizeDelete),
        saleBlackRoomNum: java.Integer(this.saleBlackRoomNum),
        latitude: java.String(this.latitude),
        placeId: java.Long(this.placeId),
        darkSpaceNum: java.Integer(this.darkSpaceNum),
        oyoId: java.String(this.oyoId),
        uniqueCode: java.String(this.uniqueCode),
        placeBrandType: java.Integer(this.placeBrandType),
        id: java.Long(this.id),
        floor: java.String(this.floor),
        email: java.String(this.email),
        placeCode: java.Long(this.placeCode),
        lastDecorateDate: this.lastDecorateDate,
        longitude: java.String(this.longitude),
        brandName: java.String(this.brandName),
        address: java.String(this.address),
        payTypes: this.payTypes
          ? java.List(
              (this.payTypes || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        spaceNum: java.Integer(this.spaceNum),
        alternateName: java.String(this.alternateName),
        bookingEmail: java.String(this.bookingEmail),
        placeCountryRegionDto: this.placeCountryRegionDto
          ? this.placeCountryRegionDto.__fields2java()
          : null,
        placeAttributeDto: this.placeAttributeDto
          ? this.placeAttributeDto.__fields2java()
          : null,
        revPar: java.String(this.revPar),
        signNum: java.Integer(this.signNum),
        placeImageBasicInfoList: this.placeImageBasicInfoList
          ? java.List(
              (this.placeImageBasicInfoList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        name: java.String(this.name),
        placePoiGeographyDto: this.placePoiGeographyDto
          ? java.List(
              (this.placePoiGeographyDto || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        landline: java.String(this.landline),
        placeSubType: java.Integer(this.placeSubType),
        resign: java.Integer(this.resign),
        startDate: this.startDate,
        statusCode: java.Integer(this.statusCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
