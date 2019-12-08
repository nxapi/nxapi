import { DataPermissionConditionQuery } from './../request/DataPermissionConditionQuery';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { DataPermissionRelationDto } from './../dto/DataPermissionRelationDto';
import { AccountDataPermissionConditionQuery } from './../request/AccountDataPermissionConditionQuery';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { AccountRelationDataPermissionDto } from './../dto/AccountRelationDataPermissionDto';
import { AccountDataPermissionBasicQuery } from './../request/AccountDataPermissionBasicQuery';
import { AccountDataPermissionDto } from './../dto/AccountDataPermissionDto';
import { CheckAccountDataPermissionRequest } from './../request/CheckAccountDataPermissionRequest';
import { CheckDataPermissionDto } from './../dto/CheckDataPermissionDto';
import { DataPermissionBasicQuery } from './../request/DataPermissionBasicQuery';
import { DataPermissionDto } from './../dto/DataPermissionDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIDataPermissionService {
  getDataPermissionRelationByCondition(
    DataPermissionConditionQuery0: DataPermissionConditionQuery,
  ): TDubboCallResult<ClientPageResponse<DataPermissionRelationDto>>;
  getAccountRelationDataPermissionByCondition(
    AccountDataPermissionConditionQuery0: AccountDataPermissionConditionQuery,
  ): TDubboCallResult<
    ClientBaseResponse<Array<AccountRelationDataPermissionDto>>
  >;
  getAccountDataPermission(
    AccountDataPermissionBasicQuery0: AccountDataPermissionBasicQuery,
  ): TDubboCallResult<ClientPageResponse<AccountDataPermissionDto>>;
  checkAccountDataPermission(
    CheckAccountDataPermissionRequest0: CheckAccountDataPermissionRequest,
  ): TDubboCallResult<ClientBaseResponse<CheckDataPermissionDto>>;
  getBasicDataPermission(
    DataPermissionBasicQuery0: DataPermissionBasicQuery,
  ): TDubboCallResult<ClientPageResponse<DataPermissionDto>>;
  getDynamicSwitch(): TDubboCallResult<ClientBaseResponse<boolean>>;
}

export const IDataPermissionServiceWrapper = {
  getDataPermissionRelationByCondition: argumentMap,
  getAccountRelationDataPermissionByCondition: argumentMap,
  getAccountDataPermission: argumentMap,
  checkAccountDataPermission: argumentMap,
  getBasicDataPermission: argumentMap,
  getDynamicSwitch: argumentMap,
};

export function IDataPermissionService(dubbo: Dubbo): IIDataPermissionService {
  return dubbo.proxyService<IIDataPermissionService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IDataPermissionService',
    methods: IDataPermissionServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
