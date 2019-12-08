import java from 'js-to-java';

export interface INewsCreateRequest {
  type?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;
}

export class NewsCreateRequest {
  constructor(params: INewsCreateRequest) {
    this.type = params.type;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
    this.content = params.content;
  }

  type?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.NewsCreateRequest',
      $: {
        type: java.String(this.type),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
