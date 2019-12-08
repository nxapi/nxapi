import java from 'js-to-java';

export interface ICommentPushCountVO {
  count?: number;
}

export class CommentPushCountVO {
  constructor(params: ICommentPushCountVO) {
    this.count = params.count;
  }

  count?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.app.response.CommentPushCountVO',
      $: {count: java.Integer(this.count)},
    };
  }
}

//generate by interpret-cli dubbo2.js
