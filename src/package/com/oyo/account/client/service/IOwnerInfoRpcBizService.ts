import { OwnerInfoDto } from './../dto/OwnerInfoDto';
import { argumentMap, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IIOwnerInfoRpcBizService {
  getOwnerInfoByOyoId(String0: JavaString): TDubboCallResult<OwnerInfoDto>;
}

export const IOwnerInfoRpcBizServiceWrapper = {
  getOwnerInfoByOyoId: argumentMap,
};

export function IOwnerInfoRpcBizService(
  dubbo: Dubbo,
): IIOwnerInfoRpcBizService {
  return dubbo.proxyService<IIOwnerInfoRpcBizService>({
    dubboInterface: 'com.oyo.account.client.service.IOwnerInfoRpcBizService',
    methods: IOwnerInfoRpcBizServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
