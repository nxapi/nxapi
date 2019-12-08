import java from 'js-to-java';

export interface IPlaceLeadsRepeatQueryRequest {
  districtId?: number;
  address?: string;
  stateId?: number;
  name?: string;
  cityId?: number;
  streetId?: number;
}

export class PlaceLeadsRepeatQueryRequest {
  constructor(params: IPlaceLeadsRepeatQueryRequest) {
    this.districtId = params.districtId;
    this.address = params.address;
    this.stateId = params.stateId;
    this.name = params.name;
    this.cityId = params.cityId;
    this.streetId = params.streetId;
  }

  districtId?: number;
  address?: string;
  stateId?: number;
  name?: string;
  cityId?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceLeadsRepeatQueryRequest',
      $: {
        districtId: java.Integer(this.districtId),
        address: java.String(this.address),
        stateId: java.Integer(this.stateId),
        name: java.String(this.name),
        cityId: java.Integer(this.cityId),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
