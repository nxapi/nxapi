import java from 'js-to-java';

export interface IQueryPLBInfoReqDto {
  fromDate?: Date;
  toDate?: Date;
  hotelId?: string;
}

export class QueryPLBInfoReqDto {
  constructor(params: IQueryPLBInfoReqDto) {
    this.fromDate = params.fromDate;
    this.toDate = params.toDate;
    this.hotelId = params.hotelId;
  }

  fromDate?: Date;
  toDate?: Date;
  hotelId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.QueryPLBInfoReqDto',
      $: {
        fromDate: this.fromDate,
        toDate: this.toDate,
        hotelId: java.String(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
