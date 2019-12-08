import java from 'js-to-java';

export interface IHotelAdditionAgreementDto {
  cooperationPlanType?: string;
  code?: string;
  approveWay?: string;
  effectiveTypeName?: string;
  cooperationPlanTypeId?: number;
  electionProtocol?: number;
  cooperationModel?: number;
  commissionDateType?: number;
  effectiveType?: number;
  predictResult?: string;
  electionProtocolName?: string;
  signBody?: string;
  commissionDateTypeName?: string;
  activeAfterDays?: number;
}

export class HotelAdditionAgreementDto {
  constructor(params: IHotelAdditionAgreementDto) {
    this.cooperationPlanType = params.cooperationPlanType;
    this.code = params.code;
    this.approveWay = params.approveWay;
    this.effectiveTypeName = params.effectiveTypeName;
    this.cooperationPlanTypeId = params.cooperationPlanTypeId;
    this.electionProtocol = params.electionProtocol;
    this.cooperationModel = params.cooperationModel;
    this.commissionDateType = params.commissionDateType;
    this.effectiveType = params.effectiveType;
    this.predictResult = params.predictResult;
    this.electionProtocolName = params.electionProtocolName;
    this.signBody = params.signBody;
    this.commissionDateTypeName = params.commissionDateTypeName;
    this.activeAfterDays = params.activeAfterDays;
  }

  cooperationPlanType?: string;
  code?: string;
  approveWay?: string;
  effectiveTypeName?: string;
  cooperationPlanTypeId?: number;
  electionProtocol?: number;
  cooperationModel?: number;
  commissionDateType?: number;
  effectiveType?: number;
  predictResult?: string;
  electionProtocolName?: string;
  signBody?: string;
  commissionDateTypeName?: string;
  activeAfterDays?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.reponse.HotelAdditionAgreementDto',
      $: {
        cooperationPlanType: java.String(this.cooperationPlanType),
        code: java.String(this.code),
        approveWay: java.String(this.approveWay),
        effectiveTypeName: java.String(this.effectiveTypeName),
        cooperationPlanTypeId: java.Integer(this.cooperationPlanTypeId),
        electionProtocol: java.Integer(this.electionProtocol),
        cooperationModel: java.Integer(this.cooperationModel),
        commissionDateType: java.Integer(this.commissionDateType),
        effectiveType: java.Integer(this.effectiveType),
        predictResult: java.String(this.predictResult),
        electionProtocolName: java.String(this.electionProtocolName),
        signBody: java.String(this.signBody),
        commissionDateTypeName: java.String(this.commissionDateTypeName),
        activeAfterDays: java.Integer(this.activeAfterDays),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
