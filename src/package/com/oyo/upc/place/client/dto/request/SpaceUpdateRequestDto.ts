import java from 'js-to-java';

export interface ISpaceUpdateRequestDto {
  spaceId?: number;
  spaceTypeId?: number;
  code?: string;
  size?: string;
  floor?: string;
  peopleNum?: number;
  operatorId?: number;
  memoMessage?: string;
  statusCode?: number;
}

export class SpaceUpdateRequestDto {
  constructor(params: ISpaceUpdateRequestDto) {
    this.spaceId = params.spaceId;
    this.spaceTypeId = params.spaceTypeId;
    this.code = params.code;
    this.size = params.size;
    this.floor = params.floor;
    this.peopleNum = params.peopleNum;
    this.operatorId = params.operatorId;
    this.memoMessage = params.memoMessage;
    this.statusCode = params.statusCode;
  }

  spaceId?: number;
  spaceTypeId?: number;
  code?: string;
  size?: string;
  floor?: string;
  peopleNum?: number;
  operatorId?: number;
  memoMessage?: string;
  statusCode?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.SpaceUpdateRequestDto',
      $: {
        spaceId: java.Long(this.spaceId),
        spaceTypeId: java.Long(this.spaceTypeId),
        code: java.String(this.code),
        size: java.String(this.size),
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
