import java from 'js-to-java';

export interface ICityResponse {
  keywords?: string;
  name?: string;
  id?: number;
  hotelCountInCity?: number;
}

export class CityResponse {
  constructor(params: ICityResponse) {
    this.keywords = params.keywords;
    this.name = params.name;
    this.id = params.id;
    this.hotelCountInCity = params.hotelCountInCity;
  }

  keywords?: string;
  name?: string;
  id?: number;
  hotelCountInCity?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.city.CityResponse',
      $: {
        keywords: java.String(this.keywords),
        name: java.String(this.name),
        id: java.Integer(this.id),
        hotelCountInCity: java.Integer(this.hotelCountInCity),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
