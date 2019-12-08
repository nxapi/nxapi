import java from 'js-to-java';

export interface IPageQueryOwnerIdeInstallIntentionRequest {
  endDate?: Date;
  pageNo?: number;
  pageSize?: number;
  hotelId?: number;
  startDate?: Date;
}

export class PageQueryOwnerIdeInstallIntentionRequest {
  constructor(params: IPageQueryOwnerIdeInstallIntentionRequest) {
    this.endDate = params.endDate;
    this.pageNo = params.pageNo;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  pageNo?: number;
  pageSize?: number;
  hotelId?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.uip.client.request.PageQueryOwnerIdeInstallIntentionRequest',
      $: {
        endDate: this.endDate,
        pageNo: java.Integer(this.pageNo),
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
