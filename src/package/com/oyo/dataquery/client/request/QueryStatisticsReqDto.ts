import java from 'js-to-java';

export interface IQueryStatisticsReqDto {
  hotelId?: string;
  time?: string;
}

export class QueryStatisticsReqDto {
  constructor(params: IQueryStatisticsReqDto) {
    this.hotelId = params.hotelId;
    this.time = params.time;
  }

  hotelId?: string;
  time?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.QueryStatisticsReqDto',
      $: {hotelId: java.String(this.hotelId), time: java.String(this.time)},
    };
  }
}

//generate by interpret-cli dubbo2.js
