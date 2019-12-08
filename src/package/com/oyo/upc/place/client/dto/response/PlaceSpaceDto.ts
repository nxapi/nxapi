import java from 'js-to-java';

export interface IPlaceSpaceDto {
  spaceId?: number;
  spaceNo?: string;
  floor?: string;
  roomTypeId?: number;
  status?: number;
}

export class PlaceSpaceDto {
  constructor(params: IPlaceSpaceDto) {
    this.spaceId = params.spaceId;
    this.spaceNo = params.spaceNo;
    this.floor = params.floor;
    this.roomTypeId = params.roomTypeId;
    this.status = params.status;
  }

  spaceId?: number;
  spaceNo?: string;
  floor?: string;
  roomTypeId?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.PlaceSpaceDto',
      $: {
        spaceId: java.Long(this.spaceId),
        spaceNo: java.String(this.spaceNo),
        floor: java.String(this.floor),
        roomTypeId: java.Long(this.roomTypeId),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
