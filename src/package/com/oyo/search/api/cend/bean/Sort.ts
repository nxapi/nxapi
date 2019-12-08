import java from 'js-to-java';

export interface ISort {
  field?: string;
  sortType?: string;
  order?: number;
}

export class Sort {
  constructor(params: ISort) {
    this.field = params.field;
    this.sortType = params.sortType;
    this.order = params.order;
  }

  field?: string;
  sortType?: string;
  order?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.cend.bean.Sort',
      $: {
        field: java.String(this.field),
        sortType: java.String(this.sortType),
        order: java.Integer(this.order),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
