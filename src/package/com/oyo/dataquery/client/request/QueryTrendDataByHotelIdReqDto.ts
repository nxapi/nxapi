import java from 'js-to-java';

export interface IQueryTrendDataByHotelIdReqDto {
  endDate?: Date;
  timeType?: string;
  hotelId?: string;
  startDate?: Date;
}

export class QueryTrendDataByHotelIdReqDto {
  constructor(params: IQueryTrendDataByHotelIdReqDto) {
    this.endDate = params.endDate;
    this.timeType = params.timeType;
    this.hotelId = params.hotelId;
    this.startDate = params.startDate;
  }

  endDate?: Date;
  timeType?: string;
  hotelId?: string;
  startDate?: Date;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.QueryTrendDataByHotelIdReqDto',
      $: {
        endDate: this.endDate,
        timeType: java.String(this.timeType),
        hotelId: java.String(this.hotelId),
        startDate: this.startDate,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
