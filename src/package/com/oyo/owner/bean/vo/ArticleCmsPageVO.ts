import java from 'js-to-java';

export interface IArticleCmsPageVO {
  createByName?: string;
  author?: string;
  updateTime?: Date;
  id?: string;
  title?: string;
}

export class ArticleCmsPageVO {
  constructor(params: IArticleCmsPageVO) {
    this.createByName = params.createByName;
    this.author = params.author;
    this.updateTime = params.updateTime;
    this.id = params.id;
    this.title = params.title;
  }

  createByName?: string;
  author?: string;
  updateTime?: Date;
  id?: string;
  title?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.ArticleCmsPageVO',
      $: {
        createByName: java.String(this.createByName),
        author: java.String(this.author),
        updateTime: this.updateTime,
        id: java.String(this.id),
        title: java.String(this.title),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
