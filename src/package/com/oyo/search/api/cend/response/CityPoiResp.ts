import { PoiCategoryBo } from './../bo/PoiCategoryBo';
import java from 'js-to-java';

export interface ICityPoiResp {
  poiCategoryList?: Array<PoiCategoryBo>;
}

export class CityPoiResp {
  constructor(params: ICityPoiResp) {
    this.poiCategoryList = params.poiCategoryList;
  }

  poiCategoryList?: Array<PoiCategoryBo>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.CityPoiResp',
      $: {
        poiCategoryList: this.poiCategoryList
          ? java.List(
              (this.poiCategoryList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
