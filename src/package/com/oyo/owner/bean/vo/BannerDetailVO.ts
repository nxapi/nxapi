import java from 'js-to-java';

export interface IBannerDetailVO {
  publishTime?: Date;
  coverImg?: string;
  location?: string;
  id?: string;
  title?: string;
  content?: string;
}

export class BannerDetailVO {
  constructor(params: IBannerDetailVO) {
    this.publishTime = params.publishTime;
    this.coverImg = params.coverImg;
    this.location = params.location;
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
  }

  publishTime?: Date;
  coverImg?: string;
  location?: string;
  id?: string;
  title?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.BannerDetailVO',
      $: {
        publishTime: this.publishTime,
        coverImg: java.String(this.coverImg),
        location: java.String(this.location),
        id: java.String(this.id),
        title: java.String(this.title),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
