import java from 'js-to-java';

export interface IBatchBindChannelRateLogRequest {
  pageNo?: number;
  pageSize?: number;
  type?: number;
}

export class BatchBindChannelRateLogRequest {
  constructor(params: IBatchBindChannelRateLogRequest) {
    this.pageNo = params.pageNo;
    this.pageSize = params.pageSize;
    this.type = params.type;
  }

  pageNo?: number;
  pageSize?: number;
  type?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.hotel.BatchBindChannelRateLogRequest',
      $: {
        pageNo: java.Integer(this.pageNo),
        pageSize: java.Integer(this.pageSize),
        type: java.Integer(this.type),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
