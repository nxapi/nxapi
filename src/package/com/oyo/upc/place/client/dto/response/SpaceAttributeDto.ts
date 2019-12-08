import { AttributeDto } from './AttributeDto';
import java from 'js-to-java';

export interface ISpaceAttributeDto {
  spaceId?: number;
  attributeDtos?: Array<AttributeDto>;
}

export class SpaceAttributeDto {
  constructor(params: ISpaceAttributeDto) {
    this.spaceId = params.spaceId;
    this.attributeDtos = params.attributeDtos;
  }

  spaceId?: number;
  attributeDtos?: Array<AttributeDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.SpaceAttributeDto',
      $: {
        spaceId: java.Long(this.spaceId),
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
