import java from 'js-to-java';

export interface IHotelHooFeeAdjustQueryDTO {
  hotelIds?: Array<number>;
  yearMonth?: string;
}

export class HotelHooFeeAdjustQueryDTO {
  constructor(params: IHotelHooFeeAdjustQueryDTO) {
    this.hotelIds = params.hotelIds;
    this.yearMonth = params.yearMonth;
  }

  hotelIds?: Array<number>;
  yearMonth?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelHooFeeAdjustQueryDTO',
      $: {
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        yearMonth: java.String(this.yearMonth),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
