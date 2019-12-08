import java from 'js-to-java';

export interface IOwnerAccountBillDto {
  batchNo?: string;
  costDate?: string;
  hotelIds?: string;
  titleSign?: string;
  pageSize?: string;
  hotelId?: string;
  weekDate?: string;
  pageNum?: string;
}

export class OwnerAccountBillDto {
  constructor(params: IOwnerAccountBillDto) {
    this.batchNo = params.batchNo;
    this.costDate = params.costDate;
    this.hotelIds = params.hotelIds;
    this.titleSign = params.titleSign;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.weekDate = params.weekDate;
    this.pageNum = params.pageNum;
  }

  batchNo?: string;
  costDate?: string;
  hotelIds?: string;
  titleSign?: string;
  pageSize?: string;
  hotelId?: string;
  weekDate?: string;
  pageNum?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerAccountBillDto',
      $: {
        batchNo: java.String(this.batchNo),
        costDate: java.String(this.costDate),
        hotelIds: java.String(this.hotelIds),
        titleSign: java.String(this.titleSign),
        pageSize: java.String(this.pageSize),
        hotelId: java.String(this.hotelId),
        weekDate: java.String(this.weekDate),
        pageNum: java.String(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
