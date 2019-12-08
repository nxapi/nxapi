import java from 'js-to-java';

export interface ISpaceTypeQueryHistoryRequestDto {
  isValid?: number;
  placeId?: number;
  placeTypeId?: number;
  correlationId?: string;
}

export class SpaceTypeQueryHistoryRequestDto {
  constructor(params: ISpaceTypeQueryHistoryRequestDto) {
    this.isValid = params.isValid;
    this.placeId = params.placeId;
    this.placeTypeId = params.placeTypeId;
    this.correlationId = params.correlationId;
  }

  isValid?: number;
  placeId?: number;
  placeTypeId?: number;
  correlationId?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.SpaceTypeQueryHistoryRequestDto',
      $: {
        isValid: java.Integer(this.isValid),
        placeId: java.Long(this.placeId),
        placeTypeId: java.Integer(this.placeTypeId),
        correlationId: java.String(this.correlationId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
