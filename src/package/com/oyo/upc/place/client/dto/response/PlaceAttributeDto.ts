import { AttributeDto } from './AttributeDto';
import java from 'js-to-java';

export interface IPlaceAttributeDto {
  placeId?: number;
  attributeDtos?: Array<AttributeDto>;
}

export class PlaceAttributeDto {
  constructor(params: IPlaceAttributeDto) {
    this.placeId = params.placeId;
    this.attributeDtos = params.attributeDtos;
  }

  placeId?: number;
  attributeDtos?: Array<AttributeDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceAttributeDto',
      $: {
        placeId: java.Long(this.placeId),
        attributeDtos: this.attributeDtos
          ? java.List(
              (this.attributeDtos || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
