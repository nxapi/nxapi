import { Attribute } from './../../common/Attribute';
import java from 'js-to-java';

export interface ISpaceAttributeCreateRequestDto {
  spaceId?: number;
  attriType?: number;
  attributes?: Array<Attribute>;
  operatorId?: number;
}

export class SpaceAttributeCreateRequestDto {
  constructor(params: ISpaceAttributeCreateRequestDto) {
    this.spaceId = params.spaceId;
    this.attriType = params.attriType;
    this.attributes = params.attributes;
    this.operatorId = params.operatorId;
  }

  spaceId?: number;
  attriType?: number;
  attributes?: Array<Attribute>;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.SpaceAttributeCreateRequestDto',
      $: {
        spaceId: java.Long(this.spaceId),
        attriType: java.Integer(this.attriType),
        attributes: this.attributes
          ? java.List(
              (this.attributes || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
