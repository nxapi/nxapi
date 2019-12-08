import java from 'js-to-java';

export interface ICityOperationDataDto {
  urn?: string;
  arr?: string;
  revPar?: string;
  gmv?: string;
  cityName?: string;
  srn?: string;
  occ?: string;
}

export class CityOperationDataDto {
  constructor(params: ICityOperationDataDto) {
    this.urn = params.urn;
    this.arr = params.arr;
    this.revPar = params.revPar;
    this.gmv = params.gmv;
    this.cityName = params.cityName;
    this.srn = params.srn;
    this.occ = params.occ;
  }

  urn?: string;
  arr?: string;
  revPar?: string;
  gmv?: string;
  cityName?: string;
  srn?: string;
  occ?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.dto.CityOperationDataDto',
      $: {
        urn: java.String(this.urn),
        arr: java.String(this.arr),
        revPar: java.String(this.revPar),
        gmv: java.String(this.gmv),
        cityName: java.String(this.cityName),
        srn: java.String(this.srn),
        occ: java.String(this.occ),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
