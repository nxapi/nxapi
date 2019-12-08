import java from 'js-to-java';

export interface IBannerShowVO {
  coverImg?: string;
  form?: string;
  linkAddress?: string;
  id?: string;
  newCoverImg?: string;
  title?: string;
}

export class BannerShowVO {
  constructor(params: IBannerShowVO) {
    this.coverImg = params.coverImg;
    this.form = params.form;
    this.linkAddress = params.linkAddress;
    this.id = params.id;
    this.newCoverImg = params.newCoverImg;
    this.title = params.title;
  }

  coverImg?: string;
  form?: string;
  linkAddress?: string;
  id?: string;
  newCoverImg?: string;
  title?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.BannerShowVO',
      $: {
        coverImg: java.String(this.coverImg),
        form: java.String(this.form),
        linkAddress: java.String(this.linkAddress),
        id: java.String(this.id),
        newCoverImg: java.String(this.newCoverImg),
        title: java.String(this.title),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
