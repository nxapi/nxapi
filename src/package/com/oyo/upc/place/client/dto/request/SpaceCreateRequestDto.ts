import java from 'js-to-java';

export interface ISpaceCreateRequestDto {
  spaceTypeId?: number;
  code?: string;
  size?: string;
  placeId?: number;
  id?: number;
  floor?: string;
  peopleNum?: number;
  operatorId?: number;
  memoMessage?: string;
  statusCode?: number;
}

export class SpaceCreateRequestDto {
  constructor(params: ISpaceCreateRequestDto) {
    this.spaceTypeId = params.spaceTypeId;
    this.code = params.code;
    this.size = params.size;
    this.placeId = params.placeId;
    this.id = params.id;
    this.floor = params.floor;
    this.peopleNum = params.peopleNum;
    this.operatorId = params.operatorId;
    this.memoMessage = params.memoMessage;
    this.statusCode = params.statusCode;
  }

  spaceTypeId?: number;
  code?: string;
  size?: string;
  placeId?: number;
  id?: number;
  floor?: string;
  peopleNum?: number;
  operatorId?: number;
  memoMessage?: string;
  statusCode?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.SpaceCreateRequestDto',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        code: java.String(this.code),
        size: java.String(this.size),
        placeId: java.Long(this.placeId),
        id: java.Long(this.id),
        floor: java.String(this.floor),
        peopleNum: java.Integer(this.peopleNum),
        operatorId: java.Long(this.operatorId),
        memoMessage: java.String(this.memoMessage),
        statusCode: java.Integer(this.statusCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
