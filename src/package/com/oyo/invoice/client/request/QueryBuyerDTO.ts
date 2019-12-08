import java from 'js-to-java';

export interface IQueryBuyerDTO {
  serialVersionUID?: number;
  pageSize?: number;
  buyerId?: string;
  pageNum?: number;
}

export class QueryBuyerDTO {
  constructor(params: IQueryBuyerDTO) {
    this.serialVersionUID = params.serialVersionUID;
    this.pageSize = params.pageSize;
    this.buyerId = params.buyerId;
    this.pageNum = params.pageNum;
  }

  serialVersionUID?: number;
  pageSize?: number;
  buyerId?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.invoice.client.request.QueryBuyerDTO',
      $: {
        serialVersionUID: java.Long(this.serialVersionUID),
        pageSize: java.Integer(this.pageSize),
        buyerId: java.String(this.buyerId),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
