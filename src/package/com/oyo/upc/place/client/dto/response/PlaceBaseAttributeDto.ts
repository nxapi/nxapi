import { AttributeDto } from './AttributeDto';
import java from 'js-to-java';

export interface IPlaceBaseAttributeDto {
  attributes?: Array<AttributeDto>;
}

export class PlaceBaseAttributeDto {
  constructor(params: IPlaceBaseAttributeDto) {
    this.attributes = params.attributes;
  }

  attributes?: Array<AttributeDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceBaseAttributeDto',
      $: {
        attributes: this.attributes
          ? java.List(
              (this.attributes || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
