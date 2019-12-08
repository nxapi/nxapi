import { QueryHmiContentRpcRequest } from './../request/QueryHmiContentRpcRequest';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { HmiContentDTO } from './../response/HmiContentDTO';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IHmiRpcService {
  queryHmiContent(
    QueryHmiContentRpcRequest0: QueryHmiContentRpcRequest,
  ): TDubboCallResult<BaseResponse<HmiContentDTO>>;
}

export const HmiRpcServiceWrapper = {queryHmiContent: argumentMap};

export function HmiRpcService(dubbo: Dubbo): IHmiRpcService {
  return dubbo.proxyService<IHmiRpcService>({
    dubboInterface: 'com.oyo.report.api.service.HmiRpcService',
    methods: HmiRpcServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
