import { InfoItemValueRequest } from './InfoItemValueRequest';
import { CreateFeedbackRequest } from './../taskfeedback/CreateFeedbackRequest';
import java from 'js-to-java';

export interface ISaveTaskItemValueRequest {
  accountId?: number;
  infoItemValues?: Array<InfoItemValueRequest>;
  taskType?: number;
  feedBackRequest?: CreateFeedbackRequest;
}

export class SaveTaskItemValueRequest {
  constructor(params: ISaveTaskItemValueRequest) {
    this.accountId = params.accountId;
    this.infoItemValues = params.infoItemValues;
    this.taskType = params.taskType;
    this.feedBackRequest = params.feedBackRequest;
  }

  accountId?: number;
  infoItemValues?: Array<InfoItemValueRequest>;
  taskType?: number;
  feedBackRequest?: CreateFeedbackRequest;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.krypton.facade.bean.request.worktask.SaveTaskItemValueRequest',
      $: {
        accountId: java.Long(this.accountId),
        infoItemValues: this.infoItemValues
          ? java.List(
              (this.infoItemValues || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        taskType: java.Integer(this.taskType),
        feedBackRequest: this.feedBackRequest
          ? this.feedBackRequest.__fields2java()
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
