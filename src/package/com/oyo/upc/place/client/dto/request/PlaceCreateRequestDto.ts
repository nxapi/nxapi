import { PlaceCountryRegionRequestDto } from './PlaceCountryRegionRequestDto';
import java from 'js-to-java';

export interface IPlaceCreateRequestDto {
  address?: string;
  placeId?: number;
  name?: string;
  spaceNum?: number;
  correlationId?: string;
  landline?: string;
  placeCountryRegionRequestDto?: PlaceCountryRegionRequestDto;
  operatorId?: number;
}

export class PlaceCreateRequestDto {
  constructor(params: IPlaceCreateRequestDto) {
    this.address = params.address;
    this.placeId = params.placeId;
    this.name = params.name;
    this.spaceNum = params.spaceNum;
    this.correlationId = params.correlationId;
    this.landline = params.landline;
    this.placeCountryRegionRequestDto = params.placeCountryRegionRequestDto;
    this.operatorId = params.operatorId;
  }

  address?: string;
  placeId?: number;
  name?: string;
  spaceNum?: number;
  correlationId?: string;
  landline?: string;
  placeCountryRegionRequestDto?: PlaceCountryRegionRequestDto;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceCreateRequestDto',
      $: {
        address: java.String(this.address),
        placeId: java.Long(this.placeId),
        name: java.String(this.name),
        spaceNum: java.Integer(this.spaceNum),
        correlationId: java.String(this.correlationId),
        landline: java.String(this.landline),
        placeCountryRegionRequestDto: this.placeCountryRegionRequestDto
          ? this.placeCountryRegionRequestDto.__fields2java()
          : null,
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
