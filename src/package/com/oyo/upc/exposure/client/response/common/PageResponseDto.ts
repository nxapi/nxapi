import java from 'js-to-java';

export interface IPageResponseDto<T = any> {
  totalSize?: number;
  totalPage?: number;
  dataList?: Array<T>;
  pageSize?: number;
  pageNum?: number;
}

export class PageResponseDto<T = any> {
  constructor(params: IPageResponseDto<T>) {
    this.totalSize = params.totalSize;
    this.totalPage = params.totalPage;
    this.dataList = params.dataList;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
  }

  totalSize?: number;
  totalPage?: number;
  dataList?: Array<T>;
  pageSize?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.upc.exposure.client.response.common.PageResponseDto',
      $: {
        totalSize: java.Long(this.totalSize),
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
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
