import { QueryConstantRequest } from './../bean/request/QueryConstantRequest';
import { ConstantDto } from './../bean/dto/ConstantDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { ConstantRequest } from './../bean/request/ConstantRequest';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ICommonConstantApi {
  queryConstantByKey(
    QueryConstantRequest0: QueryConstantRequest,
  ): TDubboCallResult<ConstantDto>;
  queryConstantByKeyV2(
    QueryConstantRequest0: QueryConstantRequest,
  ): TDubboCallResult<BaseResponse<ConstantDto>>;
  insertConstant(ConstantRequest0: ConstantRequest): TDubboCallResult<number>;
}

export const CommonConstantApiWrapper = {
  queryConstantByKey: argumentMap,
  queryConstantByKeyV2: argumentMap,
  insertConstant: argumentMap,
};

export function CommonConstantApi(dubbo: Dubbo): ICommonConstantApi {
  return dubbo.proxyService<ICommonConstantApi>({
    dubboInterface: 'com.oyo.ops.facade.service.CommonConstantApi',
    methods: CommonConstantApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
