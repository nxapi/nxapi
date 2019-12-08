import java from 'js-to-java';

export interface IStateBO {
  cnName?: string;
  stateName?: string;
  stateId?: number;
  name?: string;
  enName?: string;
  stateCode?: string;
  id?: number;
}

export class StateBO {
  constructor(params: IStateBO) {
    this.cnName = params.cnName;
    this.stateName = params.stateName;
    this.stateId = params.stateId;
    this.name = params.name;
    this.enName = params.enName;
    this.stateCode = params.stateCode;
    this.id = params.id;
  }

  cnName?: string;
  stateName?: string;
  stateId?: number;
  name?: string;
  enName?: string;
  stateCode?: string;
  id?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.StateBO',
      $: {
        cnName: java.String(this.cnName),
        stateName: java.String(this.stateName),
        stateId: java.Integer(this.stateId),
        name: java.String(this.name),
        enName: java.String(this.enName),
        stateCode: java.String(this.stateCode),
        id: java.Integer(this.id),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
