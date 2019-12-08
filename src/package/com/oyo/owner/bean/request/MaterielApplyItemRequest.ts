import java from 'js-to-java';

export interface IMaterielApplyItemRequest {
  materielCode?: string;
  batchNo?: string;
  materielType?: string;
  materielNumber?: string;
  materielName?: string;
}

export class MaterielApplyItemRequest {
  constructor(params: IMaterielApplyItemRequest) {
    this.materielCode = params.materielCode;
    this.batchNo = params.batchNo;
    this.materielType = params.materielType;
    this.materielNumber = params.materielNumber;
    this.materielName = params.materielName;
  }

  materielCode?: string;
  batchNo?: string;
  materielType?: string;
  materielNumber?: string;
  materielName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.owner.bean.request.MaterielApplyItemRequest',
      $: {
        materielCode: java.String(this.materielCode),
        batchNo: java.String(this.batchNo),
        materielType: java.String(this.materielType),
        materielNumber: java.String(this.materielNumber),
        materielName: java.String(this.materielName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
