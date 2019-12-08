import java from 'js-to-java';

export interface IChannelUpdateLogRequest {
  pageSize?: number;
  hotelId?: number;
  pageNum?: number;
}

export class ChannelUpdateLogRequest {
  constructor(params: IChannelUpdateLogRequest) {
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.pageNum = params.pageNum;
  }

  pageSize?: number;
  hotelId?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.channel.ChannelUpdateLogRequest',
      $: {
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
