import java from 'js-to-java';

export interface IDelQuestionRequest {
  accountId?: number;
  questionId?: string;
  roleId?: number;
  roleName?: string;
  userName?: string;
  token?: string;
}

export class DelQuestionRequest {
  constructor(params: IDelQuestionRequest) {
    this.accountId = params.accountId;
    this.questionId = params.questionId;
    this.roleId = params.roleId;
    this.roleName = params.roleName;
    this.userName = params.userName;
    this.token = params.token;
  }

  accountId?: number;
  questionId?: string;
  roleId?: number;
  roleName?: string;
  userName?: string;
  token?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.DelQuestionRequest',
      $: {
        accountId: java.Long(this.accountId),
        questionId: java.String(this.questionId),
        roleId: java.Integer(this.roleId),
        roleName: java.String(this.roleName),
        userName: java.String(this.userName),
        token: java.String(this.token),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
