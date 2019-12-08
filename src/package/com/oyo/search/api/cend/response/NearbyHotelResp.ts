import { NearbyHotelBo } from './../bo/NearbyHotelBo';
import java from 'js-to-java';

export interface INearbyHotelResp {
  hotels?: Array<NearbyHotelBo>;
  hotel?: NearbyHotelBo;
}

export class NearbyHotelResp {
  constructor(params: INearbyHotelResp) {
    this.hotels = params.hotels;
    this.hotel = params.hotel;
  }

  hotels?: Array<NearbyHotelBo>;
  hotel?: NearbyHotelBo;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.NearbyHotelResp',
      $: {
        hotels: this.hotels
          ? java.List(
              (this.hotels || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotel: this.hotel ? this.hotel.__fields2java() : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
