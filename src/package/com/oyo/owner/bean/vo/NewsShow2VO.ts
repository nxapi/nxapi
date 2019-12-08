import java from 'js-to-java';

export interface INewsShow2VO {
  createTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;
}

export class NewsShow2VO {
  constructor(params: INewsShow2VO) {
    this.createTime = params.createTime;
    this.id = params.id;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
  }

  createTime?: Date;
  id?: string;
  title?: string;
  newCoverImg?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.NewsShow2VO',
      $: {
        createTime: this.createTime,
        id: java.String(this.id),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
