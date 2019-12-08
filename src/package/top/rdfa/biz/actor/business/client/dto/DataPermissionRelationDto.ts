import { RoleDto } from './RoleDto';
import { AccountDto } from './AccountDto';
import { DataPermissionDto } from './DataPermissionDto';
import java from 'js-to-java';

export interface IDataPermissionRelationDto {
  role?: RoleDto;
  accounts?: Array<AccountDto>;
  dataPermission?: DataPermissionDto;
}

export class DataPermissionRelationDto {
  constructor(params: IDataPermissionRelationDto) {
    this.role = params.role;
    this.accounts = params.accounts;
    this.dataPermission = params.dataPermission;
  }

  role?: RoleDto;
  accounts?: Array<AccountDto>;
  dataPermission?: DataPermissionDto;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.dto.DataPermissionRelationDto',
      $: {
        role: this.role ? this.role.__fields2java() : null,
        accounts: this.accounts
          ? java.List(
              (this.accounts || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        dataPermission: this.dataPermission
          ? this.dataPermission.__fields2java()
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
