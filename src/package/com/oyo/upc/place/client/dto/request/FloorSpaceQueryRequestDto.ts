import java from 'js-to-java';

export interface IFloorSpaceQueryRequestDto {
  spaceTypeId?: number;
  placeId?: number;
  pageSize?: number;
  startTime?: Date;
  endTime?: Date;
  spaceIds?: Array<number>;
  floor?: string;
  pageNum?: number;
  status?: number;
}

export class FloorSpaceQueryRequestDto {
  constructor(params: IFloorSpaceQueryRequestDto) {
    this.spaceTypeId = params.spaceTypeId;
    this.placeId = params.placeId;
    this.pageSize = params.pageSize;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.spaceIds = params.spaceIds;
    this.floor = params.floor;
    this.pageNum = params.pageNum;
    this.status = params.status;
  }

  spaceTypeId?: number;
  placeId?: number;
  pageSize?: number;
  startTime?: Date;
  endTime?: Date;
  spaceIds?: Array<number>;
  floor?: string;
  pageNum?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.FloorSpaceQueryRequestDto',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        placeId: java.Long(this.placeId),
        pageSize: java.Integer(this.pageSize),
        startTime: this.startTime,
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
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
