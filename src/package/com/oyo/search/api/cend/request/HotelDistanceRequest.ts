import java from 'js-to-java';

export interface IHotelDistanceRequest {
  latitude?: string;
  hotelId?: number;
  poiDistanceName?: string;
  longitude?: string;
}

export class HotelDistanceRequest {
  constructor(params: IHotelDistanceRequest) {
    this.latitude = params.latitude;
    this.hotelId = params.hotelId;
    this.poiDistanceName = params.poiDistanceName;
    this.longitude = params.longitude;
  }

  latitude?: string;
  hotelId?: number;
  poiDistanceName?: string;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.HotelDistanceRequest',
      $: {
        latitude: java.String(this.latitude),
        hotelId: java.Integer(this.hotelId),
        poiDistanceName: java.String(this.poiDistanceName),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
