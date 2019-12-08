import { SpaceBasicInfo } from './../../common/SpaceBasicInfo';
import java from 'js-to-java';

export interface ISpaceQueryResponseDto {
  createTime?: Date;
  attributes?: any;
  updateTime?: Date;
  listRate?: number;
  space?: SpaceBasicInfo;
}

export class SpaceQueryResponseDto {
  constructor(params: ISpaceQueryResponseDto) {
    this.createTime = params.createTime;
    this.attributes = params.attributes;
    this.updateTime = params.updateTime;
    this.listRate = params.listRate;
    this.space = params.space;
  }

  createTime?: Date;
  attributes?: any;
  updateTime?: Date;
  listRate?: number;
  space?: SpaceBasicInfo;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.SpaceQueryResponseDto',
      $: {
        createTime: this.createTime,
        attributes: this.attributes,
        updateTime: this.updateTime,
        listRate: java.Double(this.listRate),
        space: this.space ? this.space.__fields2java() : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
