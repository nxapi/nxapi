import java from 'js-to-java';

export interface ICooperationPlanRelationRequest {
  creator?: string;
  cooperationPlanMasterId?: number;
  relCooperationPlanMasterId?: number;
  relType?: string;
}

export class CooperationPlanRelationRequest {
  constructor(params: ICooperationPlanRelationRequest) {
    this.creator = params.creator;
    this.cooperationPlanMasterId = params.cooperationPlanMasterId;
    this.relCooperationPlanMasterId = params.relCooperationPlanMasterId;
    this.relType = params.relType;
  }

  creator?: string;
  cooperationPlanMasterId?: number;
  relCooperationPlanMasterId?: number;
  relType?: string;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.request.CooperationPlanRelationRequest',
      $: {
        creator: java.String(this.creator),
        cooperationPlanMasterId: java.Long(this.cooperationPlanMasterId),
        relCooperationPlanMasterId: java.Long(this.relCooperationPlanMasterId),
        relType: java.String(this.relType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
