import java from 'js-to-java';

export interface IQuestionVO {
  lastReplyTime?: Date;
  createByName?: string;
  cityName?: string;
  isDeleted?: number;
  createTime?: Date;
  phone?: string;
  id?: string;
  replyCnt?: number;
  title?: string;
  content?: string;
}

export class QuestionVO {
  constructor(params: IQuestionVO) {
    this.lastReplyTime = params.lastReplyTime;
    this.createByName = params.createByName;
    this.cityName = params.cityName;
    this.isDeleted = params.isDeleted;
    this.createTime = params.createTime;
    this.phone = params.phone;
    this.id = params.id;
    this.replyCnt = params.replyCnt;
    this.title = params.title;
    this.content = params.content;
  }

  lastReplyTime?: Date;
  createByName?: string;
  cityName?: string;
  isDeleted?: number;
  createTime?: Date;
  phone?: string;
  id?: string;
  replyCnt?: number;
  title?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.QuestionVO',
      $: {
        lastReplyTime: this.lastReplyTime,
        createByName: java.String(this.createByName),
        cityName: java.String(this.cityName),
        isDeleted: java.Integer(this.isDeleted),
        createTime: this.createTime,
        phone: java.String(this.phone),
        id: java.String(this.id),
        replyCnt: java.Integer(this.replyCnt),
        title: java.String(this.title),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
