import { RateCodeChannelBO } from './RateCodeChannelBO';
import java from 'js-to-java';

export interface IHotelRateCodeChannelBO {
  rateCodeChannelList?: Array<RateCodeChannelBO>;
  hotelId?: number;
  hotelName?: string;
}

export class HotelRateCodeChannelBO {
  constructor(params: IHotelRateCodeChannelBO) {
    this.rateCodeChannelList = params.rateCodeChannelList;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
  }

  rateCodeChannelList?: Array<RateCodeChannelBO>;
  hotelId?: number;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.channel.HotelRateCodeChannelBO',
      $: {
        rateCodeChannelList: this.rateCodeChannelList
          ? java.List(
              (this.rateCodeChannelList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
