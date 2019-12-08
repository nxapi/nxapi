import { FeedbackInfoRequest } from './../../bean/request/taskfeedback/FeedbackInfoRequest';
import { BaseResponse } from './../../../../common/response/BaseResponse';
import { TaskFeebackInfoResponse } from './../../bean/response/TaskFeebackInfoResponse';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ITaskFeedBackService {
  queryTaskFeedbackInfo(
    FeedbackInfoRequest0: FeedbackInfoRequest,
  ): TDubboCallResult<BaseResponse<TaskFeebackInfoResponse>>;
}

export const TaskFeedBackServiceWrapper = {queryTaskFeedbackInfo: argumentMap};

export function TaskFeedBackService(dubbo: Dubbo): ITaskFeedBackService {
  return dubbo.proxyService<ITaskFeedBackService>({
    dubboInterface: 'com.oyo.krypton.facade.api.app.TaskFeedBackService',
    methods: TaskFeedBackServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
