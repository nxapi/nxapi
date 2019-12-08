import { argumentMap, JavaString } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IRedisApi {
  clearRedisByKey(String0: JavaString): TDubboCallResult<void>;
}

export const RedisApiWrapper = {clearRedisByKey: argumentMap};

export function RedisApi(dubbo: Dubbo): IRedisApi {
  return dubbo.proxyService<IRedisApi>({
    dubboInterface: 'com.oyo.ops.facade.service.RedisApi',
    methods: RedisApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
