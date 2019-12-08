import java from 'js-to-java';

export interface ISpaceTypeQueryRequestDto {
  isValid?: number;
  placeId?: number;
  placeTypeId?: number;
}

export class SpaceTypeQueryRequestDto {
  constructor(params: ISpaceTypeQueryRequestDto) {
    this.isValid = params.isValid;
    this.placeId = params.placeId;
    this.placeTypeId = params.placeTypeId;
  }

  isValid?: number;
  placeId?: number;
  placeTypeId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.SpaceTypeQueryRequestDto',
      $: {
        isValid: java.Integer(this.isValid),
        placeId: java.Long(this.placeId),
        placeTypeId: java.Integer(this.placeTypeId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
