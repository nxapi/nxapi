import java from 'js-to-java';

export interface INpsQueryWithDateReqDto {
  date?: string;
}

export class NpsQueryWithDateReqDto {
  constructor(params: INpsQueryWithDateReqDto) {
    this.date = params.date;
  }

  date?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.NpsQueryWithDateReqDto',
      $: {date: java.String(this.date)},
    };
  }
}

//generate by interpret-cli dubbo2.js
