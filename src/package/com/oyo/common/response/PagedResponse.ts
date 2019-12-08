import java from 'js-to-java';

export interface IPagedResponse<T = any> {
  result?: Array<T>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;
}

export class PagedResponse<T = any> {
  constructor(params: IPagedResponse<T>) {
    this.result = params.result;
    this.totalPages = params.totalPages;
    this.pageSize = params.pageSize;
    this.totalCount = params.totalCount;
    this.pageNum = params.pageNum;
  }

  result?: Array<T>;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.common.response.PagedResponse',
      $: {
        result: this.result
          ? java.List(
              (this.result || []).map((paramItem: any) => {
                return paramItem && paramItem['__fields2java']
                  ? paramItem['__fields2java']()
                  : paramItem;
              }),
            )
          : null,
        totalPages: java.Long(this.totalPages),
        pageSize: java.Integer(this.pageSize),
        totalCount: java.Long(this.totalCount),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
