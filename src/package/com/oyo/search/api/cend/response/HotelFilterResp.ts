import { QuickSelect } from './../bean/QuickSelect';
import { PoiCategory } from './../bean/poi/PoiCategory';
import java from 'js-to-java';

export interface IHotelFilterResp {
  quickSelects?: Array<QuickSelect>;
  poiOptions?: Array<PoiCategory>;
}

export class HotelFilterResp {
  constructor(params: IHotelFilterResp) {
    this.quickSelects = params.quickSelects;
    this.poiOptions = params.poiOptions;
  }

  quickSelects?: Array<QuickSelect>;
  poiOptions?: Array<PoiCategory>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.HotelFilterResp',
      $: {
        quickSelects: this.quickSelects
          ? java.List(
              (this.quickSelects || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        poiOptions: this.poiOptions
          ? java.List(
              (this.poiOptions || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
