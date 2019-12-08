import java from 'js-to-java';

export interface IRmDictionaryDTO {
  valid?: boolean;
  parentKey?: string;
  level?: number;
  dictGroup?: string;
  description?: string;
  id?: number;
  leaf?: boolean;
  dictKey?: string;
  value?: string;
}

export class RmDictionaryDTO {
  constructor(params: IRmDictionaryDTO) {
    this.valid = params.valid;
    this.parentKey = params.parentKey;
    this.level = params.level;
    this.dictGroup = params.dictGroup;
    this.description = params.description;
    this.id = params.id;
    this.leaf = params.leaf;
    this.dictKey = params.dictKey;
    this.value = params.value;
  }

  valid?: boolean;
  parentKey?: string;
  level?: number;
  dictGroup?: string;
  description?: string;
  id?: number;
  leaf?: boolean;
  dictKey?: string;
  value?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.RmDictionaryDTO',
      $: {
        valid: java.Boolean(this.valid),
        parentKey: java.String(this.parentKey),
        level: java.Byte(this.level),
        dictGroup: java.String(this.dictGroup),
        description: java.String(this.description),
        id: java.Long(this.id),
        leaf: java.Boolean(this.leaf),
        dictKey: java.String(this.dictKey),
        value: java.String(this.value),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
