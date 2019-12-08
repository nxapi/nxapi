import java from 'js-to-java';

export interface IPlaceImage {
  fileName?: string;
  createTime?: Date;
  placeId?: number;
  auditStatus?: number;
  updateTime?: Date;
  correlationId?: string;
  id?: number;
  priority?: number;
  category?: string;
  url?: string;
  roomTypeId?: number;
  desc?: string;
}

export class PlaceImage {
  constructor(params: IPlaceImage) {
    this.fileName = params.fileName;
    this.createTime = params.createTime;
    this.placeId = params.placeId;
    this.auditStatus = params.auditStatus;
    this.updateTime = params.updateTime;
    this.correlationId = params.correlationId;
    this.id = params.id;
    this.priority = params.priority;
    this.category = params.category;
    this.url = params.url;
    this.roomTypeId = params.roomTypeId;
    this.desc = params.desc;
  }

  fileName?: string;
  createTime?: Date;
  placeId?: number;
  auditStatus?: number;
  updateTime?: Date;
  correlationId?: string;
  id?: number;
  priority?: number;
  category?: string;
  url?: string;
  roomTypeId?: number;
  desc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.common.PlaceImage',
      $: {
        fileName: java.String(this.fileName),
        createTime: this.createTime,
        placeId: java.Long(this.placeId),
        auditStatus: java.Integer(this.auditStatus),
        updateTime: this.updateTime,
        correlationId: java.String(this.correlationId),
        id: java.Long(this.id),
        priority: java.Integer(this.priority),
        category: java.String(this.category),
        url: java.String(this.url),
        roomTypeId: java.Long(this.roomTypeId),
        desc: java.String(this.desc),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
