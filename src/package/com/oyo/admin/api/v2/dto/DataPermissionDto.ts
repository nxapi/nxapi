import java from 'js-to-java';

export interface IDataPermissionDto {
  valid?: boolean;
  childrenDataPermissions?: Array<DataPermissionDto>;
  parentCode?: string;
  name?: string;
  dataGroupCode?: string;
  remark?: string;
  type?: string;
  dataCode?: string;
  leaf?: boolean;
}

export class DataPermissionDto {
  constructor(params: IDataPermissionDto) {
    this.valid = params.valid;
    this.childrenDataPermissions = params.childrenDataPermissions;
    this.parentCode = params.parentCode;
    this.name = params.name;
    this.dataGroupCode = params.dataGroupCode;
    this.remark = params.remark;
    this.type = params.type;
    this.dataCode = params.dataCode;
    this.leaf = params.leaf;
  }

  valid?: boolean;
  childrenDataPermissions?: Array<DataPermissionDto>;
  parentCode?: string;
  name?: string;
  dataGroupCode?: string;
  remark?: string;
  type?: string;
  dataCode?: string;
  leaf?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.v2.dto.DataPermissionDto',
      $: {
        valid: java.Boolean(this.valid),
        childrenDataPermissions: this.childrenDataPermissions
          ? java.List(
              (this.childrenDataPermissions || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        parentCode: java.String(this.parentCode),
        name: java.String(this.name),
        dataGroupCode: java.String(this.dataGroupCode),
        remark: java.String(this.remark),
        type: java.String(this.type),
        dataCode: java.String(this.dataCode),
        leaf: java.Boolean(this.leaf),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
