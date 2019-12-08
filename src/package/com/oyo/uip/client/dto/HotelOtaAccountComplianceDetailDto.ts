import java from 'js-to-java';

export interface IHotelOtaAccountComplianceDetailDto {
  valid?: boolean;
  channel?: string;
  checkDate?: Date;
  checkResult?: string;
}

export class HotelOtaAccountComplianceDetailDto {
  constructor(params: IHotelOtaAccountComplianceDetailDto) {
    this.valid = params.valid;
    this.channel = params.channel;
    this.checkDate = params.checkDate;
    this.checkResult = params.checkResult;
  }

  valid?: boolean;
  channel?: string;
  checkDate?: Date;
  checkResult?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.uip.client.dto.HotelOtaAccountComplianceDetailDto',
      $: {
        valid: java.Boolean(this.valid),
        channel: java.String(this.channel),
        checkDate: this.checkDate,
        checkResult: java.String(this.checkResult),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
