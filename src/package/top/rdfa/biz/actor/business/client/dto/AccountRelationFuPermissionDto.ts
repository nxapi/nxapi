import { RoleDto } from './RoleDto';
import { ResourceDto } from './ResourceDto';
import { RoleGroupDto } from './RoleGroupDto';
import { AccountDto } from './AccountDto';
import { DataPermissionDto } from './DataPermissionDto';
import java from 'js-to-java';

export interface IAccountRelationFuPermissionDto {
  roles?: Array<RoleDto>;
  resources?: Array<ResourceDto>;
  roleGroups?: Array<RoleGroupDto>;
  account?: AccountDto;
  dataPermission?: DataPermissionDto;
}

export class AccountRelationFuPermissionDto {
  constructor(params: IAccountRelationFuPermissionDto) {
    this.roles = params.roles;
    this.resources = params.resources;
    this.roleGroups = params.roleGroups;
    this.account = params.account;
    this.dataPermission = params.dataPermission;
  }

  roles?: Array<RoleDto>;
  resources?: Array<ResourceDto>;
  roleGroups?: Array<RoleGroupDto>;
  account?: AccountDto;
  dataPermission?: DataPermissionDto;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.actor.business.client.dto.AccountRelationFuPermissionDto',
      $: {
        roles: this.roles
          ? java.List(
              (this.roles || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        resources: this.resources
          ? java.List(
              (this.resources || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        roleGroups: this.roleGroups
          ? java.List(
              (this.roleGroups || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        account: this.account ? this.account.__fields2java() : null,
        dataPermission: this.dataPermission
          ? this.dataPermission.__fields2java()
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
