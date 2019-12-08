import java from 'js-to-java';

export interface IQueryOperationData4OwnerReqDto {
  fromDate?: string;
  toDate?: string;
  token?: string;
}

export class QueryOperationData4OwnerReqDto {
  constructor(params: IQueryOperationData4OwnerReqDto) {
    this.fromDate = params.fromDate;
    this.toDate = params.toDate;
    this.token = params.token;
  }

  fromDate?: string;
  toDate?: string;
  token?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.dataquery.client.request.QueryOperationData4OwnerReqDto',
      $: {
        fromDate: java.String(this.fromDate),
        toDate: java.String(this.toDate),
        token: java.String(this.token),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
