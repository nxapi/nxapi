import java from 'js-to-java';

export interface IRevenueRoomNightsDetailDTO {
  roomRoomReservationSn?: string;
  roomNo?: string;
  roomTypeDesc?: string;
  checkInTime?: Date;
  consumptionAmount?: {value: string};
  bookingSn?: string;
  extBookingSn?: string;
  guestName?: string;
  roomReservationStatus?: string;
  checkOutTime?: Date;
  channelName?: string;
  roomAmount?: {value: string};
  checkInType?: string;
}

export class RevenueRoomNightsDetailDTO {
  constructor(params: IRevenueRoomNightsDetailDTO) {
    this.roomRoomReservationSn = params.roomRoomReservationSn;
    this.roomNo = params.roomNo;
    this.roomTypeDesc = params.roomTypeDesc;
    this.checkInTime = params.checkInTime;
    this.consumptionAmount = params.consumptionAmount;
    this.bookingSn = params.bookingSn;
    this.extBookingSn = params.extBookingSn;
    this.guestName = params.guestName;
    this.roomReservationStatus = params.roomReservationStatus;
    this.checkOutTime = params.checkOutTime;
    this.channelName = params.channelName;
    this.roomAmount = params.roomAmount;
    this.checkInType = params.checkInType;
  }

  roomRoomReservationSn?: string;
  roomNo?: string;
  roomTypeDesc?: string;
  checkInTime?: Date;
  consumptionAmount?: {value: string};
  bookingSn?: string;
  extBookingSn?: string;
  guestName?: string;
  roomReservationStatus?: string;
  checkOutTime?: Date;
  channelName?: string;
  roomAmount?: {value: string};
  checkInType?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.RevenueRoomNightsDetailDTO',
      $: {
        roomRoomReservationSn: java.String(this.roomRoomReservationSn),
        roomNo: java.String(this.roomNo),
        roomTypeDesc: java.String(this.roomTypeDesc),
        checkInTime: this.checkInTime,
        consumptionAmount: this.consumptionAmount
          ? java.BigDecimal(this.consumptionAmount.value)
          : null,
        bookingSn: java.String(this.bookingSn),
        extBookingSn: java.String(this.extBookingSn),
        guestName: java.String(this.guestName),
        roomReservationStatus: java.String(this.roomReservationStatus),
        checkOutTime: this.checkOutTime,
        channelName: java.String(this.channelName),
        roomAmount: this.roomAmount
          ? java.BigDecimal(this.roomAmount.value)
          : null,
        checkInType: java.String(this.checkInType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
