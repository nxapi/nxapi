import { FilterBean } from './FilterBean';
import java from 'js-to-java';

export interface IFilterBase {
  clusterFilter?: Array<FilterBean>;
}

export class FilterBase {
  constructor(params: IFilterBase) {
    this.clusterFilter = params.clusterFilter;
  }

  clusterFilter?: Array<FilterBean>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.FilterBase',
      $: {
        clusterFilter: this.clusterFilter
          ? java.List(
              (this.clusterFilter || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
