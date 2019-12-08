import java from 'js-to-java';

export interface IHotelApolloCustomVO {
  cityName?: string;
  phone?: string;
  zoneId?: number;
  id?: number;
  cityId?: number;
  zoneName?: string;
  activationDate?: Date;
  email?: string;
}

export class HotelApolloCustomVO {
  constructor(params: IHotelApolloCustomVO) {
    this.cityName = params.cityName;
    this.phone = params.phone;
    this.zoneId = params.zoneId;
    this.id = params.id;
    this.cityId = params.cityId;
    this.zoneName = params.zoneName;
    this.activationDate = params.activationDate;
    this.email = params.email;
  }

  cityName?: string;
  phone?: string;
  zoneId?: number;
  id?: number;
  cityId?: number;
  zoneName?: string;
  activationDate?: Date;
  email?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.vo.hotel.HotelApolloCustomVO',
      $: {
        cityName: java.String(this.cityName),
        phone: java.String(this.phone),
        zoneId: java.Integer(this.zoneId),
        id: java.Long(this.id),
        cityId: java.Integer(this.cityId),
        zoneName: java.String(this.zoneName),
        activationDate: this.activationDate,
        email: java.String(this.email),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
