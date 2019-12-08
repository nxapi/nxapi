import { Attribute } from './../../common/Attribute';
import java from 'js-to-java';

export interface IPlaceAttributeCreateRequestDto {
  placeAttributeIds?: Array<Attribute>;
  placeId?: number;
  source?: string;
  operatorId?: string;
  status?: number;
}

export class PlaceAttributeCreateRequestDto {
  constructor(params: IPlaceAttributeCreateRequestDto) {
    this.placeAttributeIds = params.placeAttributeIds;
    this.placeId = params.placeId;
    this.source = params.source;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  placeAttributeIds?: Array<Attribute>;
  placeId?: number;
  source?: string;
  operatorId?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.PlaceAttributeCreateRequestDto',
      $: {
        placeAttributeIds: this.placeAttributeIds
          ? java.List(
              (this.placeAttributeIds || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        placeId: java.Long(this.placeId),
        source: java.String(this.source),
        operatorId: java.String(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
