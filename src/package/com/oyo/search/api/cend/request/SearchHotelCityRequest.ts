import java from 'js-to-java';

export interface ISearchHotelCityRequest {
  hotelStatus?: string;
  channelId?: string;
}

export class SearchHotelCityRequest {
  constructor(params: ISearchHotelCityRequest) {
    this.hotelStatus = params.hotelStatus;
    this.channelId = params.channelId;
  }

  hotelStatus?: string;
  channelId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.SearchHotelCityRequest',
      $: {
        hotelStatus: java.String(this.hotelStatus),
        channelId: java.String(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
