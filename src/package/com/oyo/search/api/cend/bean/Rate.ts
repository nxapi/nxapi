import java from 'js-to-java';

export interface IRate {
  rateType?: string;
  lengthOfStay?: number;
  rateName?: string;
  checkOutTime?: string;
  canBeBooked?: boolean;
  searchStartTime?: string;
  checkInTime?: string;
  searchEndTime?: string;
  ratePrice?: number;
  rateId?: number;
}

export class Rate {
  constructor(params: IRate) {
    this.rateType = params.rateType;
    this.lengthOfStay = params.lengthOfStay;
    this.rateName = params.rateName;
    this.checkOutTime = params.checkOutTime;
    this.canBeBooked = params.canBeBooked;
    this.searchStartTime = params.searchStartTime;
    this.checkInTime = params.checkInTime;
    this.searchEndTime = params.searchEndTime;
    this.ratePrice = params.ratePrice;
    this.rateId = params.rateId;
  }

  rateType?: string;
  lengthOfStay?: number;
  rateName?: string;
  checkOutTime?: string;
  canBeBooked?: boolean;
  searchStartTime?: string;
  checkInTime?: string;
  searchEndTime?: string;
  ratePrice?: number;
  rateId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.Rate',
      $: {
        rateType: java.String(this.rateType),
        lengthOfStay: java.Integer(this.lengthOfStay),
        rateName: java.String(this.rateName),
        checkOutTime: java.String(this.checkOutTime),
        canBeBooked: java.Boolean(this.canBeBooked),
        searchStartTime: java.String(this.searchStartTime),
        checkInTime: java.String(this.checkInTime),
        searchEndTime: java.String(this.searchEndTime),
        ratePrice: java.Integer(this.ratePrice),
        rateId: java.Long(this.rateId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
