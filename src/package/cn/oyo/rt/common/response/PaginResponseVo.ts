import java from 'js-to-java';

export interface IPaginResponseVo<T = any> {
  totalSize?: number;
  actualSize?: number;
  totalPage?: number;
  dataList?: Array<T>;
  limit?: number;
  page?: number;
}

export class PaginResponseVo<T = any> {
  constructor(params: IPaginResponseVo<T>) {
    this.totalSize = params.totalSize;
    this.actualSize = params.actualSize;
    this.totalPage = params.totalPage;
    this.dataList = params.dataList;
    this.limit = params.limit;
    this.page = params.page;
  }

  totalSize?: number;
  actualSize?: number;
  totalPage?: number;
  dataList?: Array<T>;
  limit?: number;
  page?: number;

  __fields2java(): any {
    return {
      $class: 'cn.oyo.rt.common.response.PaginResponseVo',
      $: {
        totalSize: java.Long(this.totalSize),
        actualSize: java.Long(this.actualSize),
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
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
