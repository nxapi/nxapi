import java from 'js-to-java';

export interface IGetSpaceTypeAttributeRequestDto {
  spaceTypeId?: number;
  placeId?: number;
  status?: number;
}

export class GetSpaceTypeAttributeRequestDto {
  constructor(params: IGetSpaceTypeAttributeRequestDto) {
    this.spaceTypeId = params.spaceTypeId;
    this.placeId = params.placeId;
    this.status = params.status;
  }

  spaceTypeId?: number;
  placeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.GetSpaceTypeAttributeRequestDto',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        placeId: java.Long(this.placeId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
