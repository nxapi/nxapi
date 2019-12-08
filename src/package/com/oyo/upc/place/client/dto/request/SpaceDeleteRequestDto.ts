import java from 'js-to-java';

export interface ISpaceDeleteRequestDto {
  spaceId?: number;
  operatorId?: number;
}

export class SpaceDeleteRequestDto {
  constructor(params: ISpaceDeleteRequestDto) {
    this.spaceId = params.spaceId;
    this.operatorId = params.operatorId;
  }

  spaceId?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.SpaceDeleteRequestDto',
      $: {
        spaceId: java.Long(this.spaceId),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
