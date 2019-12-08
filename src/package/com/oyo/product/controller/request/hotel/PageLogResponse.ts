import java from 'js-to-java';

export interface IPageLogResponse<T = any> {
  result?: Array<T>;
  pageNo?: number;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;
}

export class PageLogResponse<T = any> {
  constructor(params: IPageLogResponse<T>) {
    this.result = params.result;
    this.pageNo = params.pageNo;
    this.totalPages = params.totalPages;
    this.pageSize = params.pageSize;
    this.totalCount = params.totalCount;
  }

  result?: Array<T>;
  pageNo?: number;
  totalPages?: number;
  pageSize?: number;
  totalCount?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.hotel.PageLogResponse',
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
        pageNo: java.Integer(this.pageNo),
        totalPages: java.Long(this.totalPages),
        pageSize: java.Integer(this.pageSize),
        totalCount: java.Long(this.totalCount),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
