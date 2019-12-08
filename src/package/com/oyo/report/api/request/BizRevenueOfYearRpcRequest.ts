import java from 'js-to-java';

export interface IBizRevenueOfYearRpcRequest {
  bizYear?: string;
  hotelId?: number;
}

export class BizRevenueOfYearRpcRequest {
  constructor(params: IBizRevenueOfYearRpcRequest) {
    this.bizYear = params.bizYear;
    this.hotelId = params.hotelId;
  }

  bizYear?: string;
  hotelId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.BizRevenueOfYearRpcRequest',
      $: {bizYear: java.String(this.bizYear), hotelId: java.Long(this.hotelId)},
    };
  }
}

//generate by interpret-cli dubbo2.js
