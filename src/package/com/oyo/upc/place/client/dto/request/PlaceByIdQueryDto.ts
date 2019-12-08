import java from 'js-to-java';

export interface IPlaceByIdQueryDto {
  placeId?: number;
  id?: number;
  status?: number;
}

export class PlaceByIdQueryDto {
  constructor(params: IPlaceByIdQueryDto) {
    this.placeId = params.placeId;
    this.id = params.id;
    this.status = params.status;
  }

  placeId?: number;
  id?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.PlaceByIdQueryDto',
      $: {
        placeId: java.Long(this.placeId),
        id: java.Long(this.id),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
