import java from 'js-to-java';

export interface INewsCmsVO {
  id?: string;
  type?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;
}

export class NewsCmsVO {
  constructor(params: INewsCmsVO) {
    this.id = params.id;
    this.type = params.type;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
    this.content = params.content;
  }

  id?: string;
  type?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.NewsCmsVO',
      $: {
        id: java.String(this.id),
        type: java.String(this.type),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
