import java from 'js-to-java';

export interface IPageInfoDTO<T = any> {
  total?: number;
  pages?: number;
  pageNo?: number;
  pageSize?: number;
  list?: Array<T>;
}

export class PageInfoDTO<T = any> {
  constructor(params: IPageInfoDTO<T>) {
    this.total = params.total;
    this.pages = params.pages;
    this.pageNo = params.pageNo;
    this.pageSize = params.pageSize;
    this.list = params.list;
  }

  total?: number;
  pages?: number;
  pageNo?: number;
  pageSize?: number;
  list?: Array<T>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.PageInfoDTO',
      $: {
        total: java.Long(this.total),
        pages: java.Integer(this.pages),
        pageNo: java.Integer(this.pageNo),
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
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
