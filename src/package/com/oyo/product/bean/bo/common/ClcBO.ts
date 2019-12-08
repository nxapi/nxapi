import java from 'js-to-java';

export interface IClcBO {
  clcId?: number;
  clcCode?: string;
  hubId?: number;
  cooperationType?: string;
  enName?: string;
  clcName?: string;
}

export class ClcBO {
  constructor(params: IClcBO) {
    this.clcId = params.clcId;
    this.clcCode = params.clcCode;
    this.hubId = params.hubId;
    this.cooperationType = params.cooperationType;
    this.enName = params.enName;
    this.clcName = params.clcName;
  }

  clcId?: number;
  clcCode?: string;
  hubId?: number;
  cooperationType?: string;
  enName?: string;
  clcName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.product.bean.bo.common.ClcBO',
      $: {
        clcId: java.Integer(this.clcId),
        clcCode: java.String(this.clcCode),
        hubId: java.Integer(this.hubId),
        cooperationType: java.String(this.cooperationType),
        enName: java.String(this.enName),
        clcName: java.String(this.clcName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
