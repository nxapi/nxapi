import java from 'js-to-java';

export interface IHotelsBillCountDto {
  billCnt?: number;
  batchNo?: string;
  costDate?: string;
  weekBillCnt?: number;
}

export class HotelsBillCountDto {
  constructor(params: IHotelsBillCountDto) {
    this.billCnt = params.billCnt;
    this.batchNo = params.batchNo;
    this.costDate = params.costDate;
    this.weekBillCnt = params.weekBillCnt;
  }

  billCnt?: number;
  batchNo?: string;
  costDate?: string;
  weekBillCnt?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelsBillCountDto',
      $: {
        billCnt: java.Integer(this.billCnt),
        batchNo: java.String(this.batchNo),
        costDate: java.String(this.costDate),
        weekBillCnt: java.Integer(this.weekBillCnt),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
