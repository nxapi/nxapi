import java from 'js-to-java';

export interface IOwnerHotelBillListDto {
  offset?: number;
  billType?: string;
  pageSize?: number;
  hotelId?: number;
}

export class OwnerHotelBillListDto {
  constructor(params: IOwnerHotelBillListDto) {
    this.offset = params.offset;
    this.billType = params.billType;
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
  }

  offset?: number;
  billType?: string;
  pageSize?: number;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerHotelBillListDto',
      $: {
        offset: java.Integer(this.offset),
        billType: java.String(this.billType),
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
