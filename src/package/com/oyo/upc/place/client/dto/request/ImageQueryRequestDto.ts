import java from 'js-to-java';

export interface IImageQueryRequestDto {
  imageId?: number;
  placeId?: number;
  pageSize?: number;
  auditStatus?: number;
  startTime?: Date;
  correlationId?: string;
  endTime?: Date;
  category?: string;
  pageNum?: number;
  status?: number;
}

export class ImageQueryRequestDto {
  constructor(params: IImageQueryRequestDto) {
    this.imageId = params.imageId;
    this.placeId = params.placeId;
    this.pageSize = params.pageSize;
    this.auditStatus = params.auditStatus;
    this.startTime = params.startTime;
    this.correlationId = params.correlationId;
    this.endTime = params.endTime;
    this.category = params.category;
    this.pageNum = params.pageNum;
    this.status = params.status;
  }

  imageId?: number;
  placeId?: number;
  pageSize?: number;
  auditStatus?: number;
  startTime?: Date;
  correlationId?: string;
  endTime?: Date;
  category?: string;
  pageNum?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ImageQueryRequestDto',
      $: {
        imageId: java.Long(this.imageId),
        placeId: java.Long(this.placeId),
        pageSize: java.Integer(this.pageSize),
        auditStatus: java.Integer(this.auditStatus),
        startTime: this.startTime,
        correlationId: java.String(this.correlationId),
        endTime: this.endTime,
        category: java.String(this.category),
        pageNum: java.Integer(this.pageNum),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
