import java from 'js-to-java';

export interface ICheckFuPermissionDto {
  accountId?: number;
  fuCode?: string;
  hasPermission?: boolean;
}

export class CheckFuPermissionDto {
  constructor(params: ICheckFuPermissionDto) {
    this.accountId = params.accountId;
    this.fuCode = params.fuCode;
    this.hasPermission = params.hasPermission;
  }

  accountId?: number;
  fuCode?: string;
  hasPermission?: boolean;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.CheckFuPermissionDto',
      $: {
        accountId: java.Long(this.accountId),
        fuCode: java.String(this.fuCode),
        hasPermission: java.Boolean(this.hasPermission),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
