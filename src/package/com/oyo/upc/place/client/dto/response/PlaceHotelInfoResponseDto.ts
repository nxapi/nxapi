import java from 'js-to-java';

export interface IPlaceHotelInfoResponseDto {
  oyoId?: string;
  placeId?: number;
}

export class PlaceHotelInfoResponseDto {
  constructor(params: IPlaceHotelInfoResponseDto) {
    this.oyoId = params.oyoId;
    this.placeId = params.placeId;
  }

  oyoId?: string;
  placeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceHotelInfoResponseDto',
      $: {oyoId: java.String(this.oyoId), placeId: java.Long(this.placeId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
