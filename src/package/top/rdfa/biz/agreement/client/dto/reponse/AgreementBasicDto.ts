import java from 'js-to-java';

export interface IAgreementBasicDto {
  code?: string;
  submitDate?: Date;
  actualInvalidTime?: Date;
  signWay?: string;
  subTemplateCode?: string;
  templateCode?: string;
  type?: string;
  cooperationModel?: string;
  agreementId?: number;
  startTime?: Date;
  periodOfValidity?: number;
  mdmAuditTime?: Date;
  signTime?: Date;
  actualEffectiveTime?: Date;
  version?: string;
  expireTime?: Date;
  auditTime?: Date;
  sourceType?: string;
  index1?: string;
  auditStatus?: string;
  ownerSignTime?: Date;
  endTime?: Date;
  subSourceType?: string;
  lifeCycleStatus?: string;
  status?: string;
}

export class AgreementBasicDto {
  constructor(params: IAgreementBasicDto) {
    this.code = params.code;
    this.submitDate = params.submitDate;
    this.actualInvalidTime = params.actualInvalidTime;
    this.signWay = params.signWay;
    this.subTemplateCode = params.subTemplateCode;
    this.templateCode = params.templateCode;
    this.type = params.type;
    this.cooperationModel = params.cooperationModel;
    this.agreementId = params.agreementId;
    this.startTime = params.startTime;
    this.periodOfValidity = params.periodOfValidity;
    this.mdmAuditTime = params.mdmAuditTime;
    this.signTime = params.signTime;
    this.actualEffectiveTime = params.actualEffectiveTime;
    this.version = params.version;
    this.expireTime = params.expireTime;
    this.auditTime = params.auditTime;
    this.sourceType = params.sourceType;
    this.index1 = params.index1;
    this.auditStatus = params.auditStatus;
    this.ownerSignTime = params.ownerSignTime;
    this.endTime = params.endTime;
    this.subSourceType = params.subSourceType;
    this.lifeCycleStatus = params.lifeCycleStatus;
    this.status = params.status;
  }

  code?: string;
  submitDate?: Date;
  actualInvalidTime?: Date;
  signWay?: string;
  subTemplateCode?: string;
  templateCode?: string;
  type?: string;
  cooperationModel?: string;
  agreementId?: number;
  startTime?: Date;
  periodOfValidity?: number;
  mdmAuditTime?: Date;
  signTime?: Date;
  actualEffectiveTime?: Date;
  version?: string;
  expireTime?: Date;
  auditTime?: Date;
  sourceType?: string;
  index1?: string;
  auditStatus?: string;
  ownerSignTime?: Date;
  endTime?: Date;
  subSourceType?: string;
  lifeCycleStatus?: string;
  status?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.AgreementBasicDto',
      $: {
        code: java.String(this.code),
        submitDate: this.submitDate,
        actualInvalidTime: this.actualInvalidTime,
        signWay: java.String(this.signWay),
        subTemplateCode: java.String(this.subTemplateCode),
        templateCode: java.String(this.templateCode),
        type: java.String(this.type),
        cooperationModel: java.String(this.cooperationModel),
        agreementId: java.Long(this.agreementId),
        startTime: this.startTime,
        periodOfValidity: java.Integer(this.periodOfValidity),
        mdmAuditTime: this.mdmAuditTime,
        signTime: this.signTime,
        actualEffectiveTime: this.actualEffectiveTime,
        version: java.String(this.version),
        expireTime: this.expireTime,
        auditTime: this.auditTime,
        sourceType: java.String(this.sourceType),
        index1: java.String(this.index1),
        auditStatus: java.String(this.auditStatus),
        ownerSignTime: this.ownerSignTime,
        endTime: this.endTime,
        subSourceType: java.String(this.subSourceType),
        lifeCycleStatus: java.String(this.lifeCycleStatus),
        status: java.String(this.status),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
