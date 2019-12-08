import java from 'js-to-java';

export interface IQuestionRequest {
  title?: string;
  content?: string;
}

export class QuestionRequest {
  constructor(params: IQuestionRequest) {
    this.title = params.title;
    this.content = params.content;
  }

  title?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.QuestionRequest',
      $: {title: java.String(this.title), content: java.String(this.content)},
    };
  }
}

//generate by interpret-cli dubbo2.js
