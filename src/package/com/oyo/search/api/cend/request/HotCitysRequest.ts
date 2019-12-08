import java from 'js-to-java';

export interface IHotCitysRequest {
  firstChannel?: string;
  appVersion?: string;
  cityId?: number;
  userId?: number;
  channelId?: string;
}

export class HotCitysRequest {
  constructor(params: IHotCitysRequest) {
    this.firstChannel = params.firstChannel;
    this.appVersion = params.appVersion;
    this.cityId = params.cityId;
    this.userId = params.userId;
    this.channelId = params.channelId;
  }

  firstChannel?: string;
  appVersion?: string;
  cityId?: number;
  userId?: number;
  channelId?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.HotCitysRequest',
      $: {
        firstChannel: java.String(this.firstChannel),
        appVersion: java.String(this.appVersion),
        cityId: java.Integer(this.cityId),
        userId: java.Long(this.userId),
        channelId: java.String(this.channelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
