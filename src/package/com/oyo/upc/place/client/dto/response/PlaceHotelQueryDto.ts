import java from 'js-to-java';

export interface IPlaceHotelQueryDto {
  placeId?: number;
}

export class PlaceHotelQueryDto {
  constructor(params: IPlaceHotelQueryDto) {
    this.placeId = params.placeId;
  }

  placeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceHotelQueryDto',
      $: {placeId: java.Long(this.placeId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
