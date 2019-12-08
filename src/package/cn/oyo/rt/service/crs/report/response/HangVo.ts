import java from 'js-to-java';

export interface IHangVo {
  roomNo?: string;
  orderSn?: string;
  bookingName?: string;
  memberName?: string;
  source?: string;
  hotelId?: number;
  hangAmount?: {value: string};
  checkInDate?: Date;
  bookingId?: number;
  bookingSn?: string;
  hangType?: string;
  checkOutDate?: Date;
  hangDate?: Date;
}

export class HangVo {
  constructor(params: IHangVo) {
    this.roomNo = params.roomNo;
    this.orderSn = params.orderSn;
    this.bookingName = params.bookingName;
    this.memberName = params.memberName;
    this.source = params.source;
    this.hotelId = params.hotelId;
    this.hangAmount = params.hangAmount;
    this.checkInDate = params.checkInDate;
    this.bookingId = params.bookingId;
    this.bookingSn = params.bookingSn;
    this.hangType = params.hangType;
    this.checkOutDate = params.checkOutDate;
    this.hangDate = params.hangDate;
  }

  roomNo?: string;
  orderSn?: string;
  bookingName?: string;
  memberName?: string;
  source?: string;
  hotelId?: number;
  hangAmount?: {value: string};
  checkInDate?: Date;
  bookingId?: number;
  bookingSn?: string;
  hangType?: string;
  checkOutDate?: Date;
  hangDate?: Date;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.report.response.HangVo',
      $: {
        roomNo: java.String(this.roomNo),
        orderSn: java.String(this.orderSn),
        bookingName: java.String(this.bookingName),
        memberName: java.String(this.memberName),
        source: java.String(this.source),
        hotelId: java.Long(this.hotelId),
        hangAmount: this.hangAmount
          ? java.BigDecimal(this.hangAmount.value)
          : null,
        checkInDate: this.checkInDate,
        bookingId: java.Long(this.bookingId),
        bookingSn: java.String(this.bookingSn),
        hangType: java.String(this.hangType),
        checkOutDate: this.checkOutDate,
        hangDate: this.hangDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
