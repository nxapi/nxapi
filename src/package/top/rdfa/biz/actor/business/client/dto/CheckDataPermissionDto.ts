import java from 'js-to-java';

export interface ICheckDataPermissionDto {
  accountId?: number;
  dataType?: string;
  hasPermission?: boolean;
  dataGroupCode?: string;
  dataCode?: string;
  hasCurDataCodeAllPermission?: boolean;
}

export class CheckDataPermissionDto {
  constructor(params: ICheckDataPermissionDto) {
    this.accountId = params.accountId;
    this.dataType = params.dataType;
    this.hasPermission = params.hasPermission;
    this.dataGroupCode = params.dataGroupCode;
    this.dataCode = params.dataCode;
    this.hasCurDataCodeAllPermission = params.hasCurDataCodeAllPermission;
  }

  accountId?: number;
  dataType?: string;
  hasPermission?: boolean;
  dataGroupCode?: string;
  dataCode?: string;
  hasCurDataCodeAllPermission?: boolean;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.CheckDataPermissionDto',
      $: {
        accountId: java.Long(this.accountId),
        dataType: java.String(this.dataType),
        hasPermission: java.Boolean(this.hasPermission),
        dataGroupCode: java.String(this.dataGroupCode),
        dataCode: java.String(this.dataCode),
        hasCurDataCodeAllPermission: java.Boolean(
          this.hasCurDataCodeAllPermission,
        ),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
