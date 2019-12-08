import java from 'js-to-java';

export interface IArticleUpdateRequest {
  author?: string;
  id?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;
}

export class ArticleUpdateRequest {
  constructor(params: IArticleUpdateRequest) {
    this.author = params.author;
    this.id = params.id;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
    this.content = params.content;
  }

  author?: string;
  id?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.ArticleUpdateRequest',
      $: {
        author: java.String(this.author),
        id: java.String(this.id),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
