import java from 'js-to-java';

export interface IHotelMinPrice {
  minPrice?: string;
  hotelId?: number;
}

export class HotelMinPrice {
  constructor(params: IHotelMinPrice) {
    this.minPrice = params.minPrice;
    this.hotelId = params.hotelId;
  }

  minPrice?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bo.HotelMinPrice',
      $: {
        minPrice: java.String(this.minPrice),
        hotelId: java.Integer(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
