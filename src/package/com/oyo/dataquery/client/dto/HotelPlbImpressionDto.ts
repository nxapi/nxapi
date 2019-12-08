import java from 'js-to-java';

export interface IHotelPlbImpressionDto {
  hotelId?: string;
  impressionNumRank?: number;
  hotelName?: string;
  impressionNum?: number;
}

export class HotelPlbImpressionDto {
  constructor(params: IHotelPlbImpressionDto) {
    this.hotelId = params.hotelId;
    this.impressionNumRank = params.impressionNumRank;
    this.hotelName = params.hotelName;
    this.impressionNum = params.impressionNum;
  }

  hotelId?: string;
  impressionNumRank?: number;
  hotelName?: string;
  impressionNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.HotelPlbImpressionDto',
      $: {
        hotelId: java.String(this.hotelId),
        impressionNumRank: java.Double(this.impressionNumRank),
        hotelName: java.String(this.hotelName),
        impressionNum: java.Double(this.impressionNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
