import java from 'js-to-java';

export interface IRegionDto {
  cityName?: string;
  stateName?: string;
  hubCode?: string;
  cityCode?: string;
  stateCode?: string;
  zoneCode?: string;
}

export class RegionDto {
  constructor(params: IRegionDto) {
    this.cityName = params.cityName;
    this.stateName = params.stateName;
    this.hubCode = params.hubCode;
    this.cityCode = params.cityCode;
    this.stateCode = params.stateCode;
    this.zoneCode = params.zoneCode;
  }

  cityName?: string;
  stateName?: string;
  hubCode?: string;
  cityCode?: string;
  stateCode?: string;
  zoneCode?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.actor.business.client.dto.RegionDto',
      $: {
        cityName: java.String(this.cityName),
        stateName: java.String(this.stateName),
        hubCode: java.String(this.hubCode),
        cityCode: java.String(this.cityCode),
        stateCode: java.String(this.stateCode),
        zoneCode: java.String(this.zoneCode),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
