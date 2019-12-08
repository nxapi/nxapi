import java from 'js-to-java';

export interface IFuzzySearchConsumerRequest {
  distinctId?: string;
  query?: string;
  hotelStatus?: string;
  channelId?: string;
}

export class FuzzySearchConsumerRequest {
  constructor(params: IFuzzySearchConsumerRequest) {
    this.distinctId = params.distinctId;
    this.query = params.query;
    this.hotelStatus = params.hotelStatus;
    this.channelId = params.channelId;
  }

  distinctId?: string;
  query?: string;
  hotelStatus?: string;
  channelId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.FuzzySearchConsumerRequest',
      $: {
        distinctId: java.String(this.distinctId),
        query: java.String(this.query),
        hotelStatus: java.String(this.hotelStatus),
        channelId: java.String(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
