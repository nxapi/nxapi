import java from 'js-to-java';

export interface IHotDestinationsRequest {
  cityId?: number;
}

export class HotDestinationsRequest {
  constructor(params: IHotDestinationsRequest) {
    this.cityId = params.cityId;
  }

  cityId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.HotDestinationsRequest',
      $: {cityId: java.Integer(this.cityId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
