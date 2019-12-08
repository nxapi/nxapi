import java from 'js-to-java';

export interface IExtBookingPostingDetailDTO {
  amount?: {value: string};
  roomNo?: string;
  orderId?: number;
  orderSn?: string;
  bizDate?: Date;
  operateTime?: Date;
  remark?: string;
  bookingId?: number;
  guestName?: string;
}

export class ExtBookingPostingDetailDTO {
  constructor(params: IExtBookingPostingDetailDTO) {
    this.amount = params.amount;
    this.roomNo = params.roomNo;
    this.orderId = params.orderId;
    this.orderSn = params.orderSn;
    this.bizDate = params.bizDate;
    this.operateTime = params.operateTime;
    this.remark = params.remark;
    this.bookingId = params.bookingId;
    this.guestName = params.guestName;
  }

  amount?: {value: string};
  roomNo?: string;
  orderId?: number;
  orderSn?: string;
  bizDate?: Date;
  operateTime?: Date;
  remark?: string;
  bookingId?: number;
  guestName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ExtBookingPostingDetailDTO',
      $: {
        amount: this.amount ? java.BigDecimal(this.amount.value) : null,
        roomNo: java.String(this.roomNo),
        orderId: java.Long(this.orderId),
        orderSn: java.String(this.orderSn),
        bizDate: this.bizDate,
        operateTime: this.operateTime,
        remark: java.String(this.remark),
        bookingId: java.Long(this.bookingId),
        guestName: java.String(this.guestName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
