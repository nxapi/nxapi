import java from 'js-to-java';

export interface IHotelHooFeeAdjustVO {
  yearMonth?: string;
  hotelId?: number;
  adjustAmout?: {value: string};
}

export class HotelHooFeeAdjustVO {
  constructor(params: IHotelHooFeeAdjustVO) {
    this.yearMonth = params.yearMonth;
    this.hotelId = params.hotelId;
    this.adjustAmout = params.adjustAmout;
  }

  yearMonth?: string;
  hotelId?: number;
  adjustAmout?: {value: string};

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.vo.HotelHooFeeAdjustVO',
      $: {
        yearMonth: java.String(this.yearMonth),
        hotelId: java.Long(this.hotelId),
        adjustAmout: this.adjustAmout
          ? java.BigDecimal(this.adjustAmout.value)
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
