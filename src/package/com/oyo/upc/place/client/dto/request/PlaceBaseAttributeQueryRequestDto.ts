import java from 'js-to-java';

export interface IPlaceBaseAttributeQueryRequestDto {
  source?: string;
  baseType?: number;
}

export class PlaceBaseAttributeQueryRequestDto {
  constructor(params: IPlaceBaseAttributeQueryRequestDto) {
    this.source = params.source;
    this.baseType = params.baseType;
  }

  source?: string;
  baseType?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceBaseAttributeQueryRequestDto',
      $: {
        source: java.String(this.source),
        baseType: java.Integer(this.baseType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
