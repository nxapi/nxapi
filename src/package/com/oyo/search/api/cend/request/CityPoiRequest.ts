import java from 'js-to-java';

export interface ICityPoiRequest {
  cityId?: number;
  channelId?: number;
}

export class CityPoiRequest {
  constructor(params: ICityPoiRequest) {
    this.cityId = params.cityId;
    this.channelId = params.channelId;
  }

  cityId?: number;
  channelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.CityPoiRequest',
      $: {
        cityId: java.Integer(this.cityId),
        channelId: java.Integer(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
