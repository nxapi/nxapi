import java from 'js-to-java';

export interface IProductListRequest {
  checkOutDate?: Date;
  overLongBooking?: boolean;
  rateCodeId?: number;
  hotelId?: number;
  checkInDate?: Date;
  channelId?: number;
  roomTypeId?: number;
  checkinType?: string;
}

export class ProductListRequest {
  constructor(params: IProductListRequest) {
    this.checkOutDate = params.checkOutDate;
    this.overLongBooking = params.overLongBooking;
    this.rateCodeId = params.rateCodeId;
    this.hotelId = params.hotelId;
    this.checkInDate = params.checkInDate;
    this.channelId = params.channelId;
    this.roomTypeId = params.roomTypeId;
    this.checkinType = params.checkinType;
  }

  checkOutDate?: Date;
  overLongBooking?: boolean;
  rateCodeId?: number;
  hotelId?: number;
  checkInDate?: Date;
  channelId?: number;
  roomTypeId?: number;
  checkinType?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.product.ProductListRequest',
      $: {
        checkOutDate: this.checkOutDate,
        overLongBooking: java.Boolean(this.overLongBooking),
        rateCodeId: java.Long(this.rateCodeId),
        hotelId: java.Long(this.hotelId),
        checkInDate: this.checkInDate,
        channelId: java.Long(this.channelId),
        roomTypeId: java.Long(this.roomTypeId),
        checkinType: java.String(this.checkinType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
