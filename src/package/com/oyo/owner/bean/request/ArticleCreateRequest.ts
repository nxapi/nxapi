import java from 'js-to-java';

export interface IArticleCreateRequest {
  author?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;
}

export class ArticleCreateRequest {
  constructor(params: IArticleCreateRequest) {
    this.author = params.author;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
    this.content = params.content;
  }

  author?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.ArticleCreateRequest',
      $: {
        author: java.String(this.author),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
