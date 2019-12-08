import { AggregationStaffDTO } from './AggregationStaffDTO';
import java from 'js-to-java';

export interface IAggregationStaffVO {
  errorMessage?: string;
  totalCount?: number;
  list?: Array<AggregationStaffDTO>;
}

export class AggregationStaffVO {
  constructor(params: IAggregationStaffVO) {
    this.errorMessage = params.errorMessage;
    this.totalCount = params.totalCount;
    this.list = params.list;
  }

  errorMessage?: string;
  totalCount?: number;
  list?: Array<AggregationStaffDTO>;

  __fields2java(): any {
    return {
      $class: 'com.oyo.admin.api.dto.AggregationStaffVO',
      $: {
        errorMessage: java.String(this.errorMessage),
        totalCount: java.Long(this.totalCount),
        list: this.list
          ? java.List(
              (this.list || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
