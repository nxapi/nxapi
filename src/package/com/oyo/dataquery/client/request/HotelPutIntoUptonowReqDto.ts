import java from 'js-to-java';

export interface IHotelPutIntoUptonowReqDto {
  endDate?: Date;
  hotelId?: number;
}

export class HotelPutIntoUptonowReqDto {
  constructor(params: IHotelPutIntoUptonowReqDto) {
    this.endDate = params.endDate;
    this.hotelId = params.hotelId;
  }

  endDate?: Date;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.HotelPutIntoUptonowReqDto',
      $: {endDate: this.endDate, hotelId: java.Integer(this.hotelId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
