import java from 'js-to-java';

export interface IHotelIncomeUptonowReqDto {
  endDate?: Date;
  hotelId?: number;
}

export class HotelIncomeUptonowReqDto {
  constructor(params: IHotelIncomeUptonowReqDto) {
    this.endDate = params.endDate;
    this.hotelId = params.hotelId;
  }

  endDate?: Date;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.HotelIncomeUptonowReqDto',
      $: {endDate: this.endDate, hotelId: java.Integer(this.hotelId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
