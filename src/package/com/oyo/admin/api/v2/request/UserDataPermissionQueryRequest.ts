import java from 'js-to-java';

export interface IUserDataPermissionQueryRequest {
  queryAction?: string;
  merchantCode?: string;
  dataType?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  pageNum?: number;
  userId?: number;
}

export class UserDataPermissionQueryRequest {
  constructor(params: IUserDataPermissionQueryRequest) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.dataType = params.dataType;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.pageNum = params.pageNum;
    this.userId = params.userId;
  }

  queryAction?: string;
  merchantCode?: string;
  dataType?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  pageNum?: number;
  userId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.v2.request.UserDataPermissionQueryRequest',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        dataType: java.String(this.dataType),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        pageNum: java.Integer(this.pageNum),
        userId: java.Long(this.userId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
