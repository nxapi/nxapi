import java from 'js-to-java';

export interface IClientCooperationPlanQueryRequest {
  groupCodeList?: Array<string>;
  hotelBizId?: string;
  statusList?: Array<string>;
  processId?: string;
  pageSize?: number;
  pageNum?: number;
}

export class ClientCooperationPlanQueryRequest {
  constructor(params: IClientCooperationPlanQueryRequest) {
    this.groupCodeList = params.groupCodeList;
    this.hotelBizId = params.hotelBizId;
    this.statusList = params.statusList;
    this.processId = params.processId;
    this.pageSize = params.pageSize;
    this.pageNum = params.pageNum;
  }

  groupCodeList?: Array<string>;
  hotelBizId?: string;
  statusList?: Array<string>;
  processId?: string;
  pageSize?: number;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.request.ClientCooperationPlanQueryRequest',
      $: {
        groupCodeList: this.groupCodeList
          ? java.List(
              (this.groupCodeList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        hotelBizId: java.String(this.hotelBizId),
        statusList: this.statusList
          ? java.List(
              (this.statusList || []).map((paramItem: any) => {
                return java.String(paramItem);
              }),
            )
          : null,
        processId: java.String(this.processId),
        pageSize: java.Integer(this.pageSize),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
