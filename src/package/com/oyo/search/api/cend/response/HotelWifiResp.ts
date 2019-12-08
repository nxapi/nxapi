import { HotelWifiBo } from './HotelWifiBo';
import java from 'js-to-java';

export interface IHotelWifiResp {
  count?: number;
  hotelWifiList?: Array<HotelWifiBo>;
}

export class HotelWifiResp {
  constructor(params: IHotelWifiResp) {
    this.count = params.count;
    this.hotelWifiList = params.hotelWifiList;
  }

  count?: number;
  hotelWifiList?: Array<HotelWifiBo>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.HotelWifiResp',
      $: {
        count: java.Integer(this.count),
        hotelWifiList: this.hotelWifiList
          ? java.List(
              (this.hotelWifiList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
