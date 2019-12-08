import java from 'js-to-java';

export interface IArticleDetailVO {
  coverImg?: string;
  author?: string;
  updateTime?: Date;
  id?: string;
  title?: string;
  content?: string;
}

export class ArticleDetailVO {
  constructor(params: IArticleDetailVO) {
    this.coverImg = params.coverImg;
    this.author = params.author;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
  }

  coverImg?: string;
  author?: string;
  updateTime?: Date;
  id?: string;
  title?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.ArticleDetailVO',
      $: {
        coverImg: java.String(this.coverImg),
        author: java.String(this.author),
        updateTime: this.updateTime,
        id: java.String(this.id),
        title: java.String(this.title),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
