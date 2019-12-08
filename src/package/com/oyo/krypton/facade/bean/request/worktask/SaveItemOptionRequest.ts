import java from 'js-to-java';

export interface ISaveItemOptionRequest {
  taskItemValueId?: string;
  optionResult?: string;
  id?: string;
  sort?: number;
  itemOptionId?: string;
  option?: string;
}

export class SaveItemOptionRequest {
  constructor(params: ISaveItemOptionRequest) {
    this.taskItemValueId = params.taskItemValueId;
    this.optionResult = params.optionResult;
    this.id = params.id;
    this.sort = params.sort;
    this.itemOptionId = params.itemOptionId;
    this.option = params.option;
  }

  taskItemValueId?: string;
  optionResult?: string;
  id?: string;
  sort?: number;
  itemOptionId?: string;
  option?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.krypton.facade.bean.request.worktask.SaveItemOptionRequest',
      $: {
        taskItemValueId: java.String(this.taskItemValueId),
        optionResult: java.String(this.optionResult),
        id: java.String(this.id),
        sort: java.Integer(this.sort),
        itemOptionId: java.String(this.itemOptionId),
        option: java.String(this.option),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
