import java from 'js-to-java';

export interface INewsPageVO {
  typeDesc?: string;
  createByName?: string;
  createTime?: Date;
  id?: string;
  type?: string;
  title?: string;
}

export class NewsPageVO {
  constructor(params: INewsPageVO) {
    this.typeDesc = params.typeDesc;
    this.createByName = params.createByName;
    this.createTime = params.createTime;
    this.id = params.id;
    this.type = params.type;
    this.title = params.title;
  }

  typeDesc?: string;
  createByName?: string;
  createTime?: Date;
  id?: string;
  type?: string;
  title?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.NewsPageVO',
      $: {
        typeDesc: java.String(this.typeDesc),
        createByName: java.String(this.createByName),
        createTime: this.createTime,
        id: java.String(this.id),
        type: java.String(this.type),
        title: java.String(this.title),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
