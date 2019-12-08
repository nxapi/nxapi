import java from 'js-to-java';

export interface IRiskModelDictDto {
  modelName?: string;
  strategyName?: string;
  modelCreator?: string;
  modelId?: number;
  strategyId?: number;
}

export class RiskModelDictDto {
  constructor(params: IRiskModelDictDto) {
    this.modelName = params.modelName;
    this.strategyName = params.strategyName;
    this.modelCreator = params.modelCreator;
    this.modelId = params.modelId;
    this.strategyId = params.strategyId;
  }

  modelName?: string;
  strategyName?: string;
  modelCreator?: string;
  modelId?: number;
  strategyId?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.RiskModelDictDto',
      $: {
        modelName: java.String(this.modelName),
        strategyName: java.String(this.strategyName),
        modelCreator: java.String(this.modelCreator),
        modelId: java.Integer(this.modelId),
        strategyId: java.Integer(this.strategyId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
