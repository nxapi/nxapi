import java from 'js-to-java';

export interface IGetPlaceAttributesRequestDto {
  placeId?: number;
  status?: number;
}

export class GetPlaceAttributesRequestDto {
  constructor(params: IGetPlaceAttributesRequestDto) {
    this.placeId = params.placeId;
    this.status = params.status;
  }

  placeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.GetPlaceAttributesRequestDto',
      $: {placeId: java.Long(this.placeId), status: java.Integer(this.status)},
    };
  }
}

//generate by interpret-cli dubbo2.js
