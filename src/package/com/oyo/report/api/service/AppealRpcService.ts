import { BasePageRpcRequest } from './../request/BasePageRpcRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { AppealDTO } from './../response/AppealDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IAppealRpcService {
  getAppealList(
    BasePageRpcRequest0: BasePageRpcRequest,
  ): TDubboCallResult<BaseResponse<Array<AppealDTO>>>;
}

export const AppealRpcServiceWrapper = {getAppealList: argumentMap};

export function AppealRpcService(dubbo: Dubbo): IAppealRpcService {
  return dubbo.proxyService<IAppealRpcService>({
    dubboInterface: 'com.oyo.report.api.service.AppealRpcService',
    methods: AppealRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
