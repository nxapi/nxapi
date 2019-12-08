import java from 'js-to-java';

export interface IMinPriceRateCode {
  searchStartTime?: string;
  rateCodeId?: number;
  hotelId?: number;
  searchEndTime?: string;
  checkInDate?: string;
  roomTypeId?: number;
  hasInventory?: boolean;
  payType?: number;
  startTime?: string;
  endTime?: string;
  hourlyRoomHotelCanBooking?: boolean;
  checkInDateMinPrice?: {value: string};
  stableTime?: number;
}

export class MinPriceRateCode {
  constructor(params: IMinPriceRateCode) {
    this.searchStartTime = params.searchStartTime;
    this.rateCodeId = params.rateCodeId;
    this.hotelId = params.hotelId;
    this.searchEndTime = params.searchEndTime;
    this.checkInDate = params.checkInDate;
    this.roomTypeId = params.roomTypeId;
    this.hasInventory = params.hasInventory;
    this.payType = params.payType;
    this.startTime = params.startTime;
    this.endTime = params.endTime;
    this.hourlyRoomHotelCanBooking = params.hourlyRoomHotelCanBooking;
    this.checkInDateMinPrice = params.checkInDateMinPrice;
    this.stableTime = params.stableTime;
  }

  searchStartTime?: string;
  rateCodeId?: number;
  hotelId?: number;
  searchEndTime?: string;
  checkInDate?: string;
  roomTypeId?: number;
  hasInventory?: boolean;
  payType?: number;
  startTime?: string;
  endTime?: string;
  hourlyRoomHotelCanBooking?: boolean;
  checkInDateMinPrice?: {value: string};
  stableTime?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.MinPriceRateCode',
      $: {
        searchStartTime: java.String(this.searchStartTime),
        rateCodeId: java.Integer(this.rateCodeId),
        hotelId: java.Integer(this.hotelId),
        searchEndTime: java.String(this.searchEndTime),
        checkInDate: java.String(this.checkInDate),
        roomTypeId: java.Integer(this.roomTypeId),
        hasInventory: java.Boolean(this.hasInventory),
        payType: java.Integer(this.payType),
        startTime: java.String(this.startTime),
        endTime: java.String(this.endTime),
        hourlyRoomHotelCanBooking: java.Boolean(this.hourlyRoomHotelCanBooking),
        checkInDateMinPrice: this.checkInDateMinPrice
          ? java.BigDecimal(this.checkInDateMinPrice.value)
          : null,
        stableTime: java.Integer(this.stableTime),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
