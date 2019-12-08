import java from 'js-to-java';

export interface ISpaceBasicInfo {
  spaceTypeId?: number;
  code?: string;
  size?: string;
  placeId?: number;
  id?: number;
  floor?: string;
  memoMessage?: string;
  statusCode?: number;
  oldSpaceId?: number;
}

export class SpaceBasicInfo {
  constructor(params: ISpaceBasicInfo) {
    this.spaceTypeId = params.spaceTypeId;
    this.code = params.code;
    this.size = params.size;
    this.placeId = params.placeId;
    this.id = params.id;
    this.floor = params.floor;
    this.memoMessage = params.memoMessage;
    this.statusCode = params.statusCode;
    this.oldSpaceId = params.oldSpaceId;
  }

  spaceTypeId?: number;
  code?: string;
  size?: string;
  placeId?: number;
  id?: number;
  floor?: string;
  memoMessage?: string;
  statusCode?: number;
  oldSpaceId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.common.SpaceBasicInfo',
      $: {
        spaceTypeId: java.Long(this.spaceTypeId),
        code: java.String(this.code),
        size: java.String(this.size),
        placeId: java.Long(this.placeId),
        id: java.Long(this.id),
        floor: java.String(this.floor),
        memoMessage: java.String(this.memoMessage),
        statusCode: java.Integer(this.statusCode),
        oldSpaceId: java.Long(this.oldSpaceId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
