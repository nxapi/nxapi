import java from 'js-to-java';

export interface ICity {
  hotelNums?: number;
  cityName?: string;
  cityId?: number;
}

export class City {
  constructor(params: ICity) {
    this.hotelNums = params.hotelNums;
    this.cityName = params.cityName;
    this.cityId = params.cityId;
  }

  hotelNums?: number;
  cityName?: string;
  cityId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.City',
      $: {
        hotelNums: java.Integer(this.hotelNums),
        cityName: java.String(this.cityName),
        cityId: java.Integer(this.cityId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
