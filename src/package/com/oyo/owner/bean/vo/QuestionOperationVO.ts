import java from 'js-to-java';

export interface IQuestionOperationVO {
  questionId?: string;
  createByName?: string;
  cityName?: string;
  ownerName?: string;
  createTime?: Date;
  phone?: string;
  id?: string;
  ownerCity?: string;
  type?: string;
  content?: string;
}

export class QuestionOperationVO {
  constructor(params: IQuestionOperationVO) {
    this.questionId = params.questionId;
    this.createByName = params.createByName;
    this.cityName = params.cityName;
    this.ownerName = params.ownerName;
    this.createTime = params.createTime;
    this.phone = params.phone;
    this.id = params.id;
    this.ownerCity = params.ownerCity;
    this.type = params.type;
    this.content = params.content;
  }

  questionId?: string;
  createByName?: string;
  cityName?: string;
  ownerName?: string;
  createTime?: Date;
  phone?: string;
  id?: string;
  ownerCity?: string;
  type?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.QuestionOperationVO',
      $: {
        questionId: java.String(this.questionId),
        createByName: java.String(this.createByName),
        cityName: java.String(this.cityName),
        ownerName: java.String(this.ownerName),
        createTime: this.createTime,
        phone: java.String(this.phone),
        id: java.String(this.id),
        ownerCity: java.String(this.ownerCity),
        type: java.String(this.type),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
