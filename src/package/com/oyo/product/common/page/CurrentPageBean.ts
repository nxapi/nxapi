import java from 'js-to-java';

export interface ICurrentPageBean<T = any> {
  size?: number;
  pageSize?: number;
  list?: Array<T>;
  pageNum?: number;
}

export class CurrentPageBean<T = any> {
  constructor(params: ICurrentPageBean<T>) {
    this.size = params.size;
    this.pageSize = params.pageSize;
    this.list = params.list;
    this.pageNum = params.pageNum;
  }

  size?: number;
  pageSize?: number;
  list?: Array<T>;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.common.page.CurrentPageBean',
      $: {
        size: java.Integer(this.size),
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
