import java from 'js-to-java';

export interface IBedInfoDto {
  code?: string;
  size?: string;
  name?: string;
  count?: number;
}

export class BedInfoDto {
  constructor(params: IBedInfoDto) {
    this.code = params.code;
    this.size = params.size;
    this.name = params.name;
    this.count = params.count;
  }

  code?: string;
  size?: string;
  name?: string;
  count?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.BedInfoDto',
      $: {
        code: java.String(this.code),
        size: java.String(this.size),
        name: java.String(this.name),
        count: java.Integer(this.count),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
