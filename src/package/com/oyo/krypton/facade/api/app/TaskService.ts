import { TaskProgressStatusRequest } from './../../bean/request/worktask/TaskProgressStatusRequest';
import { BaseResponse } from './../../../../common/response/BaseResponse';
import { TaskProgressStatusDto } from './../../bean/dto/TaskProgressStatusDto';
import { WorkInfoRequest } from './../../bean/request/WorkInfoRequest';
import { FrontWorkTaskDetailVo } from './../../bean/dto/FrontWorkTaskDetailVo';
import { SaveTaskItemValueRequest } from './../../bean/request/worktask/SaveTaskItemValueRequest';
import { argumentMap } from 'interpret-util';
import { TDubboCallResult, Dubbo } from 'dubbo2.js';

export interface ITaskService {
  getTaskProgressStatus(
    TaskProgressStatusRequest0: TaskProgressStatusRequest,
  ): TDubboCallResult<BaseResponse<Array<TaskProgressStatusDto>>>;
  getWorkDetail(
    WorkInfoRequest0: WorkInfoRequest,
  ): TDubboCallResult<BaseResponse<FrontWorkTaskDetailVo>>;
  saveWorkDetailAndFeedback(
    SaveTaskItemValueRequest0: SaveTaskItemValueRequest,
  ): TDubboCallResult<BaseResponse<void>>;
}

export const TaskServiceWrapper = {
  getTaskProgressStatus: argumentMap,
  getWorkDetail: argumentMap,
  saveWorkDetailAndFeedback: argumentMap,
};

export function TaskService(dubbo: Dubbo): ITaskService {
  return dubbo.proxyService<ITaskService>({
    dubboInterface: 'com.oyo.krypton.facade.api.app.TaskService',
    methods: TaskServiceWrapper,
  });
}

//generate by interpret-cli dubbo2.js
