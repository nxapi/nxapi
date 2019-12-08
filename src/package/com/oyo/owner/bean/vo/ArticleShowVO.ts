import java from 'js-to-java';

export interface IArticleShowVO {
  readCnt?: number;
  updateTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;
}

export class ArticleShowVO {
  constructor(params: IArticleShowVO) {
    this.readCnt = params.readCnt;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
  }

  readCnt?: number;
  updateTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.ArticleShowVO',
      $: {
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
