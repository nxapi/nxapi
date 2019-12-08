import { TimedTaskDto } from './../dto/TimedTaskDto';
import { BaseResponse } from './../../../common/response/BaseResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface IITimedTaskService {
  updateTimedTask(
    TimedTaskDto0: TimedTaskDto,
  ): TDubboCallResult<BaseResponse<Object>>;
  insertTimedTask(
    TimedTaskDto0: TimedTaskDto,
  ): TDubboCallResult<BaseResponse<Object>>;
}

export const ITimedTaskServiceWrapper = {
  updateTimedTask: argumentMap,
  insertTimedTask: argumentMap,
};

export function ITimedTaskService(dubbo: Dubbo): IITimedTaskService {
  return dubbo.proxyService<IITimedTaskService>({
    dubboInterface: 'com.oyo.account.client.service.ITimedTaskService',
    methods: ITimedTaskServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
