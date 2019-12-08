import java from 'js-to-java';

export interface IClientPageResponse<T = any> {
  msg?: string;
  total?: number;
  code?: string;
  pages?: number;
  data?: Array<T>;
  size?: number;
  pageSize?: number;
  pageNum?: number;
}

export class ClientPageResponse<T = any> {
  constructor(params: IClientPageResponse<T>) {
    this.msg = params.msg;
    this.total = params.total;
    this.code = params.code;
    this.pages = params.pages;
    this.data = params.data;
    this.size = params.size;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
  }

  msg?: string;
  total?: number;
  code?: string;
  pages?: number;
  data?: Array<T>;
  size?: number;
  pageSize?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.v2.response.ClientPageResponse',
      $: {
        msg: java.String(this.msg),
        total: java.Long(this.total),
        code: java.String(this.code),
        pages: java.Integer(this.pages),
        data: this.data
          ? java.List(
              (this.data || []).map((paramItem: any) => {
                return paramItem && paramItem['__fields2java']
                  ? paramItem['__fields2java']()
                  : paramItem;
              }),
            )
          : null,
        size: java.Integer(this.size),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
