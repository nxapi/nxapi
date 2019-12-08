import java from 'js-to-java';

export interface ICheckUserDataPermissionDto {
  dataType?: string;
  hasPermission?: boolean;
  dataGroupCode?: string;
  dataCode?: string;
  userId?: number;
  hasCurDataCodeAllPermission?: boolean;
}

export class CheckUserDataPermissionDto {
  constructor(params: ICheckUserDataPermissionDto) {
    this.dataType = params.dataType;
    this.hasPermission = params.hasPermission;
    this.dataGroupCode = params.dataGroupCode;
    this.dataCode = params.dataCode;
    this.userId = params.userId;
    this.hasCurDataCodeAllPermission = params.hasCurDataCodeAllPermission;
  }

  dataType?: string;
  hasPermission?: boolean;
  dataGroupCode?: string;
  dataCode?: string;
  userId?: number;
  hasCurDataCodeAllPermission?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.v2.dto.CheckUserDataPermissionDto',
      $: {
        dataType: java.String(this.dataType),
        hasPermission: java.Boolean(this.hasPermission),
        dataGroupCode: java.String(this.dataGroupCode),
        dataCode: java.String(this.dataCode),
        userId: java.Long(this.userId),
        hasCurDataCodeAllPermission: java.Boolean(
          this.hasCurDataCodeAllPermission,
        ),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
