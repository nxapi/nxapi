import java from 'js-to-java';

export interface IAmenityVO {
  iconId?: number;
  code?: string;
  cnName?: string;
  name?: string;
  id?: number;
  priority?: number;
}

export class AmenityVO {
  constructor(params: IAmenityVO) {
    this.iconId = params.iconId;
    this.code = params.code;
    this.cnName = params.cnName;
    this.name = params.name;
    this.id = params.id;
    this.priority = params.priority;
  }

  iconId?: number;
  code?: string;
  cnName?: string;
  name?: string;
  id?: number;
  priority?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.amenity.AmenityVO',
      $: {
        iconId: java.Integer(this.iconId),
        code: java.String(this.code),
        cnName: java.String(this.cnName),
        name: java.String(this.name),
        id: java.Integer(this.id),
        priority: java.Integer(this.priority),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
