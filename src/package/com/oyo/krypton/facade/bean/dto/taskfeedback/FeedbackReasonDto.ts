import java from 'js-to-java';

export interface IFeedbackReasonDto {
  needContent?: number;
  reasonContent?: string;
  id?: string;
  check?: boolean;
  sort?: number;
  reasonType?: number;
  needPhoto?: number;
}

export class FeedbackReasonDto {
  constructor(params: IFeedbackReasonDto) {
    this.needContent = params.needContent;
    this.reasonContent = params.reasonContent;
    this.id = params.id;
    this.check = params.check;
    this.sort = params.sort;
    this.reasonType = params.reasonType;
    this.needPhoto = params.needPhoto;
  }

  needContent?: number;
  reasonContent?: string;
  id?: string;
  check?: boolean;
  sort?: number;
  reasonType?: number;
  needPhoto?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.krypton.facade.bean.dto.taskfeedback.FeedbackReasonDto',
      $: {
        needContent: java.Integer(this.needContent),
        reasonContent: java.String(this.reasonContent),
        id: java.String(this.id),
        check: java.Boolean(this.check),
        sort: java.Integer(this.sort),
        reasonType: java.Integer(this.reasonType),
        needPhoto: java.Integer(this.needPhoto),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
