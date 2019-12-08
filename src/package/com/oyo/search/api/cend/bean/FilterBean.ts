import java from 'js-to-java';

export interface IFilterBean {
  filterKey?: number;
  filterValue?: string;
}

export class FilterBean {
  constructor(params: IFilterBean) {
    this.filterKey = params.filterKey;
    this.filterValue = params.filterValue;
  }

  filterKey?: number;
  filterValue?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.FilterBean',
      $: {
        filterKey: java.Integer(this.filterKey),
        filterValue: java.String(this.filterValue),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
