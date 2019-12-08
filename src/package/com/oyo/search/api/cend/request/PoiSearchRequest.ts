import java from 'js-to-java';

export interface IPoiSearchRequest {
  hits?: number;
  start?: number;
  name?: string;
  cityId?: number;
  provinceId?: number;
}

export class PoiSearchRequest {
  constructor(params: IPoiSearchRequest) {
    this.hits = params.hits;
    this.start = params.start;
    this.name = params.name;
    this.cityId = params.cityId;
    this.provinceId = params.provinceId;
  }

  hits?: number;
  start?: number;
  name?: string;
  cityId?: number;
  provinceId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.request.PoiSearchRequest',
      $: {
        hits: java.Integer(this.hits),
        start: java.Integer(this.start),
        name: java.String(this.name),
        cityId: java.Integer(this.cityId),
        provinceId: java.Integer(this.provinceId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
