import java from 'js-to-java';

export interface IFloorSpaceQueryHistoryRequestDto {
  spaceTypeId?: number;
  placeId?: number;
  correlationId?: string;
  spaceIds?: Array<number>;
  floor?: string;
  status?: number;
}

export class FloorSpaceQueryHistoryRequestDto {
  constructor(params: IFloorSpaceQueryHistoryRequestDto) {
    this.spaceTypeId = params.spaceTypeId;
    this.placeId = params.placeId;
    this.correlationId = params.correlationId;
    this.spaceIds = params.spaceIds;
    this.floor = params.floor;
    this.status = params.status;
  }

  spaceTypeId?: number;
  placeId?: number;
  correlationId?: string;
  spaceIds?: Array<number>;
  floor?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.upc.place.client.dto.request.FloorSpaceQueryHistoryRequestDto',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        placeId: java.Long(this.placeId),
        correlationId: java.String(this.correlationId),
        spaceIds: this.spaceIds
          ? java.List(
              (this.spaceIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        floor: java.String(this.floor),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
