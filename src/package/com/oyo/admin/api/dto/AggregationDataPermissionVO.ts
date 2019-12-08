import java from 'js-to-java';

export interface IAggregationDataPermissionVO {
  valid?: boolean;
  code?: string;
  dataId?: number;
  name?: string;
  id?: number;
  leaf?: boolean;
  type?: string;
  parentId?: number;
}

export class AggregationDataPermissionVO {
  constructor(params: IAggregationDataPermissionVO) {
    this.valid = params.valid;
    this.code = params.code;
    this.dataId = params.dataId;
    this.name = params.name;
    this.id = params.id;
    this.leaf = params.leaf;
    this.type = params.type;
    this.parentId = params.parentId;
  }

  valid?: boolean;
  code?: string;
  dataId?: number;
  name?: string;
  id?: number;
  leaf?: boolean;
  type?: string;
  parentId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.dto.AggregationDataPermissionVO',
      $: {
        valid: java.Boolean(this.valid),
        code: java.String(this.code),
        dataId: java.Long(this.dataId),
        name: java.String(this.name),
        id: java.Long(this.id),
        leaf: java.Boolean(this.leaf),
        type: java.String(this.type),
        parentId: java.Long(this.parentId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
