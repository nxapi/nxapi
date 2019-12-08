import java from 'js-to-java';

export interface IHotelCityDto {
  cityName?: string;
  cityCName?: string;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  hotelStatus?: string;
  hotelName?: string;
}

export class HotelCityDto {
  constructor(params: IHotelCityDto) {
    this.cityName = params.cityName;
    this.cityCName = params.cityCName;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.clusterId = params.clusterId;
    this.hotelStatus = params.hotelStatus;
    this.hotelName = params.hotelName;
  }

  cityName?: string;
  cityCName?: string;
  hotelId?: number;
  cityId?: number;
  clusterId?: number;
  hotelStatus?: string;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.HotelCityDto',
      $: {
        cityName: java.String(this.cityName),
        cityCName: java.String(this.cityCName),
        hotelId: java.Integer(this.hotelId),
        cityId: java.Integer(this.cityId),
        clusterId: java.Integer(this.clusterId),
        hotelStatus: java.String(this.hotelStatus),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
