import java from 'js-to-java';

export interface IHotelDistanceResponse {
  distance?: {value: string};
  poiDistanceText?: string;
  hotelId?: number;
}

export class HotelDistanceResponse {
  constructor(params: IHotelDistanceResponse) {
    this.distance = params.distance;
    this.poiDistanceText = params.poiDistanceText;
    this.hotelId = params.hotelId;
  }

  distance?: {value: string};
  poiDistanceText?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.HotelDistanceResponse',
      $: {
        distance: this.distance ? java.BigDecimal(this.distance.value) : null,
        poiDistanceText: java.String(this.poiDistanceText),
        hotelId: java.Integer(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
