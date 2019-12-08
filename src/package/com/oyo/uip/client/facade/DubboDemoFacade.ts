import { DemoReq } from './../request/DemoReq';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { DemoDto } from './../dto/DemoDto';
import { RiskModelDictReq } from './../request/RiskModelDictReq';
import { RiskModelDictDto } from './../dto/RiskModelDictDto';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IDubboDemoFacade {
  demo(DemoReq0: DemoReq): TDubboCallResult<BaseResponse<DemoDto>>;
  demo1(
    RiskModelDictReq0: RiskModelDictReq,
  ): TDubboCallResult<BaseResponse<RiskModelDictDto>>;
}

export const DubboDemoFacadeWrapper = {demo: argumentMap, demo1: argumentMap};

export function DubboDemoFacade(dubbo: Dubbo): IDubboDemoFacade {
  return dubbo.proxyService<IDubboDemoFacade>({
    dubboInterface: 'com.oyo.uip.client.facade.DubboDemoFacade',
    methods: DubboDemoFacadeWrapper,
  });
}

//generate by interpret-cli dubbo2.js
