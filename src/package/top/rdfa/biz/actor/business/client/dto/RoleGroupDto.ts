import { RoleDto } from './RoleDto';
import java from 'js-to-java';

export interface IRoleGroupDto {
  code?: string;
  level?: number;
  apply?: boolean;
  canAccess?: boolean;
  roles?: Array<RoleDto>;
  name?: string;
  description?: string;
  id?: number;
  parentIdPath?: number;
  parentId?: number;
  status?: boolean;
}

export class RoleGroupDto {
  constructor(params: IRoleGroupDto) {
    this.code = params.code;
    this.level = params.level;
    this.apply = params.apply;
    this.canAccess = params.canAccess;
    this.roles = params.roles;
    this.name = params.name;
    this.description = params.description;
    this.id = params.id;
    this.parentIdPath = params.parentIdPath;
    this.parentId = params.parentId;
    this.status = params.status;
  }

  code?: string;
  level?: number;
  apply?: boolean;
  canAccess?: boolean;
  roles?: Array<RoleDto>;
  name?: string;
  description?: string;
  id?: number;
  parentIdPath?: number;
  parentId?: number;
  status?: boolean;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.RoleGroupDto',
      $: {
        code: java.String(this.code),
        level: java.Integer(this.level),
        apply: java.Boolean(this.apply),
        canAccess: java.Boolean(this.canAccess),
        roles: this.roles
          ? java.List(
              (this.roles || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        name: java.String(this.name),
        description: java.String(this.description),
        id: java.Long(this.id),
        parentIdPath: java.Long(this.parentIdPath),
        parentId: java.Long(this.parentId),
        status: java.Boolean(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
