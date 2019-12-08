import java from 'js-to-java';

export interface IDeleteSpaceTypeOrToiletDto {
  placeId?: number;
  operatorId?: number;
  status?: number;
}

export class DeleteSpaceTypeOrToiletDto {
  constructor(params: IDeleteSpaceTypeOrToiletDto) {
    this.placeId = params.placeId;
    this.operatorId = params.operatorId;
    this.status = params.status;
  }

  placeId?: number;
  operatorId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.DeleteSpaceTypeOrToiletDto',
      $: {
        placeId: java.Long(this.placeId),
        operatorId: java.Long(this.operatorId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
