import { BacthCheckAccountFuPermissionRequest } from './../request/permission/BacthCheckAccountFuPermissionRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { BacthCheckFuPermissionDto } from './../dto/permission/BacthCheckFuPermissionDto';
import { AccountRelationFuPermissionQuery } from './../request/AccountRelationFuPermissionQuery';
import { AccountRelationFuPermissionDto } from './../dto/AccountRelationFuPermissionDto';
import { ResourceQuery } from './../request/ResourceQuery';
import { ResourceDto } from './../dto/ResourceDto';
import { CheckAccountFuPermissionRequest } from './../request/CheckAccountFuPermissionRequest';
import { CheckFuPermissionDto } from './../dto/CheckFuPermissionDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIFunctionPermissionService {
  batchCheckAccountFuPermission(
    BacthCheckAccountFuPermissionRequest0: BacthCheckAccountFuPermissionRequest,
  ): TDubboCallResult<ClientBaseResponse<BacthCheckFuPermissionDto>>;
  getAccountRelationFuPermission(
    AccountRelationFuPermissionQuery0: AccountRelationFuPermissionQuery,
  ): TDubboCallResult<ClientBaseResponse<AccountRelationFuPermissionDto>>;
  getResourceTree(
    ResourceQuery0: ResourceQuery,
  ): TDubboCallResult<ClientBaseResponse<Array<ResourceDto>>>;
  checkAccountFuPermission(
    CheckAccountFuPermissionRequest0: CheckAccountFuPermissionRequest,
  ): TDubboCallResult<ClientBaseResponse<CheckFuPermissionDto>>;
}

export const IFunctionPermissionServiceWrapper = {
  batchCheckAccountFuPermission: argumentMap,
  getAccountRelationFuPermission: argumentMap,
  getResourceTree: argumentMap,
  checkAccountFuPermission: argumentMap,
};

export function IFunctionPermissionService(
  dubbo: Dubbo,
): IIFunctionPermissionService {
  return dubbo.proxyService<IIFunctionPermissionService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IFunctionPermissionService',
    methods: IFunctionPermissionServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
