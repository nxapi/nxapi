import { OtherOperateDetailDTO$ComplianceType } from './OtherOperateDetailDTO$ComplianceType';
import java from 'js-to-java';

export interface IOtherOperateDetailDTO {
  complianceTypeReadable?: string;
  auditMonth?: string;
  bizDate?: Date;
  hotelId?: number;
  hotelName?: string;
  complianceType?: OtherOperateDetailDTO$ComplianceType;
  lossesUrn?: string;
  cancelCount?: string;
  auditCountMonthly?: number;
  compliance?: string;
  overdueDays?: string;
  auditStatus?: string;
  beginTime?: string;
  endTime?: string;
}

export class OtherOperateDetailDTO {
  constructor(params: IOtherOperateDetailDTO) {
    this.complianceTypeReadable = params.complianceTypeReadable;
    this.auditMonth = params.auditMonth;
    this.bizDate = params.bizDate;
    this.hotelId = params.hotelId;
    this.hotelName = params.hotelName;
    this.complianceType = params.complianceType;
    this.lossesUrn = params.lossesUrn;
    this.cancelCount = params.cancelCount;
    this.auditCountMonthly = params.auditCountMonthly;
    this.compliance = params.compliance;
    this.overdueDays = params.overdueDays;
    this.auditStatus = params.auditStatus;
    this.beginTime = params.beginTime;
    this.endTime = params.endTime;
  }

  complianceTypeReadable?: string;
  auditMonth?: string;
  bizDate?: Date;
  hotelId?: number;
  hotelName?: string;
  complianceType?: OtherOperateDetailDTO$ComplianceType;
  lossesUrn?: string;
  cancelCount?: string;
  auditCountMonthly?: number;
  compliance?: string;
  overdueDays?: string;
  auditStatus?: string;
  beginTime?: string;
  endTime?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.OtherOperateDetailDTO',
      $: {
        complianceTypeReadable: java.String(this.complianceTypeReadable),
        auditMonth: java.String(this.auditMonth),
        bizDate: this.bizDate,
        hotelId: java.Long(this.hotelId),
        hotelName: java.String(this.hotelName),
        complianceType: java['enum'](
          'com.oyo.report.api.response.OtherOperateDetailDTO$ComplianceType',
          OtherOperateDetailDTO$ComplianceType[this.complianceType],
        ),
        lossesUrn: java.String(this.lossesUrn),
        cancelCount: java.String(this.cancelCount),
        auditCountMonthly: java.Integer(this.auditCountMonthly),
        compliance: java.String(this.compliance),
        overdueDays: java.String(this.overdueDays),
        auditStatus: java.String(this.auditStatus),
        beginTime: java.String(this.beginTime),
        endTime: java.String(this.endTime),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
