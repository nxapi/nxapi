import java from 'js-to-java';

export interface IBatchAreaParentPathBo {
  id?: number;
  type?: string;
}

export class BatchAreaParentPathBo {
  constructor(params: IBatchAreaParentPathBo) {
    this.id = params.id;
    this.type = params.type;
  }

  id?: number;
  type?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.BatchAreaParentPathBo',
      $: {id: java.Integer(this.id), type: java.String(this.type)},
    };
  }
}

//generate by interpret-cli dubbo2.js
