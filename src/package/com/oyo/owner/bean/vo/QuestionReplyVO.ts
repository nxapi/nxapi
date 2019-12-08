import java from 'js-to-java';

export interface IQuestionReplyVO {
  createByName?: string;
  isDeleted?: number;
  cityName?: string;
  createTime?: Date;
  phone?: string;
  id?: string;
  type?: string;
  content?: string;
}

export class QuestionReplyVO {
  constructor(params: IQuestionReplyVO) {
    this.createByName = params.createByName;
    this.isDeleted = params.isDeleted;
    this.cityName = params.cityName;
    this.createTime = params.createTime;
    this.phone = params.phone;
    this.id = params.id;
    this.type = params.type;
    this.content = params.content;
  }

  createByName?: string;
  isDeleted?: number;
  cityName?: string;
  createTime?: Date;
  phone?: string;
  id?: string;
  type?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.QuestionReplyVO',
      $: {
        createByName: java.String(this.createByName),
        isDeleted: java.Integer(this.isDeleted),
        cityName: java.String(this.cityName),
        createTime: this.createTime,
        phone: java.String(this.phone),
        id: java.String(this.id),
        type: java.String(this.type),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
