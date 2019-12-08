import java from 'js-to-java';

export interface ITaskProgressStatusRequest {
  subId?: string;
  accountId?: string;
  taskType?: string;
  hotelId?: string;
  taskId?: string;
}

export class TaskProgressStatusRequest {
  constructor(params: ITaskProgressStatusRequest) {
    this.subId = params.subId;
    this.accountId = params.accountId;
    this.taskType = params.taskType;
    this.hotelId = params.hotelId;
    this.taskId = params.taskId;
  }

  subId?: string;
  accountId?: string;
  taskType?: string;
  hotelId?: string;
  taskId?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.krypton.facade.bean.request.worktask.TaskProgressStatusRequest',
      $: {
        subId: java.String(this.subId),
        accountId: java.String(this.accountId),
        taskType: java.String(this.taskType),
        hotelId: java.String(this.hotelId),
        taskId: java.String(this.taskId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
