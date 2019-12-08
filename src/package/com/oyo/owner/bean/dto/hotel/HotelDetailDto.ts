import java from 'js-to-java';

export interface IHotelDetailDto {
  hubId?: number;
  oyoId?: string;
  cityName?: string;
  zoneId?: number;
  hubName?: string;
  hotelId?: number;
  zoneName?: string;
  cityId?: number;
  hotelName?: string;
}

export class HotelDetailDto {
  constructor(params: IHotelDetailDto) {
    this.hubId = params.hubId;
    this.oyoId = params.oyoId;
    this.cityName = params.cityName;
    this.zoneId = params.zoneId;
    this.hubName = params.hubName;
    this.hotelId = params.hotelId;
    this.zoneName = params.zoneName;
    this.cityId = params.cityId;
    this.hotelName = params.hotelName;
  }

  hubId?: number;
  oyoId?: string;
  cityName?: string;
  zoneId?: number;
  hubName?: string;
  hotelId?: number;
  zoneName?: string;
  cityId?: number;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.dto.hotel.HotelDetailDto',
      $: {
        hubId: java.Long(this.hubId),
        oyoId: java.String(this.oyoId),
        cityName: java.String(this.cityName),
        zoneId: java.Long(this.zoneId),
        hubName: java.String(this.hubName),
        hotelId: java.Long(this.hotelId),
        zoneName: java.String(this.zoneName),
        cityId: java.Long(this.cityId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
