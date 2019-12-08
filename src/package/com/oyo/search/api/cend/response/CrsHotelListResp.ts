import { CrsHotelListResp$CrsHotel } from './CrsHotelListResp$CrsHotel';
import java from 'js-to-java';

export interface ICrsHotelListResp {
  hotels?: Array<CrsHotelListResp$CrsHotel>;
  count?: number;
}

export class CrsHotelListResp {
  constructor(params: ICrsHotelListResp) {
    this.hotels = params.hotels;
    this.count = params.count;
  }

  hotels?: Array<CrsHotelListResp$CrsHotel>;
  count?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.CrsHotelListResp',
      $: {
        hotels: this.hotels
          ? java.List(
              (this.hotels || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        count: java.Integer(this.count),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
