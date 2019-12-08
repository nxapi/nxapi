import java from 'js-to-java';

export interface INewsAppVO {
  createTime?: Date;
  id?: string;
  title?: string;
  type?: string;
  favorite?: number;
  content?: string;
}

export class NewsAppVO {
  constructor(params: INewsAppVO) {
    this.createTime = params.createTime;
    this.id = params.id;
    this.title = params.title;
    this.type = params.type;
    this.favorite = params.favorite;
    this.content = params.content;
  }

  createTime?: Date;
  id?: string;
  title?: string;
  type?: string;
  favorite?: number;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.NewsAppVO',
      $: {
        createTime: this.createTime,
        id: java.String(this.id),
        title: java.String(this.title),
        type: java.String(this.type),
        favorite: java.Integer(this.favorite),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
