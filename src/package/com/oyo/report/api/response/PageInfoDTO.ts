import java from 'js-to-java';

export interface IPageInfoDTO<T = any> {
  total?: number;
  pages?: number;
  pageSize?: number;
  list?: Array<T>;
  pageNum?: number;
}

export class PageInfoDTO<T = any> {
  constructor(params: IPageInfoDTO<T>) {
    this.total = params.total;
    this.pages = params.pages;
    this.pageSize = params.pageSize;
    this.list = params.list;
    this.pageNum = params.pageNum;
  }

  total?: number;
  pages?: number;
  pageSize?: number;
  list?: Array<T>;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.PageInfoDTO',
      $: {
        total: java.Long(this.total),
        pages: java.Integer(this.pages),
        pageSize: java.Integer(this.pageSize),
        list: this.list
          ? java.List(
              (this.list || []).map((paramItem: any) => {
                return paramItem && paramItem['__fields2java']
                  ? paramItem['__fields2java']()
                  : paramItem;
              }),
            )
          : null,
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
