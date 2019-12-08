import java from 'js-to-java';

export interface IHotelBillNewDto {
  costDate?: string;
  hotelIds?: string;
  titleSign?: string;
  pageSize?: number;
  hotelId?: string;
  source?: string;
  pageNum?: number;
  version?: string;
}

export class HotelBillNewDto {
  constructor(params: IHotelBillNewDto) {
    this.costDate = params.costDate;
    this.hotelIds = params.hotelIds;
    this.titleSign = params.titleSign;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.source = params.source;
    this.pageNum = params.pageNum;
    this.version = params.version;
  }

  costDate?: string;
  hotelIds?: string;
  titleSign?: string;
  pageSize?: number;
  hotelId?: string;
  source?: string;
  pageNum?: number;
  version?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillNewDto',
      $: {
        costDate: java.String(this.costDate),
        hotelIds: java.String(this.hotelIds),
        titleSign: java.String(this.titleSign),
        pageSize: java.Integer(this.pageSize),
        hotelId: java.String(this.hotelId),
        source: java.String(this.source),
        pageNum: java.Integer(this.pageNum),
        version: java.String(this.version),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
