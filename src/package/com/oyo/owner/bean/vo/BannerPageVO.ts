import java from 'js-to-java';

export interface IBannerPageVO {
  publishTime?: Date;
  statusDesc?: string;
  createByName?: string;
  createTime?: Date;
  locationDesc?: string;
  location?: string;
  id?: string;
  title?: string;
  status?: number;
}

export class BannerPageVO {
  constructor(params: IBannerPageVO) {
    this.publishTime = params.publishTime;
    this.statusDesc = params.statusDesc;
    this.createByName = params.createByName;
    this.createTime = params.createTime;
    this.locationDesc = params.locationDesc;
    this.location = params.location;
    this.id = params.id;
    this.title = params.title;
    this.status = params.status;
  }

  publishTime?: Date;
  statusDesc?: string;
  createByName?: string;
  createTime?: Date;
  locationDesc?: string;
  location?: string;
  id?: string;
  title?: string;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.vo.BannerPageVO',
      $: {
        publishTime: this.publishTime,
        statusDesc: java.String(this.statusDesc),
        createByName: java.String(this.createByName),
        createTime: this.createTime,
        locationDesc: java.String(this.locationDesc),
        location: java.String(this.location),
        id: java.String(this.id),
        title: java.String(this.title),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
