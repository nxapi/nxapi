import java from 'js-to-java';

export interface IPagination<T = any> {
  totalPage?: number;
  dataList?: Array<T>;
  pageSize?: number;
  currentPage?: number;
}

export class Pagination<T = any> {
  constructor(params: IPagination<T>) {
    this.totalPage = params.totalPage;
    this.dataList = params.dataList;
    this.pageSize = params.pageSize;
    this.currentPage = params.currentPage;
  }

  totalPage?: number;
  dataList?: Array<T>;
  pageSize?: number;
  currentPage?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.search.api.bean.Pagination',
      $: {
        totalPage: java.Integer(this.totalPage),
        dataList: this.dataList
          ? java.List(
              (this.dataList || []).map((paramItem: any) => {
                return paramItem && paramItem['__fields2java']
                  ? paramItem['__fields2java']()
                  : paramItem;
              }),
            )
          : null,
        pageSize: java.Integer(this.pageSize),
        currentPage: java.Integer(this.currentPage),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
