import { BookingRoomEntity } from './../entity/BookingRoomEntity';
import java from 'js-to-java';

export interface ICommentVO {
  departureTime?: Date;
  bookingRoom?: Array<BookingRoomEntity>;
  arrivalTime?: Date;
  hotelId?: number;
  terminal?: string;
  bookingSn?: string;
  bookingId?: number;
  status?: number;
  memberId?: number;
}

export class CommentVO {
  constructor(params: ICommentVO) {
    this.departureTime = params.departureTime;
    this.bookingRoom = params.bookingRoom;
    this.arrivalTime = params.arrivalTime;
    this.hotelId = params.hotelId;
    this.terminal = params.terminal;
    this.bookingSn = params.bookingSn;
    this.bookingId = params.bookingId;
    this.status = params.status;
    this.memberId = params.memberId;
  }

  departureTime?: Date;
  bookingRoom?: Array<BookingRoomEntity>;
  arrivalTime?: Date;
  hotelId?: number;
  terminal?: string;
  bookingSn?: string;
  bookingId?: number;
  status?: number;
  memberId?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.app.response.CommentVO',
      $: {
        departureTime: this.departureTime,
        bookingRoom: this.bookingRoom
          ? java.List(
              (this.bookingRoom || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        arrivalTime: this.arrivalTime,
        hotelId: java.Long(this.hotelId),
        terminal: java.String(this.terminal),
        bookingSn: java.String(this.bookingSn),
        bookingId: java.Long(this.bookingId),
        status: java.Integer(this.status),
        memberId: java.Long(this.memberId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
