import java from 'js-to-java';

export interface IBasePageRpcRequest {
  start?: number;
  limit?: number;
  page?: number;
}

export class BasePageRpcRequest {
  constructor(params: IBasePageRpcRequest) {
    this.start = params.start;
    this.limit = params.limit;
    this.page = params.page;
  }

  start?: number;
  limit?: number;
  page?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.BasePageRpcRequest',
      $: {
        start: java.Integer(this.start),
        limit: java.Integer(this.limit),
        page: java.Integer(this.page),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
