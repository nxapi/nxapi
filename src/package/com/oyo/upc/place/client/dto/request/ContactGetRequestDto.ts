import java from 'js-to-java';

export interface IContactGetRequestDto {
  isDefault?: number;
  placeId?: number;
  pageSize?: number;
  startTime?: Date;
  endTime?: Date;
  pageNum?: number;
  status?: number;
}

export class ContactGetRequestDto {
  constructor(params: IContactGetRequestDto) {
    this.isDefault = params.isDefault;
    this.placeId = params.placeId;
    this.pageSize = params.pageSize;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.pageNum = params.pageNum;
    this.status = params.status;
  }

  isDefault?: number;
  placeId?: number;
  pageSize?: number;
  startTime?: Date;
  endTime?: Date;
  pageNum?: number;
  status?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.place.client.dto.request.ContactGetRequestDto',
      $: {
        isDefault: java.Integer(this.isDefault),
        placeId: java.Long(this.placeId),
        pageSize: java.Integer(this.pageSize),
        startTime: this.startTime,
        endTime: this.endTime,
        pageNum: java.Integer(this.pageNum),
        status: java.Integer(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
