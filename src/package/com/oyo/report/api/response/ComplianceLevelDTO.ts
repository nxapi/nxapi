import java from 'js-to-java';

export interface IComplianceLevelDTO {
  hotelAccountCheckLevel?: number;
  hotelId?: number;
  cidRejectBookingLevel?: string;
  otherOperateLevel?: number;
}

export class ComplianceLevelDTO {
  constructor(params: IComplianceLevelDTO) {
    this.hotelAccountCheckLevel = params.hotelAccountCheckLevel;
    this.hotelId = params.hotelId;
    this.cidRejectBookingLevel = params.cidRejectBookingLevel;
    this.otherOperateLevel = params.otherOperateLevel;
  }

  hotelAccountCheckLevel?: number;
  hotelId?: number;
  cidRejectBookingLevel?: string;
  otherOperateLevel?: number;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.ComplianceLevelDTO',
      $: {
        hotelAccountCheckLevel: java.Integer(this.hotelAccountCheckLevel),
        hotelId: java.Long(this.hotelId),
        cidRejectBookingLevel: java.String(this.cidRejectBookingLevel),
        otherOperateLevel: java.Integer(this.otherOperateLevel),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
