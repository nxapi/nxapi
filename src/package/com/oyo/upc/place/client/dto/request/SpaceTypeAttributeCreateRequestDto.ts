import { Attribute } from './../../common/Attribute';
import java from 'js-to-java';

export interface ISpaceTypeAttributeCreateRequestDto {
  spaceTypeId?: number;
  placeAttributeIds?: Array<Attribute>;
  operatorId?: string;
}

export class SpaceTypeAttributeCreateRequestDto {
  constructor(params: ISpaceTypeAttributeCreateRequestDto) {
    this.spaceTypeId = params.spaceTypeId;
    this.placeAttributeIds = params.placeAttributeIds;
    this.operatorId = params.operatorId;
  }

  spaceTypeId?: number;
  placeAttributeIds?: Array<Attribute>;
  operatorId?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.SpaceTypeAttributeCreateRequestDto',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        placeAttributeIds: this.placeAttributeIds
          ? java.List(
              (this.placeAttributeIds || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        operatorId: java.String(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
