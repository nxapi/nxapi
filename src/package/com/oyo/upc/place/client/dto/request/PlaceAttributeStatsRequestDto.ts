import java from 'js-to-java';

export interface IPlaceAttributeStatsRequestDto {
  attributeType?: number;
  placeId?: number;
  status?: number;
}

export class PlaceAttributeStatsRequestDto {
  constructor(params: IPlaceAttributeStatsRequestDto) {
    this.attributeType = params.attributeType;
    this.placeId = params.placeId;
    this.status = params.status;
  }

  attributeType?: number;
  placeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceAttributeStatsRequestDto',
      $: {
        attributeType: java.Long(this.attributeType),
        placeId: java.Long(this.placeId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
