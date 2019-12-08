import { PoiOption } from './../bean/PoiOption';
import java from 'js-to-java';

export interface IPoiCategoryBo {
  name?: string;
  poiOptionList?: Array<PoiOption>;
}

export class PoiCategoryBo {
  constructor(params: IPoiCategoryBo) {
    this.name = params.name;
    this.poiOptionList = params.poiOptionList;
  }

  name?: string;
  poiOptionList?: Array<PoiOption>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bo.PoiCategoryBo',
      $: {
        name: java.String(this.name),
        poiOptionList: this.poiOptionList
          ? java.List(
              (this.poiOptionList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
