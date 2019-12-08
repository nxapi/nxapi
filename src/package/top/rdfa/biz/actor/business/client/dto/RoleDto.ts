import { ResourceDto } from './ResourceDto';
import java from 'js-to-java';

export interface IRoleDto {
  roleId?: number;
  roleCode?: string;
  roleName?: string;
  resources?: Array<ResourceDto>;
  roleGroupCode?: string;
}

export class RoleDto {
  constructor(params: IRoleDto) {
    this.roleId = params.roleId;
    this.roleCode = params.roleCode;
    this.roleName = params.roleName;
    this.resources = params.resources;
    this.roleGroupCode = params.roleGroupCode;
  }

  roleId?: number;
  roleCode?: string;
  roleName?: string;
  resources?: Array<ResourceDto>;
  roleGroupCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.RoleDto',
      $: {
        roleId: java.Long(this.roleId),
        roleCode: java.String(this.roleCode),
        roleName: java.String(this.roleName),
        resources: this.resources
          ? java.List(
              (this.resources || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        roleGroupCode: java.String(this.roleGroupCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
