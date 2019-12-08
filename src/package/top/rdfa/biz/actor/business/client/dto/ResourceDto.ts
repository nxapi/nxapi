import java from 'js-to-java';

export interface IResourceDto {
  valid?: boolean;
  code?: string;
  parentCode?: string;
  childResourceDTOS?: Array<ResourceDto>;
  name?: string;
  id?: number;
  type?: string;
  leaf?: boolean;
  applicationCode?: string;
  url?: string;
  parentId?: number;
}

export class ResourceDto {
  constructor(params: IResourceDto) {
    this.valid = params.valid;
    this.code = params.code;
    this.parentCode = params.parentCode;
    this.childResourceDTOS = params.childResourceDTOS;
    this.name = params.name;
    this.id = params.id;
    this.type = params.type;
    this.leaf = params.leaf;
    this.applicationCode = params.applicationCode;
    this.url = params.url;
    this.parentId = params.parentId;
  }

  valid?: boolean;
  code?: string;
  parentCode?: string;
  childResourceDTOS?: Array<ResourceDto>;
  name?: string;
  id?: number;
  type?: string;
  leaf?: boolean;
  applicationCode?: string;
  url?: string;
  parentId?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.ResourceDto',
      $: {
        valid: java.Boolean(this.valid),
        code: java.String(this.code),
        parentCode: java.String(this.parentCode),
        childResourceDTOS: this.childResourceDTOS
          ? java.List(
              (this.childResourceDTOS || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        name: java.String(this.name),
        id: java.Long(this.id),
        type: java.String(this.type),
        leaf: java.Boolean(this.leaf),
        applicationCode: java.String(this.applicationCode),
        url: java.String(this.url),
        parentId: java.Long(this.parentId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
