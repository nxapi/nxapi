import java from 'js-to-java';

export interface IQuestionReplyRequest {
  accountId?: number;
  replyType?: string;
  questionId?: string;
  roleId?: number;
  roleName?: string;
  userName?: string;
  content?: string;
  token?: string;
}

export class QuestionReplyRequest {
  constructor(params: IQuestionReplyRequest) {
    this.accountId = params.accountId;
    this.replyType = params.replyType;
    this.questionId = params.questionId;
    this.roleId = params.roleId;
    this.roleName = params.roleName;
    this.userName = params.userName;
    this.content = params.content;
    this.token = params.token;
  }

  accountId?: number;
  replyType?: string;
  questionId?: string;
  roleId?: number;
  roleName?: string;
  userName?: string;
  content?: string;
  token?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.QuestionReplyRequest',
      $: {
        accountId: java.Long(this.accountId),
        replyType: java.String(this.replyType),
        questionId: java.String(this.questionId),
        roleId: java.Integer(this.roleId),
        roleName: java.String(this.roleName),
        userName: java.String(this.userName),
        content: java.String(this.content),
        token: java.String(this.token),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
