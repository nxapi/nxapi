import { LoginLogoutRecordBasicQuery } from './../request/LoginLogoutRecordBasicQuery';
import { ClientPageResponse } from './../response/ClientPageResponse';
import { LoginLogoutRecordDto } from './../dto/LoginLogoutRecordDto';
import { LoginLogoutRecordConditionQuery } from './../request/LoginLogoutRecordConditionQuery';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IILogRecordService {
  getLoginLogoutRecordByBasic(
    LoginLogoutRecordBasicQuery0: LoginLogoutRecordBasicQuery,
  ): TDubboCallResult<ClientPageResponse<LoginLogoutRecordDto>>;
  getLoginLogoutRecordByCondition(
    LoginLogoutRecordConditionQuery0: LoginLogoutRecordConditionQuery,
  ): TDubboCallResult<ClientPageResponse<LoginLogoutRecordDto>>;
}

export const ILogRecordServiceWrapper = {
  getLoginLogoutRecordByBasic: argumentMap,
  getLoginLogoutRecordByCondition: argumentMap,
};

export function ILogRecordService(dubbo: Dubbo): IILogRecordService {
  return dubbo.proxyService<IILogRecordService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.ILogRecordService',
    methods: ILogRecordServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
