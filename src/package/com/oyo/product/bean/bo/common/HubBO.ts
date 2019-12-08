import { CityBO } from './CityBO';
import { ClcBO } from './ClcBO';
import java from 'js-to-java';

export interface IHubBO {
  cnName?: string;
  name?: string;
  enName?: string;
  zoneId?: number;
  cityBOList?: Array<CityBO>;
  clcBOList?: Array<ClcBO>;
  id?: number;
}

export class HubBO {
  constructor(params: IHubBO) {
    this.cnName = params.cnName;
    this.name = params.name;
    this.enName = params.enName;
    this.zoneId = params.zoneId;
    this.cityBOList = params.cityBOList;
    this.clcBOList = params.clcBOList;
    this.id = params.id;
  }

  cnName?: string;
  name?: string;
  enName?: string;
  zoneId?: number;
  cityBOList?: Array<CityBO>;
  clcBOList?: Array<ClcBO>;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.HubBO',
      $: {
        cnName: java.String(this.cnName),
        name: java.String(this.name),
        enName: java.String(this.enName),
        zoneId: java.Integer(this.zoneId),
        cityBOList: this.cityBOList
          ? java.List(
              (this.cityBOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        clcBOList: this.clcBOList
          ? java.List(
              (this.clcBOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        id: java.Integer(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
