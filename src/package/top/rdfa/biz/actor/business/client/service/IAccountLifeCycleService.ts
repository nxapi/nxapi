import { AccountBasicRequest } from './../request/AccountBasicRequest';
import { ClientBaseResponse } from './../response/ClientBaseResponse';
import { VerificationRequest } from './../request/VerificationRequest';
import { CaptchaDto } from './../dto/CaptchaDto';
import { LogoutRequest } from './../request/LogoutRequest';
import { TicketRequest } from './../request/TicketRequest';
import { LoginRequest } from './../request/LoginRequest';
import { AccountDto } from './../dto/AccountDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIAccountLifeCycleService {
  updateAccountByBasic(
    AccountBasicRequest0: AccountBasicRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  getVerificationCode(
    VerificationRequest0: VerificationRequest,
  ): TDubboCallResult<ClientBaseResponse<CaptchaDto>>;
  resetPassword(
    AccountBasicRequest0: AccountBasicRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  logout(
    LogoutRequest0: LogoutRequest,
  ): TDubboCallResult<ClientBaseResponse<void>>;
  refreshTicket(
    TicketRequest0: TicketRequest,
  ): TDubboCallResult<ClientBaseResponse<string>>;
  verify(
    VerificationRequest0: VerificationRequest,
  ): TDubboCallResult<ClientBaseResponse<boolean>>;
  login(
    LoginRequest0: LoginRequest,
  ): TDubboCallResult<ClientBaseResponse<AccountDto>>;
  verifyTicket(
    TicketRequest0: TicketRequest,
  ): TDubboCallResult<ClientBaseResponse<number>>;
}

export const IAccountLifeCycleServiceWrapper = {
  updateAccountByBasic: argumentMap,
  getVerificationCode: argumentMap,
  resetPassword: argumentMap,
  logout: argumentMap,
  refreshTicket: argumentMap,
  verify: argumentMap,
  login: argumentMap,
  verifyTicket: argumentMap,
};

export function IAccountLifeCycleService(
  dubbo: Dubbo,
): IIAccountLifeCycleService {
  return dubbo.proxyService<IIAccountLifeCycleService>({
    dubboInterface:
      'top.rdfa.biz.actor.business.client.service.IAccountLifeCycleService',
    methods: IAccountLifeCycleServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
