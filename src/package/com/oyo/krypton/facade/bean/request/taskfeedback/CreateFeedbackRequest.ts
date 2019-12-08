import java from 'js-to-java';

export interface ICreateFeedbackRequest {
  workInstanceId?: string;
  photoUrl?: string;
  reasonId?: string;
  childTaskId?: string;
  reasonDes?: string;
  createAccountId?: string;
}

export class CreateFeedbackRequest {
  constructor(params: ICreateFeedbackRequest) {
    this.workInstanceId = params.workInstanceId;
    this.photoUrl = params.photoUrl;
    this.reasonId = params.reasonId;
    this.childTaskId = params.childTaskId;
    this.reasonDes = params.reasonDes;
    this.createAccountId = params.createAccountId;
  }

  workInstanceId?: string;
  photoUrl?: string;
  reasonId?: string;
  childTaskId?: string;
  reasonDes?: string;
  createAccountId?: string;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.krypton.facade.bean.request.taskfeedback.CreateFeedbackRequest',
      $: {
        workInstanceId: java.String(this.workInstanceId),
        photoUrl: java.String(this.photoUrl),
        reasonId: java.String(this.reasonId),
        childTaskId: java.String(this.childTaskId),
        reasonDes: java.String(this.reasonDes),
        createAccountId: java.String(this.createAccountId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
