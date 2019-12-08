import java from 'js-to-java';

export interface IHotelHooFeeAdjustDTO {
  yearMonth?: string;
  totalHooFee?: {value: string};
  signBody?: string;
  hotelId?: number;
  hotelName?: string;
}

export class HotelHooFeeAdjustDTO {
  constructor(params: IHotelHooFeeAdjustDTO) {
    this.yearMonth = params.yearMonth;
    this.totalHooFee = params.totalHooFee;
    this.signBody = params.signBody;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
  }

  yearMonth?: string;
  totalHooFee?: {value: string};
  signBody?: string;
  hotelId?: number;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.account.client.dto.HotelHooFeeAdjustDTO',
      $: {
        yearMonth: java.String(this.yearMonth),
        totalHooFee: this.totalHooFee
          ? java.BigDecimal(this.totalHooFee.value)
          : null,
        signBody: java.String(this.signBody),
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
