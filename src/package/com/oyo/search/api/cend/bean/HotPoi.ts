import java from 'js-to-java';

export interface IHotPoi {
  latitude?: string;
  name?: string;
  cityId?: number;
  longitude?: string;
}

export class HotPoi {
  constructor(params: IHotPoi) {
    this.latitude = params.latitude;
    this.name = params.name;
    this.cityId = params.cityId;
    this.longitude = params.longitude;
  }

  latitude?: string;
  name?: string;
  cityId?: number;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.HotPoi',
      $: {
        latitude: java.String(this.latitude),
        name: java.String(this.name),
        cityId: java.Integer(this.cityId),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
