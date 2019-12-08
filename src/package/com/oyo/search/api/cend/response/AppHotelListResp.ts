import { AppHotelListResp$AppHotel } from './AppHotelListResp$AppHotel';
import { FilterBase } from './../bean/FilterBase';
import java from 'js-to-java';

export interface IAppHotelListResp {
  hotels?: Array<AppHotelListResp$AppHotel>;
  sensorsId?: string;
  count?: number;
  noResult?: boolean;
  filters?: FilterBase;
}

export class AppHotelListResp {
  constructor(params: IAppHotelListResp) {
    this.hotels = params.hotels;
    this.sensorsId = params.sensorsId;
    this.count = params.count;
    this.noResult = params.noResult;
    this.filters = params.filters;
  }

  hotels?: Array<AppHotelListResp$AppHotel>;
  sensorsId?: string;
  count?: number;
  noResult?: boolean;
  filters?: FilterBase;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.AppHotelListResp',
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
