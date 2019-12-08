import { HotelMinPrice } from './../bo/HotelMinPrice';
import java from 'js-to-java';

export interface IHotelMinPriceBo {
  hotelMinPriceList?: Array<HotelMinPrice>;
}

export class HotelMinPriceBo {
  constructor(params: IHotelMinPriceBo) {
    this.hotelMinPriceList = params.hotelMinPriceList;
  }

  hotelMinPriceList?: Array<HotelMinPrice>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.HotelMinPriceBo',
      $: {
        hotelMinPriceList: this.hotelMinPriceList
          ? java.List(
              (this.hotelMinPriceList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
