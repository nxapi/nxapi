import java from 'js-to-java';

export interface IOwnerChinaHotelBillDto {
  billSign?: string;
  offset?: number;
  pageSize?: number;
  hotelId?: number;
  billSignList?: Array<string>;
  billNo?: string;
  pageNum?: number;
  settlingMonth?: string;
}

export class OwnerChinaHotelBillDto {
  constructor(params: IOwnerChinaHotelBillDto) {
    this.billSign = params.billSign;
    this.offset = params.offset;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.billSignList = params.billSignList;
    this.billNo = params.billNo;
    this.pageNum = params.pageNum;
    this.settlingMonth = params.settlingMonth;
  }

  billSign?: string;
  offset?: number;
  pageSize?: number;
  hotelId?: number;
  billSignList?: Array<string>;
  billNo?: string;
  pageNum?: number;
  settlingMonth?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerChinaHotelBillDto',
      $: {
        billSign: java.String(this.billSign),
        offset: java.Integer(this.offset),
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        billSignList: this.billSignList
          ? java.List(
              (this.billSignList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        billNo: java.String(this.billNo),
        pageNum: java.Integer(this.pageNum),
        settlingMonth: java.String(this.settlingMonth),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
