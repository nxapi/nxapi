import java from 'js-to-java';

export interface IBannerUpdateRequest {
  form?: string;
  location?: string;
  linkAddress?: string;
  id?: string;
  title?: string;
  newCoverImg?: string;
  content?: string;
}

export class BannerUpdateRequest {
  constructor(params: IBannerUpdateRequest) {
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
      $class: 'com.oyo.owner.bean.request.BannerUpdateRequest',
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
