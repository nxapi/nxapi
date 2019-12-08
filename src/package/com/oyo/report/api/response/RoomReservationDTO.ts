import { GuestDTO } from './GuestDTO';
import java from 'js-to-java';

export interface IRoomReservationDTO {
  orderId?: number;
  orderSn?: string;
  checkInTime?: Date;
  orderStatus?: number;
  hotelId?: number;
  checkInPattern?: string;
  bookingId?: number;
  bookingSn?: string;
  checkIn?: Date;
  checkOutTime?: Date;
  checkOut?: Date;
  operatorId?: number;
  guestList?: Array<GuestDTO>;
  channelId?: number;
}

export class RoomReservationDTO {
  constructor(params: IRoomReservationDTO) {
    this.orderId = params.orderId;
    this.orderSn = params.orderSn;
    this.checkInTime = params.checkInTime;
    this.orderStatus = params.orderStatus;
    this.hotelId = params.hotelId;
    this.checkInPattern = params.checkInPattern;
    this.bookingId = params.bookingId;
    this.bookingSn = params.bookingSn;
    this.checkIn = params.checkIn;
    this.checkOutTime = params.checkOutTime;
    this.checkOut = params.checkOut;
    this.operatorId = params.operatorId;
    this.guestList = params.guestList;
    this.channelId = params.channelId;
  }

  orderId?: number;
  orderSn?: string;
  checkInTime?: Date;
  orderStatus?: number;
  hotelId?: number;
  checkInPattern?: string;
  bookingId?: number;
  bookingSn?: string;
  checkIn?: Date;
  checkOutTime?: Date;
  checkOut?: Date;
  operatorId?: number;
  guestList?: Array<GuestDTO>;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.RoomReservationDTO',
      $: {
        orderId: java.Long(this.orderId),
        orderSn: java.String(this.orderSn),
        checkInTime: this.checkInTime,
        orderStatus: java.Integer(this.orderStatus),
        hotelId: java.Long(this.hotelId),
        checkInPattern: java.String(this.checkInPattern),
        bookingId: java.Long(this.bookingId),
        bookingSn: java.String(this.bookingSn),
        checkIn: this.checkIn,
        checkOutTime: this.checkOutTime,
        checkOut: this.checkOut,
        operatorId: java.Long(this.operatorId),
        guestList: this.guestList
          ? java.List(
              (this.guestList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        channelId: java.Long(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
