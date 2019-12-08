import { Poi } from './../../bean/poi/Poi';
import java from 'js-to-java';

export interface IPoiListResponse {
  poiList?: Array<Poi>;
  totalCount?: number;
}

export class PoiListResponse {
  constructor(params: IPoiListResponse) {
    this.poiList = params.poiList;
    this.totalCount = params.totalCount;
  }

  poiList?: Array<Poi>;
  totalCount?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.response.poi.PoiListResponse',
      $: {
        poiList: this.poiList
          ? java.List(
              (this.poiList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
        totalCount: java.Integer(this.totalCount),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
