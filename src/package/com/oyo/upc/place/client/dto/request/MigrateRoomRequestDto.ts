import java from 'js-to-java';

export interface IMigrateRoomRequestDto {
  placeId?: number;
  operatorId?: number;
}

export class MigrateRoomRequestDto {
  constructor(params: IMigrateRoomRequestDto) {
    this.placeId = params.placeId;
    this.operatorId = params.operatorId;
  }

  placeId?: number;
  operatorId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.MigrateRoomRequestDto',
      $: {
        placeId: java.Long(this.placeId),
        operatorId: java.Long(this.operatorId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
