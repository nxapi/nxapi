import java from 'js-to-java';

export interface IRetrievePoiOptionRequest {
  latitude?: string;
  cityId?: number;
  type?: number;
  channelId?: number;
  longitude?: string;
}

export class RetrievePoiOptionRequest {
  constructor(params: IRetrievePoiOptionRequest) {
    this.latitude = params.latitude;
    this.cityId = params.cityId;
    this.type = params.type;
    this.channelId = params.channelId;
    this.longitude = params.longitude;
  }

  latitude?: string;
  cityId?: number;
  type?: number;
  channelId?: number;
  longitude?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.RetrievePoiOptionRequest',
      $: {
        latitude: java.String(this.latitude),
        cityId: java.Integer(this.cityId),
        type: java.Integer(this.type),
        channelId: java.Integer(this.channelId),
        longitude: java.String(this.longitude),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
