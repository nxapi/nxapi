import { RoleDto } from './RoleDto';
import { ResourceDto } from './ResourceDto';
import { DataPermissionDto } from './DataPermissionDto';
import { AccountDto } from './AccountDto';
import java from 'js-to-java';

export interface IAccountRelationDataPermissionDto {
  role?: RoleDto;
  resource?: ResourceDto;
  dataPermissionMap?: {[name: string]: Array<DataPermissionDto>};
  account?: AccountDto;
}

export class AccountRelationDataPermissionDto {
  constructor(params: IAccountRelationDataPermissionDto) {
    this.role = params.role;
    this.resource = params.resource;
    this.dataPermissionMap = params.dataPermissionMap;
    this.account = params.account;
  }

  role?: RoleDto;
  resource?: ResourceDto;
  dataPermissionMap?: {[name: string]: Array<DataPermissionDto>};
  account?: AccountDto;

  __fields2java(): any {
    let dataPermissionMapMapTransfer = new Map();
    for (let mapKey in this.dataPermissionMap) {
      dataPermissionMapMapTransfer.set(
        java.String(mapKey),
        java.List(
          this.dataPermissionMap[mapKey].map((paramItem: any) => {
            return paramItem ? paramItem.__fields2java() : null;
          }),
        ),
      );
    }
    return {
      $class:
        'top.rdfa.biz.actor.business.client.dto.AccountRelationDataPermissionDto',
      $: {
        role: this.role ? this.role.__fields2java() : null,
        resource: this.resource ? this.resource.__fields2java() : null,
        dataPermissionMap: java.Map(dataPermissionMapMapTransfer),
        account: this.account ? this.account.__fields2java() : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
