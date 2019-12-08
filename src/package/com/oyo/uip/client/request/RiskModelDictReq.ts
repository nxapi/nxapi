import java from 'js-to-java';

export interface IRiskModelDictReq {
  id?: number;
}

export class RiskModelDictReq {
  constructor(params: IRiskModelDictReq) {
    this.id = params.id;
  }

  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.request.RiskModelDictReq',
      $: {id: java.Long(this.id)},
    };
  }
}

//generate by interpret-cli dubbo2.js
