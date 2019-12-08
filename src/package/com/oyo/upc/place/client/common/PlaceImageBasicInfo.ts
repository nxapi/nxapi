import java from 'js-to-java';

export interface IPlaceImageBasicInfo {
  fileName?: string;
  placeId?: number;
  auditStatus?: number;
  correlationId?: string;
  id?: number;
  category?: string;
  priority?: number;
  imageType?: string;
  url?: string;
  roomTypeId?: number;
  desc?: string;
}

export class PlaceImageBasicInfo {
  constructor(params: IPlaceImageBasicInfo) {
    this.fileName = params.fileName;
    this.placeId = params.placeId;
    this.auditStatus = params.auditStatus;
    this.correlationId = params.correlationId;
    this.id = params.id;
    this.category = params.category;
    this.priority = params.priority;
    this.imageType = params.imageType;
    this.url = params.url;
    this.roomTypeId = params.roomTypeId;
    this.desc = params.desc;
  }

  fileName?: string;
  placeId?: number;
  auditStatus?: number;
  correlationId?: string;
  id?: number;
  category?: string;
  priority?: number;
  imageType?: string;
  url?: string;
  roomTypeId?: number;
  desc?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.common.PlaceImageBasicInfo',
      $: {
        fileName: java.String(this.fileName),
        placeId: java.Long(this.placeId),
        auditStatus: java.Integer(this.auditStatus),
        correlationId: java.String(this.correlationId),
        id: java.Long(this.id),
        category: java.String(this.category),
        priority: java.Integer(this.priority),
        imageType: java.String(this.imageType),
        url: java.String(this.url),
        roomTypeId: java.Long(this.roomTypeId),
        desc: java.String(this.desc),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
