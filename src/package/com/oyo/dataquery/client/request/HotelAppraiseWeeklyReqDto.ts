import java from 'js-to-java';

export interface IHotelAppraiseWeeklyReqDto {
  endDate?: Date;
  hotelId?: number;
  startDate?: Date;
}

export class HotelAppraiseWeeklyReqDto {
  constructor(params: IHotelAppraiseWeeklyReqDto) {
    this.endDate = params.endDate;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  hotelId?: number;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.HotelAppraiseWeeklyReqDto',
      $: {
        endDate: this.endDate,
        hotelId: java.Integer(this.hotelId),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
