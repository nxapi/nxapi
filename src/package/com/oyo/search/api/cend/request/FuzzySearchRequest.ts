import java from 'js-to-java';

export interface IFuzzySearchRequest {
  hits?: string;
  serviceObj?: string;
  query?: string;
  hotelStatus?: string;
  channelId?: string;
}

export class FuzzySearchRequest {
  constructor(params: IFuzzySearchRequest) {
    this.hits = params.hits;
    this.serviceObj = params.serviceObj;
    this.query = params.query;
    this.hotelStatus = params.hotelStatus;
    this.channelId = params.channelId;
  }

  hits?: string;
  serviceObj?: string;
  query?: string;
  hotelStatus?: string;
  channelId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.FuzzySearchRequest',
      $: {
        hits: java.String(this.hits),
        serviceObj: java.String(this.serviceObj),
        query: java.String(this.query),
        hotelStatus: java.String(this.hotelStatus),
        channelId: java.String(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
