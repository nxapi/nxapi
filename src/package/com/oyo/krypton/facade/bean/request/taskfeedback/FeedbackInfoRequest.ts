import java from 'js-to-java';

export interface IFeedbackInfoRequest {
  childTaskId?: string;
}

export class FeedbackInfoRequest {
  constructor(params: IFeedbackInfoRequest) {
    this.childTaskId = params.childTaskId;
  }

  childTaskId?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.krypton.facade.bean.request.taskfeedback.FeedbackInfoRequest',
      $: {childTaskId: java.String(this.childTaskId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
