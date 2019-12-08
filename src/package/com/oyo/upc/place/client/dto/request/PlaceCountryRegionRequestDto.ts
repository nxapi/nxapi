import java from 'js-to-java';

export interface IPlaceCountryRegionRequestDto {
  districtId?: number;
  stateId?: number;
  cityId?: number;
  countryId?: number;
  streetId?: number;
}

export class PlaceCountryRegionRequestDto {
  constructor(params: IPlaceCountryRegionRequestDto) {
    this.districtId = params.districtId;
    this.stateId = params.stateId;
    this.cityId = params.cityId;
    this.countryId = params.countryId;
    this.streetId = params.streetId;
  }

  districtId?: number;
  stateId?: number;
  cityId?: number;
  countryId?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceCountryRegionRequestDto',
      $: {
        districtId: java.Integer(this.districtId),
        stateId: java.Integer(this.stateId),
        cityId: java.Integer(this.cityId),
        countryId: java.Integer(this.countryId),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
