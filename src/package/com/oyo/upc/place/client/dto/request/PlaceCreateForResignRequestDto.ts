import java from 'js-to-java';

export interface IPlaceCreateForResignRequestDto {
  placeId?: number;
  correlationId?: string;
  operatorId?: number;
}

export class PlaceCreateForResignRequestDto {
  constructor(params: IPlaceCreateForResignRequestDto) {
    this.placeId = params.placeId;
    this.correlationId = params.correlationId;
    this.operatorId = params.operatorId;
  }

  placeId?: number;
  correlationId?: string;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceCreateForResignRequestDto',
      $: {
        placeId: java.Long(this.placeId),
        correlationId: java.String(this.correlationId),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
