import java from 'js-to-java';

export interface ICheckUserDataPermissionRequest {
  merchantCode?: string;
  dataType?: string;
  appKey?: string;
  dataGroupCode?: string;
  dataCode?: string;
  userId?: number;
}

export class CheckUserDataPermissionRequest {
  constructor(params: ICheckUserDataPermissionRequest) {
    this.merchantCode = params.merchantCode;
    this.dataType = params.dataType;
    this.appKey = params.appKey;
    this.dataGroupCode = params.dataGroupCode;
    this.dataCode = params.dataCode;
    this.userId = params.userId;
  }

  merchantCode?: string;
  dataType?: string;
  appKey?: string;
  dataGroupCode?: string;
  dataCode?: string;
  userId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.v2.request.CheckUserDataPermissionRequest',
      $: {
        merchantCode: java.String(this.merchantCode),
        dataType: java.String(this.dataType),
        appKey: java.String(this.appKey),
        dataGroupCode: java.String(this.dataGroupCode),
        dataCode: java.String(this.dataCode),
        userId: java.Long(this.userId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
