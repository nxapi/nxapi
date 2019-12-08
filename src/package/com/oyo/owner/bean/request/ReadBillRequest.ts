import java from 'js-to-java';

export interface IReadBillRequest {
  accountId?: number;
  period?: string;
  accountName?: string;
  billType?: string;
  hotelId?: number;
  hotelName?: string;
}

export class ReadBillRequest {
  constructor(params: IReadBillRequest) {
    this.accountId = params.accountId;
    this.period = params.period;
    this.accountName = params.accountName;
    this.billType = params.billType;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
  }

  accountId?: number;
  period?: string;
  accountName?: string;
  billType?: string;
  hotelId?: number;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.ReadBillRequest',
      $: {
        accountId: java.Long(this.accountId),
        period: java.String(this.period),
        accountName: java.String(this.accountName),
        billType: java.String(this.billType),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
