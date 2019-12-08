import java from 'js-to-java';

export interface IPoiOption {
  optionType?: string;
  cityName?: string;
  optionValue?: string;
  latitude?: string;
  name?: string;
  poiId?: number;
  cityId?: number;
  longitude?: string;
  oyoHotelNum?: number;
}

export class PoiOption {
  constructor(params: IPoiOption) {
    this.optionType = params.optionType;
    this.cityName = params.cityName;
    this.optionValue = params.optionValue;
    this.latitude = params.latitude;
    this.name = params.name;
    this.poiId = params.poiId;
    this.cityId = params.cityId;
    this.longitude = params.longitude;
    this.oyoHotelNum = params.oyoHotelNum;
  }

  optionType?: string;
  cityName?: string;
  optionValue?: string;
  latitude?: string;
  name?: string;
  poiId?: number;
  cityId?: number;
  longitude?: string;
  oyoHotelNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.poi.PoiOption',
      $: {
        optionType: java.String(this.optionType),
        cityName: java.String(this.cityName),
        optionValue: java.String(this.optionValue),
        latitude: java.String(this.latitude),
        name: java.String(this.name),
        poiId: java.Long(this.poiId),
        cityId: java.Integer(this.cityId),
        longitude: java.String(this.longitude),
        oyoHotelNum: java.Integer(this.oyoHotelNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
