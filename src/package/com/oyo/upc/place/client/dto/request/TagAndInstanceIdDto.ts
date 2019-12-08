import java from 'js-to-java';

export interface ITagAndInstanceIdDto {
  instanceId?: string;
  tag?: string;
}

export class TagAndInstanceIdDto {
  constructor(params: ITagAndInstanceIdDto) {
    this.instanceId = params.instanceId;
    this.tag = params.tag;
  }

  instanceId?: string;
  tag?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.TagAndInstanceIdDto',
      $: {instanceId: java.String(this.instanceId), tag: java.String(this.tag)},
    };
  }
}

//generate by interpret-cli dubbo2.js
