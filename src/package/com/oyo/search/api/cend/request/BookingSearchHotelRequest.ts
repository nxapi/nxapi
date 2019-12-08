import java from 'js-to-java';

export interface IBookingSearchHotelRequest {
  hits?: number;
  searchType?: string;
  hotelIds?: Array<number>;
  requestId?: string;
  appName?: string;
  query?: string;
  start?: number;
  cityId?: string;
  hotelName?: string;
}

export class BookingSearchHotelRequest {
  constructor(params: IBookingSearchHotelRequest) {
    this.hits = params.hits;
    this.searchType = params.searchType;
    this.hotelIds = params.hotelIds;
    this.requestId = params.requestId;
    this.appName = params.appName;
    this.query = params.query;
    this.start = params.start;
    this.cityId = params.cityId;
    this.hotelName = params.hotelName;
  }

  hits?: number;
  searchType?: string;
  hotelIds?: Array<number>;
  requestId?: string;
  appName?: string;
  query?: string;
  start?: number;
  cityId?: string;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.BookingSearchHotelRequest',
      $: {
        hits: java.Integer(this.hits),
        searchType: java.String(this.searchType),
        hotelIds: this.hotelIds
          ? java.List(
              (this.hotelIds || []).map((paramItem: any) => {
                return java.Integer(paramItem);
              }),
            )
          : null,
        requestId: java.String(this.requestId),
        appName: java.String(this.appName),
        query: java.String(this.query),
        start: java.Integer(this.start),
        cityId: java.String(this.cityId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
