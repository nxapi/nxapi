import { CheckUserDataPermissionRequest } from './../request/CheckUserDataPermissionRequest';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { CheckUserDataPermissionDto } from './../dto/CheckUserDataPermissionDto';
import { DataPermissionBasicQueryRequest } from './../request/DataPermissionBasicQueryRequest';
import { DataPermissionDto } from './../dto/DataPermissionDto';
import { UserDataPermissionQueryRequest } from './../request/UserDataPermissionQueryRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { UserDataPermissionDto } from './../dto/UserDataPermissionDto';
import { UserDataPermissionNodeQueryRequest } from './../request/UserDataPermissionNodeQueryRequest';
import { argumentMap, JavaList } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIPermissionService {
  checkUserDataPermission(
    List0: JavaList,
  ): TDubboCallResult<ClientPageResponse<CheckUserDataPermissionDto>>;
  getBasicDataPermission(
    DataPermissionBasicQueryRequest0: DataPermissionBasicQueryRequest,
  ): TDubboCallResult<ClientPageResponse<DataPermissionDto>>;
  getUserDataPermission(
    UserDataPermissionQueryRequest0: UserDataPermissionQueryRequest,
  ): TDubboCallResult<ClientBaseResponse<UserDataPermissionDto>>;
  getUserDataPermissionLowerNodeByParent(
    UserDataPermissionNodeQueryRequest0: UserDataPermissionNodeQueryRequest,
  ): TDubboCallResult<ClientBaseResponse<UserDataPermissionDto>>;
}

export const IPermissionServiceWrapper = {
  checkUserDataPermission: argumentMap,
  getBasicDataPermission: argumentMap,
  getUserDataPermission: argumentMap,
  getUserDataPermissionLowerNodeByParent: argumentMap,
};

export function IPermissionService(dubbo: Dubbo): IIPermissionService {
  return dubbo.proxyService<IIPermissionService>({
    dubboInterface: 'com.oyo.admin.api.v2.service.IPermissionService',
    methods: IPermissionServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
