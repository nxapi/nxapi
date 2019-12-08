import { BatchAreaParentPathBo } from './../../../bean/bo/common/BatchAreaParentPathBo';
import java from 'js-to-java';

export interface IBatchAreaParentPathRequest {
  batchAreaParentPathBo?: Array<BatchAreaParentPathBo>;
}

export class BatchAreaParentPathRequest {
  constructor(params: IBatchAreaParentPathRequest) {
    this.batchAreaParentPathBo = params.batchAreaParentPathBo;
  }

  batchAreaParentPathBo?: Array<BatchAreaParentPathBo>;

  __fields2java(): any {
    return {
      $class:
        'com.oyo.product.controller.request.common.BatchAreaParentPathRequest',
      $: {
        batchAreaParentPathBo: this.batchAreaParentPathBo
          ? java.List(
              (this.batchAreaParentPathBo || []).map((paramItem: any) => {
                return paramItem ? paramItem.__fields2java() : null;
              }),
            )
          : null,
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
