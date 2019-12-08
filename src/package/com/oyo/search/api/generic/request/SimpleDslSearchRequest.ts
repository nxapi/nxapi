import { SimpleSort } from './../dsl/SimpleSort';
import { SimpleHighLight } from './../dsl/SimpleHighLight';
import { SimpleQuery } from './../dsl/SimpleQuery';
import java from 'js-to-java';

export interface ISimpleDslSearchRequest {
  simpleSorts?: Array<SimpleSort>;
  routingValues?: Array<string>;
  pageIndex?: number;
  simpleHighLight?: SimpleHighLight;
  pageSize?: number;
  simpleQuery?: SimpleQuery;
}

export class SimpleDslSearchRequest {
  constructor(params: ISimpleDslSearchRequest) {
    this.simpleSorts = params.simpleSorts;
    this.routingValues = params.routingValues;
    this.pageIndex = params.pageIndex;
    this.simpleHighLight = params.simpleHighLight;
    this.pageSize = params.pageSize;
    this.simpleQuery = params.simpleQuery;
  }

  simpleSorts?: Array<SimpleSort>;
  routingValues?: Array<string>;
  pageIndex?: number;
  simpleHighLight?: SimpleHighLight;
  pageSize?: number;
  simpleQuery?: SimpleQuery;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.generic.request.SimpleDslSearchRequest',
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
        routingValues: this.routingValues
          ? java.List(
              (this.routingValues || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        pageIndex: java.Integer(this.pageIndex),
        simpleHighLight: this.simpleHighLight['__fields2java']
          ? this.simpleHighLight['__fields2java']()
          : this.simpleHighLight,
        pageSize: java.Integer(this.pageSize),
        simpleQuery: this.simpleQuery['__fields2java']
          ? this.simpleQuery['__fields2java']()
          : this.simpleQuery,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
