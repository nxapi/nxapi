import java from 'js-to-java';

export interface IAggregationResourceVO {
  code?: string;
  available?: boolean;
  permission?: string;
  parentIdPath?: string;
  parentCodePath?: string;
  type?: string;
  leaf?: boolean;
  url?: string;
  parentId?: number;
  parentName?: string;
  name?: string;
  id?: number;
  applicationId?: number;
  status?: boolean;
}

export class AggregationResourceVO {
  constructor(params: IAggregationResourceVO) {
    this.code = params.code;
    this.available = params.available;
    this.permission = params.permission;
    this.parentIdPath = params.parentIdPath;
    this.parentCodePath = params.parentCodePath;
    this.type = params.type;
    this.leaf = params.leaf;
    this.url = params.url;
    this.parentId = params.parentId;
    this.parentName = params.parentName;
    this.name = params.name;
    this.id = params.id;
    this.applicationId = params.applicationId;
    this.status = params.status;
  }

  code?: string;
  available?: boolean;
  permission?: string;
  parentIdPath?: string;
  parentCodePath?: string;
  type?: string;
  leaf?: boolean;
  url?: string;
  parentId?: number;
  parentName?: string;
  name?: string;
  id?: number;
  applicationId?: number;
  status?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.dto.AggregationResourceVO',
      $: {
        code: java.String(this.code),
        available: java.Boolean(this.available),
        permission: java.String(this.permission),
        parentIdPath: java.String(this.parentIdPath),
        parentCodePath: java.String(this.parentCodePath),
        type: java.String(this.type),
        leaf: java.Boolean(this.leaf),
        url: java.String(this.url),
        parentId: java.Long(this.parentId),
        parentName: java.String(this.parentName),
        name: java.String(this.name),
        id: java.Long(this.id),
        applicationId: java.Long(this.applicationId),
        status: java.Boolean(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
