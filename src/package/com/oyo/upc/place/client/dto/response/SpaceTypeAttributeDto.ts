import java from 'js-to-java';

export interface ISpaceTypeAttributeDto {
  spaceTypeId?: number;
  placeId?: number;
  spaceTypeAttributeId?: number;
  spaceTypeAttributeName?: string;
}

export class SpaceTypeAttributeDto {
  constructor(params: ISpaceTypeAttributeDto) {
    this.spaceTypeId = params.spaceTypeId;
    this.placeId = params.placeId;
    this.spaceTypeAttributeId = params.spaceTypeAttributeId;
    this.spaceTypeAttributeName = params.spaceTypeAttributeName;
  }

  spaceTypeId?: number;
  placeId?: number;
  spaceTypeAttributeId?: number;
  spaceTypeAttributeName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.SpaceTypeAttributeDto',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        placeId: java.Long(this.placeId),
        spaceTypeAttributeId: java.Long(this.spaceTypeAttributeId),
        spaceTypeAttributeName: java.String(this.spaceTypeAttributeName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
