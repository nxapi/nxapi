import { HubBO } from './HubBO';
import java from 'js-to-java';

export interface IZoneBO {
  cnName?: string;
  hubBOList?: Array<HubBO>;
  name?: string;
  enName?: string;
  id?: number;
}

export class ZoneBO {
  constructor(params: IZoneBO) {
    this.cnName = params.cnName;
    this.hubBOList = params.hubBOList;
    this.name = params.name;
    this.enName = params.enName;
    this.id = params.id;
  }

  cnName?: string;
  hubBOList?: Array<HubBO>;
  name?: string;
  enName?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.ZoneBO',
      $: {
        cnName: java.String(this.cnName),
        hubBOList: this.hubBOList
          ? java.List(
              (this.hubBOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        name: java.String(this.name),
        enName: java.String(this.enName),
        id: java.Integer(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
