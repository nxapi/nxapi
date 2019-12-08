import java from 'js-to-java';

export interface IBacthCheckFuPermissionDto {
  accountId?: number;
  hasPermissionMap?: {[name: string]: boolean};
}

export class BacthCheckFuPermissionDto {
  constructor(params: IBacthCheckFuPermissionDto) {
    this.accountId = params.accountId;
    this.hasPermissionMap = params.hasPermissionMap;
  }

  accountId?: number;
  hasPermissionMap?: {[name: string]: boolean};

  __fields2java(): any {
    let hasPermissionMapMapTransfer = new Map();
    for (let mapKey in this.hasPermissionMap) {
      hasPermissionMapMapTransfer.set(
        java.String(mapKey),
        java.Boolean(this.hasPermissionMap[mapKey]),
      );
    }
    return {
      $class:
        'top.rdfa.biz.actor.business.client.dto.permission.BacthCheckFuPermissionDto',
      $: {
        accountId: java.Long(this.accountId),
        hasPermissionMap: java.Map(hasPermissionMapMapTransfer),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
