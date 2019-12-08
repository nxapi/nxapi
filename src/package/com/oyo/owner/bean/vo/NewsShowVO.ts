import java from 'js-to-java';

export interface INewsShowVO {
  template?: string;
  coverImg?: string;
  createTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;
}

export class NewsShowVO {
  constructor(params: INewsShowVO) {
    this.template = params.template;
    this.coverImg = params.coverImg;
    this.createTime = params.createTime;
    this.id = params.id;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
  }

  template?: string;
  coverImg?: string;
  createTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.NewsShowVO',
      $: {
        template: java.String(this.template),
        coverImg: java.String(this.coverImg),
        createTime: this.createTime,
        id: java.String(this.id),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
