import { AggregationDataPermissionVO } from './AggregationDataPermissionVO';
import { AggregationResourceVO } from './AggregationResourceVO';
import java from 'js-to-java';

export interface IAggregationPermissionVO {
  dataPermissionMap?: {[name: string]: Array<AggregationDataPermissionVO>};
  errorMessage?: string;
  resourceList?: Array<AggregationResourceVO>;
}

export class AggregationPermissionVO {
  constructor(params: IAggregationPermissionVO) {
    this.dataPermissionMap = params.dataPermissionMap;
    this.errorMessage = params.errorMessage;
    this.resourceList = params.resourceList;
  }

  dataPermissionMap?: {[name: string]: Array<AggregationDataPermissionVO>};
  errorMessage?: string;
  resourceList?: Array<AggregationResourceVO>;

  __fields2java(): any {
    let dataPermissionMapMapTransfer = new Map();
    for (let mapKey in this.dataPermissionMap) {
      dataPermissionMapMapTransfer.set(
        java.String(mapKey),
        java.List(
          this.dataPermissionMap[mapKey].map((paramItem: any) => {
            return paramItem ? paramItem.__fields2java() : null;
          }),
        ),
      );
    }
    return {
      $class: 'com.oyo.admin.api.dto.AggregationPermissionVO',
      $: {
        dataPermissionMap: java.Map(dataPermissionMapMapTransfer),
        errorMessage: java.String(this.errorMessage),
        resourceList: this.resourceList
          ? java.List(
              (this.resourceList || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
