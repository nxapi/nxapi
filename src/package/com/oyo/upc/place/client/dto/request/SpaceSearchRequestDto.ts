import java from 'js-to-java';

export interface ISpaceSearchRequestDto {
  spaceTypeId?: number;
  placeId?: number;
  pageSize?: number;
  startTime?: Date;
  correlationId?: string;
  endTime?: Date;
  spaceIds?: Array<number>;
  floor?: string;
  pageNum?: number;
}

export class SpaceSearchRequestDto {
  constructor(params: ISpaceSearchRequestDto) {
    this.spaceTypeId = params.spaceTypeId;
    this.placeId = params.placeId;
    this.pageSize = params.pageSize;
    this.startTime = params.startTime;
    this.correlationId = params.correlationId;
    this.endTime = params.endTime;
    this.spaceIds = params.spaceIds;
    this.floor = params.floor;
    this.pageNum = params.pageNum;
  }

  spaceTypeId?: number;
  placeId?: number;
  pageSize?: number;
  startTime?: Date;
  correlationId?: string;
  endTime?: Date;
  spaceIds?: Array<number>;
  floor?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.SpaceSearchRequestDto',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        placeId: java.Long(this.placeId),
        pageSize: java.Integer(this.pageSize),
        startTime: this.startTime,
        correlationId: java.String(this.correlationId),
        endTime: this.endTime,
        spaceIds: this.spaceIds
          ? java.List(
              (this.spaceIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        floor: java.String(this.floor),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
