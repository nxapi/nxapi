import { Hotel } from './../bean/Hotel';
import { FilterBase } from './../bean/FilterBase';
import java from 'js-to-java';

export interface IHotelListResponse {
  hotels?: Array<Hotel>;
  sensorsId?: string;
  count?: number;
  noResult?: boolean;
  filters?: FilterBase;
}

export class HotelListResponse {
  constructor(params: IHotelListResponse) {
    this.hotels = params.hotels;
    this.sensorsId = params.sensorsId;
    this.count = params.count;
    this.noResult = params.noResult;
    this.filters = params.filters;
  }

  hotels?: Array<Hotel>;
  sensorsId?: string;
  count?: number;
  noResult?: boolean;
  filters?: FilterBase;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.HotelListResponse',
      $: {
        hotels: this.hotels
          ? java.List(
              (this.hotels || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        sensorsId: java.String(this.sensorsId),
        count: java.Integer(this.count),
        noResult: java.Boolean(this.noResult),
        filters: this.filters ? this.filters.__fields2java() : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
