import java from 'js-to-java';

export interface IDataPermissionBasicQueryRequest {
  queryAction?: string;
  merchantCode?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  parentDataCode?: string;
  parentDataType?: string;
  pageNum?: number;
}

export class DataPermissionBasicQueryRequest {
  constructor(params: IDataPermissionBasicQueryRequest) {
    this.queryAction = params.queryAction;
    this.merchantCode = params.merchantCode;
    this.pageSize = params.pageSize;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.parentDataCode = params.parentDataCode;
    this.parentDataType = params.parentDataType;
    this.pageNum = params.pageNum;
  }

  queryAction?: string;
  merchantCode?: string;
  pageSize?: number;
  appKey?: string;
  dataGroupCode?: string;
  parentDataCode?: string;
  parentDataType?: string;
  pageNum?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.v2.request.DataPermissionBasicQueryRequest',
      $: {
        queryAction: java.String(this.queryAction),
        merchantCode: java.String(this.merchantCode),
        pageSize: java.Integer(this.pageSize),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        parentDataCode: java.String(this.parentDataCode),
        parentDataType: java.String(this.parentDataType),
        pageNum: java.Integer(this.pageNum),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
