import { PoiOption } from './PoiOption';
import java from 'js-to-java';

export interface IPoiCategory {
  categoryType?: string;
  name?: string;
  subCategoryList?: Array<PoiCategory>;
  poiOptionList?: Array<PoiOption>;
  multiSelect?: number;
}

export class PoiCategory {
  constructor(params: IPoiCategory) {
    this.categoryType = params.categoryType;
    this.name = params.name;
    this.subCategoryList = params.subCategoryList;
    this.poiOptionList = params.poiOptionList;
    this.multiSelect = params.multiSelect;
  }

  categoryType?: string;
  name?: string;
  subCategoryList?: Array<PoiCategory>;
  poiOptionList?: Array<PoiOption>;
  multiSelect?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.poi.PoiCategory',
      $: {
        categoryType: java.String(this.categoryType),
        name: java.String(this.name),
        subCategoryList: this.subCategoryList
          ? java.List(
              (this.subCategoryList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        poiOptionList: this.poiOptionList
          ? java.List(
              (this.poiOptionList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        multiSelect: java.Integer(this.multiSelect),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
