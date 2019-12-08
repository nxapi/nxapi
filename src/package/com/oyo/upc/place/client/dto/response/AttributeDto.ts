import java from 'js-to-java';

export interface IAttributeDto {
  name?: string;
  count?: number;
  id?: number;
  type?: number;
  value?: string;
}

export class AttributeDto {
  constructor(params: IAttributeDto) {
    this.name = params.name;
    this.count = params.count;
    this.id = params.id;
    this.type = params.type;
    this.value = params.value;
  }

  name?: string;
  count?: number;
  id?: number;
  type?: number;
  value?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.response.AttributeDto',
      $: {
        name: java.String(this.name),
        count: java.Integer(this.count),
        id: java.Long(this.id),
        type: java.Integer(this.type),
        value: java.String(this.value),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
