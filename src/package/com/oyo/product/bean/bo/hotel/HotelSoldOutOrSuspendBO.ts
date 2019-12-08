import java from 'js-to-java';

export interface IHotelSoldOutOrSuspendBO {
  endDate?: string;
  hasSoldOutOrSuspend?: boolean;
  startDate?: string;
}

export class HotelSoldOutOrSuspendBO {
  constructor(params: IHotelSoldOutOrSuspendBO) {
    this.endDate = params.endDate;
    this.hasSoldOutOrSuspend = params.hasSoldOutOrSuspend;
    this.startDate = params.startDate;
  }

  endDate?: string;
  hasSoldOutOrSuspend?: boolean;
  startDate?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.hotel.HotelSoldOutOrSuspendBO',
      $: {
        endDate: java.String(this.endDate),
        hasSoldOutOrSuspend: java.Boolean(this.hasSoldOutOrSuspend),
        startDate: java.String(this.startDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
