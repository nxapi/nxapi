import java from 'js-to-java';

export interface IQueryConstantRequest {
  key?: string;
}

export class QueryConstantRequest {
  constructor(params: IQueryConstantRequest) {
    this.key = params.key;
  }

  key?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.ops.facade.bean.request.QueryConstantRequest',
      $: {key: java.String(this.key)},
    };
  }
}

//generate by interpret-cli dubbo2.js
