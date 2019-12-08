import java from 'js-to-java';

export interface IAgreementAuditListRequestDto {
  hubId?: number;
  submitStartTime?: string;
  code?: string;
  city?: string;
  pageSize?: number;
  hotelName?: string;
  pageNum?: number;
  clcId?: number;
  leadsId?: string;
  submitEndTime?: string;
  crsId?: string;
  auditStatus?: string;
  zoneId?: number;
  streetId?: number;
}

export class AgreementAuditListRequestDto {
  constructor(params: IAgreementAuditListRequestDto) {
    this.hubId = params.hubId;
    this.submitStartTime = params.submitStartTime;
    this.code = params.code;
    this.city = params.city;
    this.pageSize = params.pageSize;
    this.hotelName = params.hotelName;
    this.pageNum = params.pageNum;
    this.clcId = params.clcId;
    this.leadsId = params.leadsId;
    this.submitEndTime = params.submitEndTime;
    this.crsId = params.crsId;
    this.auditStatus = params.auditStatus;
    this.zoneId = params.zoneId;
    this.streetId = params.streetId;
  }

  hubId?: number;
  submitStartTime?: string;
  code?: string;
  city?: string;
  pageSize?: number;
  hotelName?: string;
  pageNum?: number;
  clcId?: number;
  leadsId?: string;
  submitEndTime?: string;
  crsId?: string;
  auditStatus?: string;
  zoneId?: number;
  streetId?: number;

  __fields2java(): any {
    return {
      $class:
        'top.rdfa.biz.agreement.client.dto.request.AgreementAuditListRequestDto',
      $: {
        hubId: java.Integer(this.hubId),
        submitStartTime: java.String(this.submitStartTime),
        code: java.String(this.code),
        city: java.String(this.city),
        pageSize: java.Integer(this.pageSize),
        hotelName: java.String(this.hotelName),
        pageNum: java.Integer(this.pageNum),
        clcId: java.Integer(this.clcId),
        leadsId: java.String(this.leadsId),
        submitEndTime: java.String(this.submitEndTime),
        crsId: java.String(this.crsId),
        auditStatus: java.String(this.auditStatus),
        zoneId: java.Integer(this.zoneId),
        streetId: java.Integer(this.streetId),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
