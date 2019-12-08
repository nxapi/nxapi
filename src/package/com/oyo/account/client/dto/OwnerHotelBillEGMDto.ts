import java from 'js-to-java';

export interface IOwnerHotelBillEGMDto {
  period?: string;
  billType?: string;
  hotelId?: number;
}

export class OwnerHotelBillEGMDto {
  constructor(params: IOwnerHotelBillEGMDto) {
    this.period = params.period;
    this.billType = params.billType;
    this.hotelId = params.hotelId;
  }

  period?: string;
  billType?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.OwnerHotelBillEGMDto',
      $: {
        period: java.String(this.period),
        billType: java.String(this.billType),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
