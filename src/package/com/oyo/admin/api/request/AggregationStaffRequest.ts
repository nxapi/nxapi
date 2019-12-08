import java from 'js-to-java';

export interface IAggregationStaffRequest {
  code?: string;
  dataType?: string;
  dataGroupCode?: string;
  appKey?: string;
  dataIds?: Array<number>;
}

export class AggregationStaffRequest {
  constructor(params: IAggregationStaffRequest) {
    this.code = params.code;
    this.dataType = params.dataType;
    this.dataGroupCode = params.dataGroupCode;
    this.appKey = params.appKey;
    this.dataIds = params.dataIds;
  }

  code?: string;
  dataType?: string;
  dataGroupCode?: string;
  appKey?: string;
  dataIds?: Array<number>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.request.AggregationStaffRequest',
      $: {
        code: java.String(this.code),
        dataType: java.String(this.dataType),
        dataGroupCode: java.String(this.dataGroupCode),
        appKey: java.String(this.appKey),
        dataIds: this.dataIds
          ? java.Set(
              (this.dataIds || []).map((paramItem: any) => {
                return java.Long(paramItem);
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
