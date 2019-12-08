import java from 'js-to-java';

export interface IHotelWifiRequest {
  hits?: number;
  oyoId?: string;
  start?: number;
  wifiId?: string;
  hotelName?: string;
}

export class HotelWifiRequest {
  constructor(params: IHotelWifiRequest) {
    this.hits = params.hits;
    this.oyoId = params.oyoId;
    this.start = params.start;
    this.wifiId = params.wifiId;
    this.hotelName = params.hotelName;
  }

  hits?: number;
  oyoId?: string;
  start?: number;
  wifiId?: string;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.HotelWifiRequest',
      $: {
        hits: java.Integer(this.hits),
        oyoId: java.String(this.oyoId),
        start: java.Integer(this.start),
        wifiId: java.String(this.wifiId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
