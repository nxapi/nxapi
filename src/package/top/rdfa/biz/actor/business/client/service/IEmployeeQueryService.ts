import { EmployeeBatchQuery } from './../request/EmployeeBatchQuery';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { EmployeeDto } from './../dto/EmployeeDto';
import { EmployeeConditionQuery } from './../request/EmployeeConditionQuery';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIEmployeeQueryService {
  queryAccountIdsByEmployeeIds(
    EmployeeBatchQuery0: EmployeeBatchQuery,
  ): TDubboCallResult<ClientBaseResponse<{[name: number]: Array<number>}>>;
  batchQuery(
    EmployeeBatchQuery0: EmployeeBatchQuery,
  ): TDubboCallResult<ClientPageResponse<EmployeeDto>>;
  queryByCondition(
    EmployeeConditionQuery0: EmployeeConditionQuery,
  ): TDubboCallResult<ClientPageResponse<EmployeeDto>>;
}

export const IEmployeeQueryServiceWrapper = {
  queryAccountIdsByEmployeeIds: argumentMap,
  batchQuery: argumentMap,
  queryByCondition: argumentMap,
};

export function IEmployeeQueryService(dubbo: Dubbo): IIEmployeeQueryService {
  return dubbo.proxyService<IIEmployeeQueryService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IEmployeeQueryService',
    methods: IEmployeeQueryServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
