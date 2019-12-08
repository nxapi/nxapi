import java from 'js-to-java';

export interface IExtBookingPostingDTO {
  checkOutTime?: Date;
  checkInTime?: Date;
  channelName?: string;
  onLineAmount?: {value: string};
  channelId?: number;
  extBookingSn?: string;
  bookingSn?: string;
  guestName?: string;
}

export class ExtBookingPostingDTO {
  constructor(params: IExtBookingPostingDTO) {
    this.checkOutTime = params.checkOutTime;
    this.checkInTime = params.checkInTime;
    this.channelName = params.channelName;
    this.onLineAmount = params.onLineAmount;
    this.channelId = params.channelId;
    this.extBookingSn = params.extBookingSn;
    this.bookingSn = params.bookingSn;
    this.guestName = params.guestName;
  }

  checkOutTime?: Date;
  checkInTime?: Date;
  channelName?: string;
  onLineAmount?: {value: string};
  channelId?: number;
  extBookingSn?: string;
  bookingSn?: string;
  guestName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ExtBookingPostingDTO',
      $: {
        checkOutTime: this.checkOutTime,
        checkInTime: this.checkInTime,
        channelName: java.String(this.channelName),
        onLineAmount: this.onLineAmount
          ? java.BigDecimal(this.onLineAmount.value)
          : null,
        channelId: java.Integer(this.channelId),
        extBookingSn: java.String(this.extBookingSn),
        bookingSn: java.String(this.bookingSn),
        guestName: java.String(this.guestName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
