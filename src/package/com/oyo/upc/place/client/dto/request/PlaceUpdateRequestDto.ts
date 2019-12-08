import { PlaceCountryRegionRequestDto } from './PlaceCountryRegionRequestDto';
import java from 'js-to-java';

export interface IPlaceUpdateRequestDto {
  address?: string;
  placeMode?: number;
  saleBlackRoomNum?: number;
  latitude?: string;
  placeId?: number;
  spaceNum?: number;
  alternateName?: string;
  bookingEmail?: string;
  placeCountryRegionRequestDto?: PlaceCountryRegionRequestDto;
  signNum?: number;
  placeType?: number;
  placeBrandType?: number;
  name?: string;
  correlationId?: string;
  landline?: string;
  floor?: string;
  placeSubType?: number;
  operatorId?: number;
  startDate?: Date;
  email?: string;
  lastDecorateDate?: Date;
  longitude?: string;
  statusCode?: number;
}

export class PlaceUpdateRequestDto {
  constructor(params: IPlaceUpdateRequestDto) {
    this.address = params.address;
    this.placeMode = params.placeMode;
    this.saleBlackRoomNum = params.saleBlackRoomNum;
    this.latitude = params.latitude;
    this.placeId = params.placeId;
    this.spaceNum = params.spaceNum;
    this.alternateName = params.alternateName;
    this.bookingEmail = params.bookingEmail;
    this.placeCountryRegionRequestDto = params.placeCountryRegionRequestDto;
    this.signNum = params.signNum;
    this.placeType = params.placeType;
    this.placeBrandType = params.placeBrandType;
    this.name = params.name;
    this.correlationId = params.correlationId;
    this.landline = params.landline;
    this.floor = params.floor;
    this.placeSubType = params.placeSubType;
    this.operatorId = params.operatorId;
    this.startDate = params.startDate;
    this.email = params.email;
    this.lastDecorateDate = params.lastDecorateDate;
    this.longitude = params.longitude;
    this.statusCode = params.statusCode;
  }

  address?: string;
  placeMode?: number;
  saleBlackRoomNum?: number;
  latitude?: string;
  placeId?: number;
  spaceNum?: number;
  alternateName?: string;
  bookingEmail?: string;
  placeCountryRegionRequestDto?: PlaceCountryRegionRequestDto;
  signNum?: number;
  placeType?: number;
  placeBrandType?: number;
  name?: string;
  correlationId?: string;
  landline?: string;
  floor?: string;
  placeSubType?: number;
  operatorId?: number;
  startDate?: Date;
  email?: string;
  lastDecorateDate?: Date;
  longitude?: string;
  statusCode?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceUpdateRequestDto',
      $: {
        address: java.String(this.address),
        placeMode: java.Integer(this.placeMode),
        saleBlackRoomNum: java.Integer(this.saleBlackRoomNum),
        latitude: java.String(this.latitude),
        placeId: java.Long(this.placeId),
        spaceNum: java.Integer(this.spaceNum),
        alternateName: java.String(this.alternateName),
        bookingEmail: java.String(this.bookingEmail),
        placeCountryRegionRequestDto: this.placeCountryRegionRequestDto
          ? this.placeCountryRegionRequestDto.__fields2java()
          : null,
        signNum: java.Integer(this.signNum),
        placeType: java.Integer(this.placeType),
        placeBrandType: java.Integer(this.placeBrandType),
        name: java.String(this.name),
        correlationId: java.String(this.correlationId),
        landline: java.String(this.landline),
        floor: java.String(this.floor),
        placeSubType: java.Integer(this.placeSubType),
        operatorId: java.Long(this.operatorId),
        startDate: this.startDate,
        email: java.String(this.email),
        lastDecorateDate: this.lastDecorateDate,
        longitude: java.String(this.longitude),
        statusCode: java.Integer(this.statusCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
