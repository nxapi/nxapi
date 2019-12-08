import java from 'js-to-java';

export interface IConditionsSearchFullHotelRequest {
  hubId?: number;
  zoneId?: number;
  cityId?: number;
}

export class ConditionsSearchFullHotelRequest {
  constructor(params: IConditionsSearchFullHotelRequest) {
    this.hubId = params.hubId;
    this.zoneId = params.zoneId;
    this.cityId = params.cityId;
  }

  hubId?: number;
  zoneId?: number;
  cityId?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.ConditionsSearchFullHotelRequest',
      $: {
        hubId: java.Integer(this.hubId),
        zoneId: java.Integer(this.zoneId),
        cityId: java.Integer(this.cityId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
