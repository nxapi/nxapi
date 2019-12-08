import java from 'js-to-java';

export interface IDataPermissionDto {
  valid?: boolean;
  childrenDataPermissions?: Array<DataPermissionDto>;
  extendTypes?: Array<string>;
  parentCode?: string;
  name?: string;
  dataGroupCode?: string;
  type?: string;
  dataCode?: string;
  leaf?: boolean;
}

export class DataPermissionDto {
  constructor(params: IDataPermissionDto) {
    this.valid = params.valid;
    this.childrenDataPermissions = params.childrenDataPermissions;
    this.extendTypes = params.extendTypes;
    this.parentCode = params.parentCode;
    this.name = params.name;
    this.dataGroupCode = params.dataGroupCode;
    this.type = params.type;
    this.dataCode = params.dataCode;
    this.leaf = params.leaf;
  }

  valid?: boolean;
  childrenDataPermissions?: Array<DataPermissionDto>;
  extendTypes?: Array<string>;
  parentCode?: string;
  name?: string;
  dataGroupCode?: string;
  type?: string;
  dataCode?: string;
  leaf?: boolean;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.DataPermissionDto',
      $: {
        valid: java.Boolean(this.valid),
        childrenDataPermissions: this.childrenDataPermissions
          ? java.List(
              (this.childrenDataPermissions || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        extendTypes: this.extendTypes
          ? java.List(
              (this.extendTypes || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        parentCode: java.String(this.parentCode),
        name: java.String(this.name),
        dataGroupCode: java.String(this.dataGroupCode),
        type: java.String(this.type),
        dataCode: java.String(this.dataCode),
        leaf: java.Boolean(this.leaf),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
