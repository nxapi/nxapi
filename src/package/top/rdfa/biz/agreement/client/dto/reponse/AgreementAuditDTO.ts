import java from 'js-to-java';

export interface IAgreementAuditDTO {
  area?: string;
  cooperationMode?: string;
  code?: string;
  presenter?: string;
  modifyDate?: string;
  city?: string;
  submitDate?: string;
  signWay?: string;
  versionName?: string;
  hotelName?: string;
  auditState?: string;
  contractVersion?: string;
  leadsId?: number;
  centreCity?: string;
  sourceType?: string;
  crsId?: string;
  agreementId?: number;
  startTime?: string;
  businessType?: string;
  auditDate?: string;
}

export class AgreementAuditDTO {
  constructor(params: IAgreementAuditDTO) {
    this.area = params.area;
    this.cooperationMode = params.cooperationMode;
    this.code = params.code;
    this.presenter = params.presenter;
    this.modifyDate = params.modifyDate;
    this.city = params.city;
    this.submitDate = params.submitDate;
    this.signWay = params.signWay;
    this.versionName = params.versionName;
    this.hotelName = params.hotelName;
    this.auditState = params.auditState;
    this.contractVersion = params.contractVersion;
    this.leadsId = params.leadsId;
    this.centreCity = params.centreCity;
    this.sourceType = params.sourceType;
    this.crsId = params.crsId;
    this.agreementId = params.agreementId;
    this.startTime = params.startTime;
    this.businessType = params.businessType;
    this.auditDate = params.auditDate;
  }

  area?: string;
  cooperationMode?: string;
  code?: string;
  presenter?: string;
  modifyDate?: string;
  city?: string;
  submitDate?: string;
  signWay?: string;
  versionName?: string;
  hotelName?: string;
  auditState?: string;
  contractVersion?: string;
  leadsId?: number;
  centreCity?: string;
  sourceType?: string;
  crsId?: string;
  agreementId?: number;
  startTime?: string;
  businessType?: string;
  auditDate?: string;

  __fields2java(): any {
    return {
      $class: 'top.rdfa.biz.agreement.client.dto.reponse.AgreementAuditDTO',
      $: {
        area: java.String(this.area),
        cooperationMode: java.String(this.cooperationMode),
        code: java.String(this.code),
        presenter: java.String(this.presenter),
        modifyDate: java.String(this.modifyDate),
        city: java.String(this.city),
        submitDate: java.String(this.submitDate),
        signWay: java.String(this.signWay),
        versionName: java.String(this.versionName),
        hotelName: java.String(this.hotelName),
        auditState: java.String(this.auditState),
        contractVersion: java.String(this.contractVersion),
        leadsId: java.Long(this.leadsId),
        centreCity: java.String(this.centreCity),
        sourceType: java.String(this.sourceType),
        crsId: java.String(this.crsId),
        agreementId: java.Long(this.agreementId),
        startTime: java.String(this.startTime),
        businessType: java.String(this.businessType),
        auditDate: java.String(this.auditDate),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
