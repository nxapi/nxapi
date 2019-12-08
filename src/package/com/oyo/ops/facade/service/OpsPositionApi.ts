import { BaseResponse } from './../../../common/response/BaseResponse';
import { PositionMapDto } from './../bean/dto/PositionMapDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IOpsPositionApi {
  findAllOpsPosition(): TDubboCallResult<BaseResponse<Array<PositionMapDto>>>;
}

export const OpsPositionApiWrapper = {findAllOpsPosition: argumentMap};

export function OpsPositionApi(dubbo: Dubbo): IOpsPositionApi {
  return dubbo.proxyService<IOpsPositionApi>({
    dubboInterface: 'com.oyo.ops.facade.service.OpsPositionApi',
    methods: OpsPositionApiWrapper,
  });
}

//generate by interpret-cli dubbo2.js
