import java from 'js-to-java';

export interface IHotelCommissionBillDto {
  costDate?: string;
  hotelIds?: string;
}

export class HotelCommissionBillDto {
  constructor(params: IHotelCommissionBillDto) {
    this.costDate = params.costDate;
    this.hotelIds = params.hotelIds;
  }

  costDate?: string;
  hotelIds?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelCommissionBillDto',
      $: {
        costDate: java.String(this.costDate),
        hotelIds: java.String(this.hotelIds),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
