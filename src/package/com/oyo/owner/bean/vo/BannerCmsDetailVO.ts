import java from 'js-to-java';

export interface IBannerCmsDetailVO {
  form?: string;
  location?: string;
  linkAddress?: string;
  id?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;
}

export class BannerCmsDetailVO {
  constructor(params: IBannerCmsDetailVO) {
    this.form = params.form;
    this.location = params.location;
    this.linkAddress = params.linkAddress;
    this.id = params.id;
    this.title = params.title;
    this.newCoverImg = params.newCoverImg;
    this.content = params.content;
  }

  form?: string;
  location?: string;
  linkAddress?: string;
  id?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.BannerCmsDetailVO',
      $: {
        form: java.String(this.form),
        location: java.String(this.location),
        linkAddress: java.String(this.linkAddress),
        id: java.String(this.id),
        title: java.String(this.title),
        newCoverImg: java.String(this.newCoverImg),
        content: java.String(this.content),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
