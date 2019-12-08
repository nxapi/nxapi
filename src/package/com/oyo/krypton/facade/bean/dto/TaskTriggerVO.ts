import java from 'js-to-java';

export interface ITaskTriggerVO {
  workTaskId?: string;
  id?: string;
  triggerType?: number;
  triggerRule?: number;
  triggerTime?: string;
}

export class TaskTriggerVO {
  constructor(params: ITaskTriggerVO) {
    this.workTaskId = params.workTaskId;
    this.id = params.id;
    this.triggerType = params.triggerType;
    this.triggerRule = params.triggerRule;
    this.triggerTime = params.triggerTime;
  }

  workTaskId?: string;
  id?: string;
  triggerType?: number;
  triggerRule?: number;
  triggerTime?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.TaskTriggerVO',
      $: {
        workTaskId: java.String(this.workTaskId),
        id: java.String(this.id),
        triggerType: java.Integer(this.triggerType),
        triggerRule: java.Integer(this.triggerRule),
        triggerTime: java.String(this.triggerTime),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
