import { SimpleSort } from './../dsl/SimpleSort';
import { SimpleQuery } from './../dsl/SimpleQuery';
import java from 'js-to-java';

export interface ISimpleHotelSearchRequest {
  simpleSorts?: Array<SimpleSort>;
  pageIndex?: number;
  pageSize?: number;
  simpleQuery?: SimpleQuery;
}

export class SimpleHotelSearchRequest {
  constructor(params: ISimpleHotelSearchRequest) {
    this.simpleSorts = params.simpleSorts;
    this.pageIndex = params.pageIndex;
    this.pageSize = params.pageSize;
    this.simpleQuery = params.simpleQuery;
  }

  simpleSorts?: Array<SimpleSort>;
  pageIndex?: number;
  pageSize?: number;
  simpleQuery?: SimpleQuery;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.generic.request.SimpleHotelSearchRequest',
      $: {
        simpleSorts: this.simpleSorts
          ? java.List(
              (this.simpleSorts || []).map((paramItem: any) => {
                return paramItem['__fields2java']
                  ? paramItem['__fields2java']()
                  : paramItem;
              }),
            )
          : null,
        pageIndex: java.Integer(this.pageIndex),
        pageSize: java.Integer(this.pageSize),
        simpleQuery: this.simpleQuery['__fields2java']
          ? this.simpleQuery['__fields2java']()
          : this.simpleQuery,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
