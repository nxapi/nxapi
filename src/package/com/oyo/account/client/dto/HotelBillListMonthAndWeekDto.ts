import java from 'js-to-java';

export interface IHotelBillListMonthAndWeekDto {
  batchNo?: string;
  amount?: string;
  hotelId?: string;
  hotelName?: string;
}

export class HotelBillListMonthAndWeekDto {
  constructor(params: IHotelBillListMonthAndWeekDto) {
    this.batchNo = params.batchNo;
    this.amount = params.amount;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
  }

  batchNo?: string;
  amount?: string;
  hotelId?: string;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelBillListMonthAndWeekDto',
      $: {
        batchNo: java.String(this.batchNo),
        amount: java.String(this.amount),
        hotelId: java.String(this.hotelId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
