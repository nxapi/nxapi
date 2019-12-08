import java from 'js-to-java';

export interface IComplianceIndexDto {
  otaAccountCheckErrorStatus?: boolean;
  totalErrorCount?: number;
  deductMgRate?: {value: string};
  hotelDataErrorStatus?: boolean;
  cmsnCmplStatus?: boolean;
  otaAccountCheckErrorCount?: number;
  otaOrderCount?: number;
  rejectInstallIdeStatus?: string;
  totalCid?: number;
  overalOcc?: {value: string};
  checkInRate?: {value: string};
  pmsActualDays?: number;
  pmsLoginRiskLevel?: string;
  cidLevel?: string;
  otaBadCommentLevel?: string;
  ideInstallStatus?: string;
  badCommentErrorStatus?: boolean;
  appOrderCount?: number;
  autoCheckInOrderCount?: number;
  cidErrorStatus?: boolean;
  pmsErrorStatus?: boolean;
  appBadCommentCount?: number;
  autoCheckInRiskLevel?: string;
  hotelId?: number;
  otaBadCommentCount?: number;
  pmsLoginDays?: number;
  hotelName?: string;
  otaCancelLevel?: string;
  revparAchieve?: {value: string};
  otaCancelRate?: {value: string};
  otaCancelOrderNum?: number;
  autoCheckInTotalCount?: number;
  autoCheckInRate?: {value: string};
  otaBadCommentRate?: {value: string};
  otaAccountCheckSeriesFailedCount?: number;
  rejectAuditCount?: number;
  appBadCommentRate?: {value: string};
  signRmg?: string;
  otaTotalOrderNum?: number;
  hotelAgreementType?: string;
  otaCancelErrorStatus?: boolean;
  ideErrorStatus?: boolean;
  appBadCommentLevel?: string;
  pmsLoginRate?: {value: string};
  incomeLossErrorStatus?: boolean;
}

export class ComplianceIndexDto {
  constructor(params: IComplianceIndexDto) {
    this.otaAccountCheckErrorStatus = params.otaAccountCheckErrorStatus;
    this.totalErrorCount = params.totalErrorCount;
    this.deductMgRate = params.deductMgRate;
    this.hotelDataErrorStatus = params.hotelDataErrorStatus;
    this.cmsnCmplStatus = params.cmsnCmplStatus;
    this.otaAccountCheckErrorCount = params.otaAccountCheckErrorCount;
    this.otaOrderCount = params.otaOrderCount;
    this.rejectInstallIdeStatus = params.rejectInstallIdeStatus;
    this.totalCid = params.totalCid;
    this.overalOcc = params.overalOcc;
    this.checkInRate = params.checkInRate;
    this.pmsActualDays = params.pmsActualDays;
    this.pmsLoginRiskLevel = params.pmsLoginRiskLevel;
    this.cidLevel = params.cidLevel;
    this.otaBadCommentLevel = params.otaBadCommentLevel;
    this.ideInstallStatus = params.ideInstallStatus;
    this.badCommentErrorStatus = params.badCommentErrorStatus;
    this.appOrderCount = params.appOrderCount;
    this.autoCheckInOrderCount = params.autoCheckInOrderCount;
    this.cidErrorStatus = params.cidErrorStatus;
    this.pmsErrorStatus = params.pmsErrorStatus;
    this.appBadCommentCount = params.appBadCommentCount;
    this.autoCheckInRiskLevel = params.autoCheckInRiskLevel;
    this.hotelId = params.hotelId;
    this.otaBadCommentCount = params.otaBadCommentCount;
    this.pmsLoginDays = params.pmsLoginDays;
    this.hotelName = params.hotelName;
    this.otaCancelLevel = params.otaCancelLevel;
    this.revparAchieve = params.revparAchieve;
    this.otaCancelRate = params.otaCancelRate;
    this.otaCancelOrderNum = params.otaCancelOrderNum;
    this.autoCheckInTotalCount = params.autoCheckInTotalCount;
    this.autoCheckInRate = params.autoCheckInRate;
    this.otaBadCommentRate = params.otaBadCommentRate;
    this.otaAccountCheckSeriesFailedCount =
      params.otaAccountCheckSeriesFailedCount;
    this.rejectAuditCount = params.rejectAuditCount;
    this.appBadCommentRate = params.appBadCommentRate;
    this.signRmg = params.signRmg;
    this.otaTotalOrderNum = params.otaTotalOrderNum;
    this.hotelAgreementType = params.hotelAgreementType;
    this.otaCancelErrorStatus = params.otaCancelErrorStatus;
    this.ideErrorStatus = params.ideErrorStatus;
    this.appBadCommentLevel = params.appBadCommentLevel;
    this.pmsLoginRate = params.pmsLoginRate;
    this.incomeLossErrorStatus = params.incomeLossErrorStatus;
  }

  otaAccountCheckErrorStatus?: boolean;
  totalErrorCount?: number;
  deductMgRate?: {value: string};
  hotelDataErrorStatus?: boolean;
  cmsnCmplStatus?: boolean;
  otaAccountCheckErrorCount?: number;
  otaOrderCount?: number;
  rejectInstallIdeStatus?: string;
  totalCid?: number;
  overalOcc?: {value: string};
  checkInRate?: {value: string};
  pmsActualDays?: number;
  pmsLoginRiskLevel?: string;
  cidLevel?: string;
  otaBadCommentLevel?: string;
  ideInstallStatus?: string;
  badCommentErrorStatus?: boolean;
  appOrderCount?: number;
  autoCheckInOrderCount?: number;
  cidErrorStatus?: boolean;
  pmsErrorStatus?: boolean;
  appBadCommentCount?: number;
  autoCheckInRiskLevel?: string;
  hotelId?: number;
  otaBadCommentCount?: number;
  pmsLoginDays?: number;
  hotelName?: string;
  otaCancelLevel?: string;
  revparAchieve?: {value: string};
  otaCancelRate?: {value: string};
  otaCancelOrderNum?: number;
  autoCheckInTotalCount?: number;
  autoCheckInRate?: {value: string};
  otaBadCommentRate?: {value: string};
  otaAccountCheckSeriesFailedCount?: number;
  rejectAuditCount?: number;
  appBadCommentRate?: {value: string};
  signRmg?: string;
  otaTotalOrderNum?: number;
  hotelAgreementType?: string;
  otaCancelErrorStatus?: boolean;
  ideErrorStatus?: boolean;
  appBadCommentLevel?: string;
  pmsLoginRate?: {value: string};
  incomeLossErrorStatus?: boolean;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.ComplianceIndexDto',
      $: {
        otaAccountCheckErrorStatus: java.Boolean(
          this.otaAccountCheckErrorStatus,
        ),
        totalErrorCount: java.Integer(this.totalErrorCount),
        deductMgRate: this.deductMgRate
          ? java.BigDecimal(this.deductMgRate.value)
          : null,
        hotelDataErrorStatus: java.Boolean(this.hotelDataErrorStatus),
        cmsnCmplStatus: java.Boolean(this.cmsnCmplStatus),
        otaAccountCheckErrorCount: java.Integer(this.otaAccountCheckErrorCount),
        otaOrderCount: java.Integer(this.otaOrderCount),
        rejectInstallIdeStatus: java.String(this.rejectInstallIdeStatus),
        totalCid: java.Integer(this.totalCid),
        overalOcc: this.overalOcc
          ? java.BigDecimal(this.overalOcc.value)
          : null,
        checkInRate: this.checkInRate
          ? java.BigDecimal(this.checkInRate.value)
          : null,
        pmsActualDays: java.Integer(this.pmsActualDays),
        pmsLoginRiskLevel: java.String(this.pmsLoginRiskLevel),
        cidLevel: java.String(this.cidLevel),
        otaBadCommentLevel: java.String(this.otaBadCommentLevel),
        ideInstallStatus: java.String(this.ideInstallStatus),
        badCommentErrorStatus: java.Boolean(this.badCommentErrorStatus),
        appOrderCount: java.Integer(this.appOrderCount),
        autoCheckInOrderCount: java.Integer(this.autoCheckInOrderCount),
        cidErrorStatus: java.Boolean(this.cidErrorStatus),
        pmsErrorStatus: java.Boolean(this.pmsErrorStatus),
        appBadCommentCount: java.Integer(this.appBadCommentCount),
        autoCheckInRiskLevel: java.String(this.autoCheckInRiskLevel),
        hotelId: java.Long(this.hotelId),
        otaBadCommentCount: java.Integer(this.otaBadCommentCount),
        pmsLoginDays: java.Integer(this.pmsLoginDays),
        hotelName: java.String(this.hotelName),
        otaCancelLevel: java.String(this.otaCancelLevel),
        revparAchieve: this.revparAchieve
          ? java.BigDecimal(this.revparAchieve.value)
          : null,
        otaCancelRate: this.otaCancelRate
          ? java.BigDecimal(this.otaCancelRate.value)
          : null,
        otaCancelOrderNum: java.Integer(this.otaCancelOrderNum),
        autoCheckInTotalCount: java.Integer(this.autoCheckInTotalCount),
        autoCheckInRate: this.autoCheckInRate
          ? java.BigDecimal(this.autoCheckInRate.value)
          : null,
        otaBadCommentRate: this.otaBadCommentRate
          ? java.BigDecimal(this.otaBadCommentRate.value)
          : null,
        otaAccountCheckSeriesFailedCount: java.Integer(
          this.otaAccountCheckSeriesFailedCount,
        ),
        rejectAuditCount: java.Integer(this.rejectAuditCount),
        appBadCommentRate: this.appBadCommentRate
          ? java.BigDecimal(this.appBadCommentRate.value)
          : null,
        signRmg: java.String(this.signRmg),
        otaTotalOrderNum: java.Integer(this.otaTotalOrderNum),
        hotelAgreementType: java.String(this.hotelAgreementType),
        otaCancelErrorStatus: java.Boolean(this.otaCancelErrorStatus),
        ideErrorStatus: java.Boolean(this.ideErrorStatus),
        appBadCommentLevel: java.String(this.appBadCommentLevel),
        pmsLoginRate: this.pmsLoginRate
          ? java.BigDecimal(this.pmsLoginRate.value)
          : null,
        incomeLossErrorStatus: java.Boolean(this.incomeLossErrorStatus),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
