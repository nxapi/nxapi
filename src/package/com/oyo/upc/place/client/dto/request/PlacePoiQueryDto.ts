import java from 'js-to-java';

export interface IPlacePoiQueryDto {
  placeId?: number;
  status?: number;
}

export class PlacePoiQueryDto {
  constructor(params: IPlacePoiQueryDto) {
    this.placeId = params.placeId;
    this.status = params.status;
  }

  placeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlacePoiQueryDto',
      $: {placeId: java.Long(this.placeId), status: java.Integer(this.status)},
    };
  }
}

//generate by interpret-cli dubbo2.js
