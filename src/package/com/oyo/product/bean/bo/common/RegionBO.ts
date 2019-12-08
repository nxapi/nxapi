import { ZoneBO } from './ZoneBO';
import java from 'js-to-java';

export interface IRegionBO {
  code?: string;
  regionId?: number;
  name?: string;
  zoneBOList?: Array<ZoneBO>;
  countryId?: number;
}

export class RegionBO {
  constructor(params: IRegionBO) {
    this.code = params.code;
    this.regionId = params.regionId;
    this.name = params.name;
    this.zoneBOList = params.zoneBOList;
    this.countryId = params.countryId;
  }

  code?: string;
  regionId?: number;
  name?: string;
  zoneBOList?: Array<ZoneBO>;
  countryId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.RegionBO',
      $: {
        code: java.String(this.code),
        regionId: java.Integer(this.regionId),
        name: java.String(this.name),
        zoneBOList: this.zoneBOList
          ? java.List(
              (this.zoneBOList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        countryId: java.Integer(this.countryId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
