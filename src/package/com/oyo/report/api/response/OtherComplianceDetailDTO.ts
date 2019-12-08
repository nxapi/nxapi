import java from 'js-to-java';

export interface IOtherComplianceDetailDTO {
  result?: string;
  bizDate?: Date;
  specialData?: string;
  hotelName?: string;
  complianceType?: string;
}

export class OtherComplianceDetailDTO {
  constructor(params: IOtherComplianceDetailDTO) {
    this.result = params.result;
    this.bizDate = params.bizDate;
    this.specialData = params.specialData;
    this.hotelName = params.hotelName;
    this.complianceType = params.complianceType;
  }

  result?: string;
  bizDate?: Date;
  specialData?: string;
  hotelName?: string;
  complianceType?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.OtherComplianceDetailDTO',
      $: {
        result: java.String(this.result),
        bizDate: this.bizDate,
        specialData: java.String(this.specialData),
        hotelName: java.String(this.hotelName),
        complianceType: java.String(this.complianceType),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
