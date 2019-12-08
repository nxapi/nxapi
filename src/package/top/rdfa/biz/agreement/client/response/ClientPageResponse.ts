import java from 'js-to-java';

export interface IClientPageResponse<T = any> {
  msg?: string;
  serialVersionUID?: number;
  total?: number;
  code?: string;
  pages?: number;
  data?: T;
  size?: number;
  pageSize?: number;
  pageNum?: number;
}

export class ClientPageResponse<T = any> {
  constructor(params: IClientPageResponse<T>) {
    this.msg = params.msg;
    this.serialVersionUID = params.serialVersionUID;
    this.total = params.total;
    this.code = params.code;
    this.pages = params.pages;
    this.data = params.data;
    this.size = params.size;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
  }

  msg?: string;
  serialVersionUID?: number;
  total?: number;
  code?: string;
  pages?: number;
  data?: T;
  size?: number;
  pageSize?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.response.ClientPageResponse',
      $: {
        msg: java.String(this.msg),
        serialVersionUID: java.Long(this.serialVersionUID),
        total: java.Long(this.total),
        code: java.String(this.code),
        pages: java.Integer(this.pages),
        data:
          this.data && this.data['__fields2java']
            ? this.data['__fields2java']()
            : this.data,
        size: java.Integer(this.size),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
