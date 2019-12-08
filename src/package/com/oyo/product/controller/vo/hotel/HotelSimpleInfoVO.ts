import java from 'js-to-java';

export interface IHotelSimpleInfoVO {
  oyoId?: string;
  cityName?: string;
  alternateName?: string;
  hotelId?: number;
  cityId?: number;
  hotelName?: string;
}

export class HotelSimpleInfoVO {
  constructor(params: IHotelSimpleInfoVO) {
    this.oyoId = params.oyoId;
    this.cityName = params.cityName;
    this.alternateName = params.alternateName;
    this.hotelId = params.hotelId;
    this.cityId = params.cityId;
    this.hotelName = params.hotelName;
  }

  oyoId?: string;
  cityName?: string;
  alternateName?: string;
  hotelId?: number;
  cityId?: number;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelSimpleInfoVO',
      $: {
        oyoId: java.String(this.oyoId),
        cityName: java.String(this.cityName),
        alternateName: java.String(this.alternateName),
        hotelId: java.Long(this.hotelId),
        cityId: java.Integer(this.cityId),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
