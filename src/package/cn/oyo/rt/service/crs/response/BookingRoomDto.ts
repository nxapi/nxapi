import java from 'js-to-java';

export interface IBookingRoomDto {
  number?: number;
  isDeleted?: number;
  roomTypeDesc?: string;
  createTime?: Date;
  price?: {value: string};
  updateTime?: Date;
  hotelId?: number;
  id?: number;
  bookingId?: number;
  rateCode?: number;
  roomType?: number;
}

export class BookingRoomDto {
  constructor(params: IBookingRoomDto) {
    this.number = params.number;
    this.isDeleted = params.isDeleted;
    this.roomTypeDesc = params.roomTypeDesc;
    this.createTime = params.createTime;
    this.price = params.price;
    this.updateTime = params.updateTime;
    this.hotelId = params.hotelId;
    this.id = params.id;
    this.bookingId = params.bookingId;
    this.rateCode = params.rateCode;
    this.roomType = params.roomType;
  }

  number?: number;
  isDeleted?: number;
  roomTypeDesc?: string;
  createTime?: Date;
  price?: {value: string};
  updateTime?: Date;
  hotelId?: number;
  id?: number;
  bookingId?: number;
  rateCode?: number;
  roomType?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.service.crs.response.BookingRoomDto',
      $: {
        number: java.Integer(this.number),
        isDeleted: java.Integer(this.isDeleted),
        roomTypeDesc: java.String(this.roomTypeDesc),
        createTime: this.createTime,
        price: this.price ? java.BigDecimal(this.price.value) : null,
        updateTime: this.updateTime,
        hotelId: java.Long(this.hotelId),
        id: java.Long(this.id),
        bookingId: java.Long(this.bookingId),
        rateCode: java.Long(this.rateCode),
        roomType: java.Integer(this.roomType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
