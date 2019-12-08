import { PoiOption } from './PoiOption';
import java from 'js-to-java';

export interface IPoiScopeFilter {
  locationLongitude?: string;
  locationLatitude?: string;
  poiOptionList?: Array<PoiOption>;
}

export class PoiScopeFilter {
  constructor(params: IPoiScopeFilter) {
    this.locationLongitude = params.locationLongitude;
    this.locationLatitude = params.locationLatitude;
    this.poiOptionList = params.poiOptionList;
  }

  locationLongitude?: string;
  locationLatitude?: string;
  poiOptionList?: Array<PoiOption>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.poi.PoiScopeFilter',
      $: {
        locationLongitude: java.String(this.locationLongitude),
        locationLatitude: java.String(this.locationLatitude),
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
