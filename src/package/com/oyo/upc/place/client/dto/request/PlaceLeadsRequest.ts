import java from 'js-to-java';

export interface IPlaceLeadsRequest {
  brandName?: string;
  address?: string;
  stateId?: number;
  placeId?: number;
  darkSpaceNum?: number;
  spaceNum?: number;
  cityId?: number;
  type?: number;
  countryId?: number;
  revPar?: string;
  brandType?: number;
  districtId?: number;
  name?: string;
  hotelType?: number;
  operatorId?: number;
  streetId?: number;
}

export class PlaceLeadsRequest {
  constructor(params: IPlaceLeadsRequest) {
    this.brandName = params.brandName;
    this.address = params.address;
    this.stateId = params.stateId;
    this.placeId = params.placeId;
    this.darkSpaceNum = params.darkSpaceNum;
    this.spaceNum = params.spaceNum;
    this.cityId = params.cityId;
    this.type = params.type;
    this.countryId = params.countryId;
    this.revPar = params.revPar;
    this.brandType = params.brandType;
    this.districtId = params.districtId;
    this.name = params.name;
    this.hotelType = params.hotelType;
    this.operatorId = params.operatorId;
    this.streetId = params.streetId;
  }

  brandName?: string;
  address?: string;
  stateId?: number;
  placeId?: number;
  darkSpaceNum?: number;
  spaceNum?: number;
  cityId?: number;
  type?: number;
  countryId?: number;
  revPar?: string;
  brandType?: number;
  districtId?: number;
  name?: string;
  hotelType?: number;
  operatorId?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceLeadsRequest',
      $: {
        brandName: java.String(this.brandName),
        address: java.String(this.address),
        stateId: java.Integer(this.stateId),
        placeId: java.Long(this.placeId),
        darkSpaceNum: java.Integer(this.darkSpaceNum),
        spaceNum: java.Integer(this.spaceNum),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        countryId: java.Integer(this.countryId),
        revPar: java.String(this.revPar),
        brandType: java.Integer(this.brandType),
        districtId: java.Integer(this.districtId),
        name: java.String(this.name),
        hotelType: java.Integer(this.hotelType),
        operatorId: java.Long(this.operatorId),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
