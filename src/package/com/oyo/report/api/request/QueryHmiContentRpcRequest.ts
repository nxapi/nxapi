import java from 'js-to-java';

export interface IQueryHmiContentRpcRequest {
  businessDate?: string;
  hotelId?: number;
}

export class QueryHmiContentRpcRequest {
  constructor(params: IQueryHmiContentRpcRequest) {
    this.businessDate = params.businessDate;
    this.hotelId = params.hotelId;
  }

  businessDate?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.QueryHmiContentRpcRequest',
      $: {
        businessDate: java.String(this.businessDate),
        hotelId: java.Long(this.hotelId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
