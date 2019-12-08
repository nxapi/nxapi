import java from 'js-to-java';

export interface IKryComplianceRpcRequest {
  pageSize?: number;
  hotelId?: number;
  hotelIdList?: Array<number>;
  pageNum?: number;
}

export class KryComplianceRpcRequest {
  constructor(params: IKryComplianceRpcRequest) {
    this.pageSize = params.pageSize;
    this.hotelId = params.hotelId;
    this.hotelIdList = params.hotelIdList;
    this.pageNum = params.pageNum;
  }

  pageSize?: number;
  hotelId?: number;
  hotelIdList?: Array<number>;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.request.KryComplianceRpcRequest',
      $: {
        pageSize: java.Integer(this.pageSize),
        hotelId: java.Long(this.hotelId),
        hotelIdList: this.hotelIdList
          ? java.List(
              (this.hotelIdList || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
