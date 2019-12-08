import java from 'js-to-java';

export interface IOtaAccountCheckDetailDTO {
  valid?: string;
  channel?: string;
  hotelId?: number;
  checkDate?: Date;
  checkResult?: string;
  hotelName?: string;
}

export class OtaAccountCheckDetailDTO {
  constructor(params: IOtaAccountCheckDetailDTO) {
    this.valid = params.valid;
    this.channel = params.channel;
    this.hotelId = params.hotelId;
    this.checkDate = params.checkDate;
    this.checkResult = params.checkResult;
    this.hotelName = params.hotelName;
  }

  valid?: string;
  channel?: string;
  hotelId?: number;
  checkDate?: Date;
  checkResult?: string;
  hotelName?: string;

  __fields2java(): any {
    return {
      $class: 'com.oyo.report.api.response.OtaAccountCheckDetailDTO',
      $: {
        valid: java.String(this.valid),
        channel: java.String(this.channel),
        hotelId: java.Long(this.hotelId),
        checkDate: this.checkDate,
        checkResult: java.String(this.checkResult),
        hotelName: java.String(this.hotelName),
      },
    };
  }
}

//generate by interpret-cli dubbo2.js
