import java from 'js-to-java';

export interface IChannelInfoDto {
  code?: string;
  name?: string;
}

export class ChannelInfoDto {
  constructor(params: IChannelInfoDto) {
    this.code = params.code;
    this.name = params.name;
  }

  code?: string;
  name?: string;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.utp.dto.ChannelInfoDto',
      $: {code: java.String(this.code), name: java.String(this.name)},
    };
  }
}

//generate by interpret-cli dubbo2.js
