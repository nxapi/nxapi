import java from 'js-to-java';

export interface IArticlePageVO {
  createByName?: string;
  coverImg?: string;
  author?: string;
  readCnt?: number;
  updateTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;
}

export class ArticlePageVO {
  constructor(params: IArticlePageVO) {
    this.createByName = params.createByName;
    this.coverImg = params.coverImg;
    this.author = params.author;
    this.readCnt = params.readCnt;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
  }

  createByName?: string;
  coverImg?: string;
  author?: string;
  readCnt?: number;
  updateTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.ArticlePageVO',
      $: {
        createByName: java.String(this.createByName),
        coverImg: java.String(this.coverImg),
        author: java.String(this.author),
        readCnt: java.Integer(this.readCnt),
        updateTime: this.updateTime,
        id: java.String(this.id),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
