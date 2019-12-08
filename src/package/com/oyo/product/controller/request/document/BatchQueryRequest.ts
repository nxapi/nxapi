import java from 'js-to-java';

export interface IBatchQueryRequest {
  batchNo?: string;
  pageNo?: number;
  pageSize?: number;
  type?: string;
}

export class BatchQueryRequest {
  constructor(params: IBatchQueryRequest) {
    this.batchNo = params.batchNo;
    this.pageNo = params.pageNo;
    this.pageSize = params.pageSize;
    this.type = params.type;
  }

  batchNo?: string;
  pageNo?: number;
  pageSize?: number;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.controller.request.document.BatchQueryRequest',
      $: {
        batchNo: java.String(this.batchNo),
        pageNo: java.Integer(this.pageNo),
        pageSize: java.Integer(this.pageSize),
        type: java.String(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
