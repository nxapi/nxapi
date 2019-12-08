import { FeedbackReasonDto } from './../dto/taskfeedback/FeedbackReasonDto';
import java from 'js-to-java';

export interface ITaskFeebackInfoResponse {
  photoUrl?: string;
  feedbackDes?: string;
  reasonList?: Array<FeedbackReasonDto>;
}

export class TaskFeebackInfoResponse {
  constructor(params: ITaskFeebackInfoResponse) {
    this.photoUrl = params.photoUrl;
    this.feedbackDes = params.feedbackDes;
    this.reasonList = params.reasonList;
  }

  photoUrl?: string;
  feedbackDes?: string;
  reasonList?: Array<FeedbackReasonDto>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.response.TaskFeebackInfoResponse',
      $: {
        photoUrl: java.String(this.photoUrl),
        feedbackDes: java.String(this.feedbackDes),
        reasonList: this.reasonList
          ? java.List(
              (this.reasonList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
