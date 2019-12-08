import java from 'js-to-java';

export interface IPoi {
  cityName?: string;
  baiduLatitude?: number;
  baiduLongitude?: number;
  name?: string;
  id?: number;
  provinceName?: string;
  cityId?: number;
  provinceId?: number;
}

export class Poi {
  constructor(params: IPoi) {
    this.cityName = params.cityName;
    this.baiduLatitude = params.baiduLatitude;
    this.baiduLongitude = params.baiduLongitude;
    this.name = params.name;
    this.id = params.id;
    this.provinceName = params.provinceName;
    this.cityId = params.cityId;
    this.provinceId = params.provinceId;
  }

  cityName?: string;
  baiduLatitude?: number;
  baiduLongitude?: number;
  name?: string;
  id?: number;
  provinceName?: string;
  cityId?: number;
  provinceId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.poi.Poi',
      $: {
        cityName: java.String(this.cityName),
        baiduLatitude: java.Double(this.baiduLatitude),
        baiduLongitude: java.Double(this.baiduLongitude),
        name: java.String(this.name),
        id: java.Integer(this.id),
        provinceName: java.String(this.provinceName),
        cityId: java.Integer(this.cityId),
        provinceId: java.Integer(this.provinceId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
