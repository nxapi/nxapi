import { QueryCorrespondentDto } from './../dto/QueryCorrespondentDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { PagedResponse } from './../../../common/response/PagedResponse';
import { BankJoinMemberDTO } from './../dto/BankJoinMemberDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIBankCorrespondentService {
  queryCorrespondent(
    QueryCorrespondentDto0: QueryCorrespondentDto,
  ): TDubboCallResult<BaseResponse<PagedResponse<BankJoinMemberDTO>>>;
}

export const IBankCorrespondentServiceWrapper = {
  queryCorrespondent: argumentMap,
};

export function IBankCorrespondentService(
  dubbo: Dubbo,
): IIBankCorrespondentService {
  return dubbo.proxyService<IIBankCorrespondentService>({
    dubboInterface: 'com.oyo.account.client.service.IBankCorrespondentService',
    methods: IBankCorrespondentServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
