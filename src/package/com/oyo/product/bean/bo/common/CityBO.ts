import java from 'js-to-java';

export interface ICityBO {
  cityCname?: string;
  hubId?: number;
  code?: string;
  cityName?: string;
  cityCode?: string;
  stateId?: number;
  name?: string;
  enName?: string;
  cityId?: number;
  initialWord?: string;
  cityCnName?: string;
  id?: number;
}

export class CityBO {
  constructor(params: ICityBO) {
    this.cityCname = params.cityCname;
    this.hubId = params.hubId;
    this.code = params.code;
    this.cityName = params.cityName;
    this.cityCode = params.cityCode;
    this.stateId = params.stateId;
    this.name = params.name;
    this.enName = params.enName;
    this.cityId = params.cityId;
    this.initialWord = params.initialWord;
    this.cityCnName = params.cityCnName;
    this.id = params.id;
  }

  cityCname?: string;
  hubId?: number;
  code?: string;
  cityName?: string;
  cityCode?: string;
  stateId?: number;
  name?: string;
  enName?: string;
  cityId?: number;
  initialWord?: string;
  cityCnName?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.CityBO',
      $: {
        cityCname: java.String(this.cityCname),
        hubId: java.Integer(this.hubId),
        code: java.String(this.code),
        cityName: java.String(this.cityName),
        cityCode: java.String(this.cityCode),
        stateId: java.Integer(this.stateId),
        name: java.String(this.name),
        enName: java.String(this.enName),
        cityId: java.Integer(this.cityId),
        initialWord: java.String(this.initialWord),
        cityCnName: java.String(this.cityCnName),
        id: java.Integer(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
